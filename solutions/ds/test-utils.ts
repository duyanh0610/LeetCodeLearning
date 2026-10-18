import { isDeepStrictEqual } from "node:util";

type Opts = {
  /** "unordered": sắp xếp mảng kết quả trước khi so (đề cho phép trả về thứ tự bất kỳ)
   *  "groups": mảng các nhóm, thứ tự nhóm và thứ tự trong nhóm đều không quan trọng */
  compare?: "unordered" | "groups";
  /** Giới hạn thời gian (ms). Quá giới hạn thì tính là FAIL (dùng cho test hiệu năng). */
  maxMs?: number;
};

const results: { label: string; ok: boolean; detail?: string }[] = [];

// -0 và 0 coi như bằng nhau (LeetCode cũng coi vậy)
const norm = (x: unknown): unknown =>
  Array.isArray(x) ? x.map(norm) : Object.is(x, -0) ? 0 : x;

const byJson = (a: unknown, b: unknown) =>
  JSON.stringify(a) < JSON.stringify(b) ? -1 : JSON.stringify(a) > JSON.stringify(b) ? 1 : 0;

const canon = (x: unknown, mode?: Opts["compare"]): unknown => {
  const v = norm(x);
  if (!Array.isArray(v) || !mode) return v;
  if (mode === "unordered") return [...v].sort(byJson);
  return v.map((g) => (Array.isArray(g) ? [...g].sort(byJson) : g)).sort(byJson);
};

const show = (x: unknown) => {
  const s = JSON.stringify(x);
  return s === undefined ? String(x) : s.length > 120 ? s.slice(0, 117) + "..." : s;
};

export function check(label: string, run: () => unknown, expected: unknown, opts: Opts = {}) {
  try {
    const t0 = performance.now();
    const actual = run();
    const ms = performance.now() - t0;
    if (!isDeepStrictEqual(canon(actual, opts.compare), canon(expected, opts.compare))) {
      results.push({ label, ok: false, detail: `mong đợi ${show(expected)}, nhận được ${show(actual)}` });
    } else if (opts.maxMs !== undefined && ms > opts.maxMs) {
      results.push({ label, ok: false, detail: `đúng nhưng chậm: ${ms.toFixed(0)}ms > ${opts.maxMs}ms` });
    } else {
      results.push({ label, ok: true });
    }
  } catch (e) {
    results.push({ label, ok: false, detail: `lỗi: ${(e as Error).message}` });
  }
}

export function report() {
  for (const r of results) console.log(`${r.ok ? "✓" : "✗"} ${r.label}${r.ok ? "" : "\n    " + r.detail}`);
  const passed = results.filter((r) => r.ok).length;
  console.log(`\n${passed}/${results.length} test đạt`);
  if (passed !== results.length) process.exitCode = 1;
}

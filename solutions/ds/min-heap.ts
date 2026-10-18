export class MinHeap<T> {
  private a: T[] = [];
  constructor(private cmp: (x: T, y: T) => number = (x, y) => (x as any) - (y as any)) {}

  size() { return this.a.length; }
  peek(): T | undefined { return this.a[0]; }

  push(v: T) {
    this.a.push(v);
    let i = this.a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.cmp(this.a[i], this.a[p]) >= 0) break;
      [this.a[i], this.a[p]] = [this.a[p], this.a[i]];
      i = p;
    }
  }

  pop(): T | undefined {
    if (!this.a.length) return undefined;
    const top = this.a[0];
    const last = this.a.pop()!;
    if (this.a.length) {
      this.a[0] = last;
      let i = 0;
      const n = this.a.length;
      while (true) {
        const l = 2 * i + 1, r = l + 1;
        let m = i;
        if (l < n && this.cmp(this.a[l], this.a[m]) < 0) m = l;
        if (r < n && this.cmp(this.a[r], this.a[m]) < 0) m = r;
        if (m === i) break;
        [this.a[i], this.a[m]] = [this.a[m], this.a[i]];
        i = m;
      }
    }
    return top;
  }
}

// MaxHeap: đảo hàm so sánh. Ví dụ: new MinHeap<number>((x, y) => y - x)

if (process.argv[1]?.endsWith("min-heap.ts")) {
  const h = new MinHeap<number>();
  [5, 3, 8, 1, 9, 2].forEach((x) => h.push(x));
  const out: number[] = [];
  while (h.size()) out.push(h.pop()!);
  console.log(out, JSON.stringify(out) === "[1,2,3,5,8,9]" ? "OK" : "FAIL");
}

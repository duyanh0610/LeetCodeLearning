/**
 * #205 Isomorphic Strings (Easy)
 * https://leetcode.com/problems/isomorphic-strings/
 * Dạng: Arrays & Hashing - Ngày 6
 *
 * ── ĐỀ BÀI ──
 * Hai chuỗi `s` và `t` là đẳng cấu nếu có thể thay các ký tự của `s` để được `t`, với điều kiện:
 * mỗi ký tự của `s` chỉ ánh xạ sang một ký tự duy nhất, hai ký tự khác nhau không được ánh xạ cùng một ký tự,
 * và thứ tự ký tự được giữ nguyên (một ký tự có thể ánh xạ sang chính nó).
 *
 * ── VÍ DỤ ──
 * s = "egg",   t = "add"   -> true
 * s = "foo",   t = "bar"   -> false
 * s = "paper", t = "title" -> true
 *
 * ── RÀNG BUỘC ──
 * - 1 <= s.length <= 5 * 10^4
 * - t.length == s.length
 * - s và t gồm ký tự ASCII hợp lệ
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function isIsomorphic(s: string, t: string): boolean {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/205-isomorphic-strings.ts) =====
check("ví dụ 1", () => isIsomorphic("egg", "add"), true);
check("ví dụ 2: một ký tự ánh xạ hai nơi", () => isIsomorphic("foo", "bar"), false);
check("ví dụ 3", () => isIsomorphic("paper", "title"), true);
check("hai ký tự khác nhau cùng ánh xạ một ký tự", () => isIsomorphic("badc", "baba"), false);
check("a, b -> a, a (vi phạm 1-1)", () => isIsomorphic("ab", "aa"), false);
check("1 ký tự giống", () => isIsomorphic("a", "a"), true);
check("1 ký tự khác", () => isIsomorphic("a", "b"), true);
check("hoán đổi ký tự", () => isIsomorphic("abab", "baba"), true);
check("chữ số", () => isIsomorphic("13", "42"), true);
check("ánh xạ ngược sai: aa -> ab", () => isIsomorphic("aa", "ab"), false);
check("hiệu năng: n=50000", () => isIsomorphic("a".repeat(50000), "b".repeat(50000)), true, { maxMs: 300 });

report();

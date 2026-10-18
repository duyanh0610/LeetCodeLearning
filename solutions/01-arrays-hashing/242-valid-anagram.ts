/**
 * #242 Valid Anagram (Easy)
 * https://leetcode.com/problems/valid-anagram/
 * Dạng: Arrays & Hashing - Ngày 3
 *
 * ── ĐỀ BÀI ──
 * Cho hai chuỗi `s` và `t`. Trả về true nếu `t` là một cách xáo trộn các ký tự của `s`
 * (cùng các ký tự với cùng số lần xuất hiện), ngược lại trả về false.
 *
 * ── VÍ DỤ ──
 * s = "anagram", t = "nagaram" -> true
 * s = "rat", t = "car"         -> false
 *
 * ── RÀNG BUỘC ──
 * - 1 <= s.length, t.length <= 5 * 10^4
 * - s và t chỉ gồm chữ cái thường a-z
 *
 * Follow-up: Nếu chuỗi chứa ký tự Unicode thì sửa lời giải thế nào?
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function isAnagram(s: string, t: string): boolean {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/242-valid-anagram.ts) =====
check("ví dụ 1", () => isAnagram("anagram", "nagaram"), true);
check("ví dụ 2", () => isAnagram("rat", "car"), false);
check("1 ký tự giống nhau", () => isAnagram("a", "a"), true);
check("1 ký tự khác nhau", () => isAnagram("a", "b"), false);
check("độ dài khác nhau", () => isAnagram("ab", "a"), false);
check("cùng độ dài, khác số lần xuất hiện", () => isAnagram("aab", "abb"), false);
check("listen / silent", () => isAnagram("listen", "silent"), true);
check("giống hệt nhau", () => isAnagram("abc", "abc"), true);
check("đảo ngược", () => isAnagram("abcdef", "fedcba"), true);
check("t là tập con của s nhưng ngắn hơn", () => isAnagram("aabb", "ab"), false);
check("hiệu năng: n=50000 giống nhau", () => isAnagram("a".repeat(50000), "a".repeat(50000)), true, { maxMs: 300 });
check("hiệu năng: n=50000 chỉ khác 1 ký tự", () => isAnagram("a".repeat(49999) + "b", "a".repeat(50000)), false, { maxMs: 300 });

report();

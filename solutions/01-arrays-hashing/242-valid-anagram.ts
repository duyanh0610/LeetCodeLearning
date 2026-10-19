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
// NOTE - điểm cần cải thiện:
// 1. Thêm kiểm tra độ dài ở đầu hàm: if (s.length !== t.length) return false;
//    (code vẫn đúng nếu thiếu, nhưng thoát sớm được và phỏng vấn thường mong thấy bước này)
// 2. Thoát sớm khi đếm bị âm ở vòng trừ của t: t có nhiều ký tự đó hơn s -> return false ngay.
// 3. Follow-up Unicode: duyệt bằng for (const c of s) thay vì s[i] để không tách cặp surrogate (emoji).
function isAnagram(s: string, t: string): boolean {
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    map.set(t[i], (map.get(t[i]) ?? 0) - 1);
  }

  for (const value of map.values()) {
    if (value !== 0) return false;
  }

  return true;
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

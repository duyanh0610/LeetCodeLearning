/**
 * #290 Word Pattern (Easy)
 * https://leetcode.com/problems/word-pattern/
 * Dạng: Arrays & Hashing - Ngày 7
 *
 * ── ĐỀ BÀI ──
 * Cho `pattern` và chuỗi `s` gồm các từ cách nhau đúng 1 dấu cách.
 * Trả về true nếu `s` khớp `pattern`, tức là có song ánh (1-1) giữa chữ cái của pattern và các từ của `s`.
 *
 * ── VÍ DỤ ──
 * pattern = "abba", s = "dog cat cat dog"  -> true
 * pattern = "abba", s = "dog cat cat fish" -> false
 * pattern = "aaaa", s = "dog cat cat dog"  -> false
 *
 * ── RÀNG BUỘC ──
 * - 1 <= pattern.length <= 300
 * - pattern chỉ gồm chữ cái thường
 * - 1 <= s.length <= 3000
 * - s gồm chữ cái thường và dấu cách, không có dấu cách thừa ở đầu/cuối
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function wordPattern(pattern: string, s: string): boolean {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/290-word-pattern.ts) =====
check("ví dụ 1", () => wordPattern("abba", "dog cat cat dog"), true);
check("ví dụ 2", () => wordPattern("abba", "dog cat cat fish"), false);
check("ví dụ 3: một từ ứng với nhiều chữ", () => wordPattern("aaaa", "dog cat cat dog"), false);
check("hai chữ khác nhau cùng một từ", () => wordPattern("abba", "dog dog dog dog"), false);
check("1 chữ 1 từ", () => wordPattern("a", "dog"), true);
check("ba chữ khác nhau, ba từ khác nhau", () => wordPattern("abc", "b c a"), true);
check("độ dài không khớp (nhiều từ hơn)", () => wordPattern("aaa", "aa aa aa aa"), false);
check("độ dài không khớp (ít từ hơn)", () => wordPattern("abc", "dog cat"), false);
check("ab với cùng một từ", () => wordPattern("ab", "dog dog"), false);
check("từ dài hơn một ký tự", () => wordPattern("ab", "aa a"), true);
check("hiệu năng: 300 chữ", () => wordPattern("a".repeat(300), Array(300).fill("dog").join(" ")), true, { maxMs: 100 });

report();

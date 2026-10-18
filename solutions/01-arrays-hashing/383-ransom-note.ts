/**
 * #383 Ransom Note (Easy)
 * https://leetcode.com/problems/ransom-note/
 * Dạng: Arrays & Hashing - Ngày 5
 *
 * ── ĐỀ BÀI ──
 * Trả về true nếu có thể tạo `ransomNote` bằng cách lấy các chữ cái từ `magazine`,
 * với mỗi chữ cái trong `magazine` chỉ được dùng tối đa 1 lần. Ngược lại trả về false.
 *
 * ── VÍ DỤ ──
 * ransomNote = "a",  magazine = "b"   -> false
 * ransomNote = "aa", magazine = "ab"  -> false
 * ransomNote = "aa", magazine = "aab" -> true
 *
 * ── RÀNG BUỘC ──
 * - 1 <= ransomNote.length, magazine.length <= 10^5
 * - Cả hai chỉ gồm chữ cái thường a-z
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function canConstruct(ransomNote: string, magazine: string): boolean {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/383-ransom-note.ts) =====
check("ví dụ 1", () => canConstruct("a", "b"), false);
check("ví dụ 2: thiếu 1 chữ a", () => canConstruct("aa", "ab"), false);
check("ví dụ 3", () => canConstruct("aa", "aab"), true);
check("cùng chữ cái, khác thứ tự", () => canConstruct("abc", "cba"), true);
check("giống hệt", () => canConstruct("abc", "abc"), true);
check("ransomNote dài hơn magazine", () => canConstruct("aab", "ba"), false);
check("magazine thừa chữ", () => canConstruct("ab", "aabbcc"), true);
check("đủ chữ nhưng thiếu số lượng", () => canConstruct("aaa", "aab"), false);
check("1 ký tự khớp", () => canConstruct("z", "xyz"), true);
check("hiệu năng: n=100000", () => canConstruct("a".repeat(100000), "a".repeat(100000)), true, { maxMs: 300 });
check("hiệu năng: thiếu đúng 1 chữ", () => canConstruct("a".repeat(100000), "a".repeat(99999) + "b"), false, { maxMs: 300 });

report();

/**
 * #387 First Unique Character in a String (Easy)
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 * Dạng: Arrays & Hashing - Ngày 4
 *
 * ── ĐỀ BÀI ──
 * Cho chuỗi `s`. Tìm ký tự không lặp lại đầu tiên (chỉ xuất hiện đúng 1 lần) và trả về CHỈ SỐ của nó.
 * Nếu không có ký tự nào như vậy, trả về -1.
 *
 * ── VÍ DỤ ──
 * s = "leetcode"     -> 0  (ký tự "l")
 * s = "loveleetcode" -> 2  (ký tự "v")
 * s = "aabb"         -> -1
 *
 * ── RÀNG BUỘC ──
 * - 1 <= s.length <= 10^5
 * - s chỉ gồm chữ cái thường a-z
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function firstUniqChar(s: string): number {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/387-first-unique-character-in-a-string.ts) =====
check("ví dụ 1", () => firstUniqChar("leetcode"), 0);
check("ví dụ 2", () => firstUniqChar("loveleetcode"), 2);
check("ví dụ 3: không có ký tự duy nhất", () => firstUniqChar("aabb"), -1);
check("1 ký tự", () => firstUniqChar("z"), 0);
check("mọi ký tự đều lặp", () => firstUniqChar("aadadaad"), -1);
check("ký tự duy nhất ở cuối", () => firstUniqChar("abcabcd"), 6);
check("tất cả ký tự khác nhau", () => firstUniqChar("abcdef"), 0);
check("ký tự lặp 3 lần không phải duy nhất", () => firstUniqChar("aaabc"), 3);
check("hai ký tự duy nhất, lấy cái đầu", () => firstUniqChar("aabcd"), 2);
check("hiệu năng: n=100000 toàn a", () => firstUniqChar("a".repeat(100000)), -1, { maxMs: 300 });
check("hiệu năng: duy nhất ở cuối, n=100000", () => firstUniqChar("a".repeat(99999) + "b"), 99999, { maxMs: 300 });

report();

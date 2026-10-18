/**
 * #41 First Missing Positive (Hard)
 * https://leetcode.com/problems/first-missing-positive/
 * Dạng: Arrays & Hashing - Ngày 13
 *
 * ── ĐỀ BÀI ──
 * Cho mảng số nguyên chưa sắp xếp `nums`. Trả về số nguyên DƯƠNG nhỏ nhất không xuất hiện trong mảng.
 * Phải chạy O(n) thời gian và chỉ dùng O(1) bộ nhớ phụ.
 *
 * ── VÍ DỤ ──
 * nums = [1,2,0]         -> 3
 * nums = [3,4,-1,1]      -> 2
 * nums = [7,8,9,11,12]   -> 1
 *
 * ── RÀNG BUỘC ──
 * - 1 <= nums.length <= 10^5
 * - -2^31 <= nums[i] <= 2^31 - 1
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function firstMissingPositive(nums: number[]): number {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/41-first-missing-positive.ts) =====
check("ví dụ 1", () => firstMissingPositive([1, 2, 0]), 3);
check("ví dụ 2", () => firstMissingPositive([3, 4, -1, 1]), 2);
check("ví dụ 3: toàn số lớn", () => firstMissingPositive([7, 8, 9, 11, 12]), 1);
check("[1] -> 2", () => firstMissingPositive([1]), 2);
check("[2] -> 1", () => firstMissingPositive([2]), 1);
check("đủ 1..n -> n+1", () => firstMissingPositive([1, 2, 3]), 4);
check("chỉ có 0", () => firstMissingPositive([0]), 1);
check("toàn số âm", () => firstMissingPositive([-1, -2]), 1);
check("có số trùng", () => firstMissingPositive([1, 1]), 2);
check("trùng và đủ dãy", () => firstMissingPositive([2, 2, 1, 1, 3]), 4);
check("giá trị biên int32", () => firstMissingPositive([2147483647]), 1);
check("thiếu 2 dù có số rất lớn", () => firstMissingPositive([1, 1000]), 2);
check("hoán vị đảo ngược 1..n", () => firstMissingPositive([4, 3, 2, 1]), 5);
check("hiệu năng: hoán vị 1..100000", () => firstMissingPositive(Array.from({ length: 100000 }, (_, i) => 100000 - i)), 100001, { maxMs: 300 });

report();

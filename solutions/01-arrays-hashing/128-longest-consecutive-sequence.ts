/**
 * #128 Longest Consecutive Sequence (Medium)
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * Dạng: Arrays & Hashing - Ngày 9
 *
 * ── ĐỀ BÀI ──
 * Cho mảng số nguyên chưa sắp xếp `nums`. Trả về độ dài của dãy số nguyên liên tiếp dài nhất
 * (các giá trị tăng dần từng 1, không cần liền nhau trong mảng). Phải chạy trong O(n).
 *
 * ── VÍ DỤ ──
 * nums = [100,4,200,1,3,2]        -> 4  (dãy 1,2,3,4)
 * nums = [0,3,7,2,5,8,4,6,0,1] -> 9  (dãy 0..8)
 *
 * ── RÀNG BUỘC ──
 * - 0 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function longestConsecutive(nums: number[]): number {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/128-longest-consecutive-sequence.ts) =====
check("ví dụ 1", () => longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
check("ví dụ 2: có số trùng", () => longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
check("mảng rỗng", () => longestConsecutive([]), 0);
check("1 phần tử", () => longestConsecutive([5]), 1);
check("không có hai số liên tiếp", () => longestConsecutive([10, 20, 30]), 1);
check("toàn số trùng nhau", () => longestConsecutive([1, 1, 1, 1]), 1);
check("số âm và dương liên tiếp", () => longestConsecutive([-2, -1, 0, 1, 2]), 5);
check("hai dãy, lấy dãy dài hơn", () => longestConsecutive([1, 2, 3, 10, 11]), 3);
check("đã sắp xếp giảm dần", () => longestConsecutive([5, 4, 3, 2, 1]), 5);
check("giá trị biên", () => longestConsecutive([1e9, -1e9, 1e9 - 1]), 2);
check("hiệu năng: n=100000 liên tiếp (đảo thứ tự)", () => longestConsecutive(Array.from({ length: 100000 }, (_, i) => 99999 - i)), 100000, { maxMs: 500 });

report();

/**
 * #1 Two Sum (Easy)
 * https://leetcode.com/problems/two-sum/
 * Dạng: Arrays & Hashing - Ngày 4
 *
 * ── ĐỀ BÀI ──
 * Cho mảng số nguyên `nums` và số nguyên `target`. Trả về CHỈ SỐ của hai phần tử có tổng bằng `target`.
 * Đề đảm bảo có đúng một đáp án, không được dùng cùng một phần tử hai lần, trả về theo thứ tự bất kỳ.
 *
 * ── VÍ DỤ ──
 * nums = [2,7,11,15], target = 9 -> [0,1]
 * nums = [3,2,4], target = 6      -> [1,2]
 * nums = [3,3], target = 6        -> [0,1]
 *
 * ── RÀNG BUỘC ──
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Chỉ có đúng một đáp án hợp lệ
 *
 * Follow-up: Có thể tốt hơn O(n²) không?
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function twoSum(nums: number[], target: number): number[] {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/1-two-sum.ts) =====
check("ví dụ 1", () => twoSum([2, 7, 11, 15], 9), [0, 1], { compare: "unordered" });
check("ví dụ 2: không phải 2 số đầu", () => twoSum([3, 2, 4], 6), [1, 2], { compare: "unordered" });
check("ví dụ 3: hai số giống nhau", () => twoSum([3, 3], 6), [0, 1], { compare: "unordered" });
check("toàn số âm", () => twoSum([-1, -2, -3, -4, -5], -8), [2, 4], { compare: "unordered" });
check("target = 0 với hai số 0", () => twoSum([0, 4, 3, 0], 0), [0, 3], { compare: "unordered" });
check("âm + dương = 0", () => twoSum([5, -5, 7], 0), [0, 1], { compare: "unordered" });
check("không dùng một phần tử hai lần (5+5)", () => twoSum([5, 1, 2, 5], 10), [0, 3], { compare: "unordered" });
check("giá trị biên 10^9", () => twoSum([1e9, -1e9], 0), [0, 1], { compare: "unordered" });
check("đáp án ở cuối mảng", () => twoSum([1, 2, 3, 4, 5, 6], 11), [4, 5], { compare: "unordered" });
check("hiệu năng n=10000", () => twoSum(Array.from({ length: 10000 }, (_, i) => i), 19997), [9998, 9999], { compare: "unordered", maxMs: 200 });

report();

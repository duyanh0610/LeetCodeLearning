/**
 * #974 Subarray Sums Divisible by K (Medium)
 * https://leetcode.com/problems/subarray-sums-divisible-by-k/
 * Dạng: Arrays & Hashing - Ngày 13
 *
 * ── ĐỀ BÀI ──
 * Cho mảng số nguyên `nums` và số nguyên `k`. Đếm số mảng con LIÊN TIẾP có tổng chia hết cho `k`.
 * Chú ý: toán tử % trong JS/TS có thể trả về số âm khi vế trái âm, cần chuẩn hóa về [0, k).
 *
 * ── VÍ DỤ ──
 * nums = [4,5,0,-2,-3,1], k = 5 -> 7
 * nums = [5], k = 9                 -> 0
 *
 * ── RÀNG BUỘC ──
 * - 1 <= nums.length <= 3 * 10^4
 * - -10^4 <= nums[i] <= 10^4
 * - 2 <= k <= 10^4
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function subarraysDivByK(nums: number[], k: number): number {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/974-subarray-sums-divisible-by-k.ts) =====
check("ví dụ 1", () => subarraysDivByK([4, 5, 0, -2, -3, 1], 5), 7);
check("ví dụ 2", () => subarraysDivByK([5], 9), 0);
check("1 phần tử chia hết", () => subarraysDivByK([5], 5), 1);
check("số âm (bẫy dấu của %)", () => subarraysDivByK([-1, 2, 9], 2), 2);
check("toàn 0: n(n+1)/2", () => subarraysDivByK([0, 0, 0], 3), 6);
check("toàn bội số âm", () => subarraysDivByK([-5, -5], 5), 3);
check("chỉ cả mảng chia hết", () => subarraysDivByK([1, 2, 3], 6), 1);
check("tổng triệt tiêu nhau", () => subarraysDivByK([2, -2, 2, -4], 6), 2);
check("k lớn hơn mọi tổng", () => subarraysDivByK([1, 2, 3], 100), 0);
check("k = 2, toàn số lẻ", () => subarraysDivByK([1, 1, 1, 1], 2), 4);
check("hiệu năng: n=30000 toàn 0", () => subarraysDivByK(Array(30000).fill(0), 2), 450015000, { maxMs: 300 });

report();

/**
 * #560 Subarray Sum Equals K (Medium)
 * https://leetcode.com/problems/subarray-sum-equals-k/
 * Dạng: Arrays & Hashing - Ngày 11
 *
 * ── ĐỀ BÀI ──
 * Cho mảng số nguyên `nums` và số nguyên `k`. Đếm số mảng con LIÊN TIẾP có tổng bằng `k`.
 * Lưu ý `nums` có thể chứa số âm và số 0.
 *
 * ── VÍ DỤ ──
 * nums = [1,1,1], k = 2 -> 2
 * nums = [1,2,3], k = 3 -> 2  ([1,2] và [3])
 *
 * ── RÀNG BUỘC ──
 * - 1 <= nums.length <= 2 * 10^4
 * - -1000 <= nums[i] <= 1000
 * - -10^7 <= k <= 10^7
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function subarraySum(nums: number[], k: number): number {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/560-subarray-sum-equals-k.ts) =====
check("ví dụ 1", () => subarraySum([1, 1, 1], 2), 2);
check("ví dụ 2", () => subarraySum([1, 2, 3], 3), 2);
check("1 phần tử khớp", () => subarraySum([1], 1), 1);
check("1 phần tử không khớp", () => subarraySum([1], 0), 0);
check("toàn 0, k = 0: n(n+1)/2", () => subarraySum([0, 0, 0], 0), 6);
check("có số âm, nhiều mảng con tổng 0", () => subarraySum([1, -1, 0], 0), 3);
check("số âm: chỉ [-1, 1]", () => subarraySum([-1, -1, 1], 0), 1);
check("ví dụ phức tạp", () => subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7), 4);
check("k âm", () => subarraySum([-1, -2, -3], -3), 2);
check("mảng con là cả mảng", () => subarraySum([1, 2, 3], 6), 1);
check("không có mảng con nào", () => subarraySum([1, 2, 3], 100), 0);
check("hiệu năng: n=20000 toàn 1, k=2", () => subarraySum(Array(20000).fill(1), 2), 19999, { maxMs: 300 });

report();

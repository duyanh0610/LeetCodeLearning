/**
 * #454 4Sum II (Medium)
 * https://leetcode.com/problems/4sum-ii/
 * Dạng: Arrays & Hashing - Ngày 8
 *
 * ── ĐỀ BÀI ──
 * Cho bốn mảng `nums1..nums4` cùng độ dài n. Đếm số bộ chỉ số (i, j, k, l) sao cho
 * nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0.
 *
 * ── VÍ DỤ ──
 * nums1=[1,2], nums2=[-2,-1], nums3=[-1,2], nums4=[0,2] -> 2
 * nums1=[0], nums2=[0], nums3=[0], nums4=[0] -> 1
 *
 * ── RÀNG BUỘC ──
 * - n == nums1.length == nums2.length == nums3.length == nums4.length
 * - 1 <= n <= 200
 * - -2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/454-4sum-ii.ts) =====
check("ví dụ 1", () => fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]), 2);
check("ví dụ 2: một phần tử 0", () => fourSumCount([0], [0], [0], [0]), 1);
check("một phần tử, tổng khác 0", () => fourSumCount([1], [1], [1], [1]), 0);
check("toàn 0, n=2: 2^4 bộ", () => fourSumCount([0, 0], [0, 0], [0, 0], [0, 0]), 16);
check("một phần tử, tổng bằng 0", () => fourSumCount([1], [2], [-1], [-2]), 1);
check("không có bộ nào", () => fourSumCount([1, 2], [3, 4], [5, 6], [7, 8]), 0);
check("toàn số âm và dương đối nhau", () => fourSumCount([-1, 1], [-1, 1], [-1, 1], [-1, 1]), 6);
check("giá trị biên 2^28", () => fourSumCount([2 ** 28], [2 ** 28], [-(2 ** 28)], [-(2 ** 28)]), 1);
check("trùng giá trị giữa các mảng", () => fourSumCount([1, 1], [-1, -1], [0, 0], [0, 0]), 16);
check("hiệu năng: n=200 toàn 0 (200^4 bộ)", () => fourSumCount(Array(200).fill(0), Array(200).fill(0), Array(200).fill(0), Array(200).fill(0)), 1600000000, { maxMs: 1000 });

report();

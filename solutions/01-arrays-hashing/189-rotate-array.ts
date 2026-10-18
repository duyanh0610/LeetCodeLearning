/**
 * #189 Rotate Array (Medium)
 * https://leetcode.com/problems/rotate-array/
 * Dạng: Arrays & Hashing - Ngày 10
 *
 * ── ĐỀ BÀI ──
 * Xoay mảng `nums` sang PHẢI `k` bước, thực hiện TẠI CHỖ (sửa trực tiếp `nums`, không trả về gì).
 * Mỗi bước xoay đưa phần tử cuối lên đầu mảng. `k` có thể lớn hơn độ dài mảng.
 *
 * ── VÍ DỤ ──
 * nums = [1,2,3,4,5,6,7], k = 3 -> [5,6,7,1,2,3,4]
 * nums = [-1,-100,3,99], k = 2   -> [3,99,-1,-100]
 *
 * ── RÀNG BUỘC ──
 * - 1 <= nums.length <= 10^5
 * - -2^31 <= nums[i] <= 2^31 - 1
 * - 0 <= k <= 10^5
 *
 * Follow-up: Làm tại chỗ với O(1) bộ nhớ phụ (gợi ý: đảo ngược 3 lần).
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function rotate(nums: number[], k: number): void {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/189-rotate-array.ts) =====
// Hàm trợ giúp: chạy rotate rồi trả về chính mảng đã bị sửa
const rot = (nums: number[], k: number) => { rotate(nums, k); return nums; };
check("ví dụ 1", () => rot([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4]);
check("ví dụ 2", () => rot([-1, -100, 3, 99], 2), [3, 99, -1, -100]);
check("1 phần tử", () => rot([1], 5), [1]);
check("k lớn hơn độ dài", () => rot([1, 2], 3), [2, 1]);
check("k = 0", () => rot([1, 2, 3], 0), [1, 2, 3]);
check("k bằng độ dài", () => rot([1, 2, 3], 3), [1, 2, 3]);
check("k = n - 1", () => rot([1, 2, 3, 4], 3), [2, 3, 4, 1]);
check("k = 1", () => rot([1, 2, 3, 4], 1), [4, 1, 2, 3]);
check("n chẵn, k lớn", () => rot([1, 2, 3, 4, 5, 6], 4), [3, 4, 5, 6, 1, 2]);
check("k bội của n", () => rot([1, 2, 3, 4, 5], 10), [1, 2, 3, 4, 5]);
check("sửa tại chỗ (cùng tham chiếu mảng)", () => { const a = [1, 2, 3]; rotate(a, 1); return a; }, [3, 1, 2]);
check("hiệu năng: n=100000, k=99999", () => { const a = Array.from({ length: 100000 }, (_, i) => i); rotate(a, 99999); return a[0] === 1 && a[99999] === 0 && a[1] === 2; }, true, { maxMs: 300 });

report();

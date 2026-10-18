/**
 * #238 Product of Array Except Self (Medium)
 * https://leetcode.com/problems/product-of-array-except-self/
 * Dạng: Arrays & Hashing - Ngày 7
 *
 * ── ĐỀ BÀI ──
 * Cho mảng `nums`. Trả về mảng `answer` mà `answer[i]` bằng tích của TẤT CẢ phần tử trừ `nums[i]`.
 * Phải chạy O(n) và KHÔNG được dùng phép chia. Mọi tích tiền tố/hậu tố đều vừa số nguyên 32 bit.
 *
 * ── VÍ DỤ ──
 * nums = [1,2,3,4]      -> [24,12,8,6]
 * nums = [-1,1,0,-3,3] -> [0,0,9,0,0]
 *
 * ── RÀNG BUỘC ──
 * - 2 <= nums.length <= 10^5
 * - -30 <= nums[i] <= 30
 *
 * Follow-up: Làm với O(1) bộ nhớ phụ (mảng kết quả không tính).
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function productExceptSelf(nums: number[]): number[] {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/238-product-of-array-except-self.ts) =====
check("ví dụ 1", () => productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
check("ví dụ 2: có số 0", () => productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
check("2 phần tử", () => productExceptSelf([2, 3]), [3, 2]);
check("hai số 0 -> toàn 0", () => productExceptSelf([0, 0]), [0, 0]);
check("toàn số 1", () => productExceptSelf([1, 1, 1]), [1, 1, 1]);
check("một số 0: chỉ vị trí đó khác 0", () => productExceptSelf([0, 4, 5]), [20, 0, 0]);
check("hai số âm", () => productExceptSelf([-1, -1]), [-1, -1]);
check("ba số 0", () => productExceptSelf([0, 0, 0]), [0, 0, 0]);
check("số 0 ở giữa", () => productExceptSelf([2, 0, 3]), [0, 6, 0]);
check("xen kẽ dấu", () => productExceptSelf([-2, 3, -4]), [-12, 8, -6]);
check("hiệu năng: n=100000 toàn 1", () => productExceptSelf(Array(100000).fill(1)), Array(100000).fill(1), { maxMs: 300 });

report();

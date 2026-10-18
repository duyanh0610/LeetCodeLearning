/**
 * #448 Find All Numbers Disappeared in an Array (Easy)
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * Dạng: Arrays & Hashing - Ngày 3
 *
 * ── ĐỀ BÀI ──
 * Cho mảng `nums` gồm n số nguyên, mỗi số nằm trong khoảng [1, n] (có thể trùng).
 * Trả về danh sách mọi số trong [1, n] KHÔNG xuất hiện trong `nums` (thứ tự bất kỳ).
 *
 * ── VÍ DỤ ──
 * nums = [4,3,2,7,8,2,3,1] -> [5,6]
 * nums = [1,1]             -> [2]
 *
 * ── RÀNG BUỘC ──
 * - n == nums.length
 * - 1 <= n <= 10^5
 * - 1 <= nums[i] <= n
 *
 * Follow-up: Làm không dùng bộ nhớ phụ (không tính mảng kết quả) và trong O(n).
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function findDisappearedNumbers(nums: number[]): number[] {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/448-find-all-numbers-disappeared-in-an-array.ts) =====
check("ví dụ 1", () => findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), [5, 6], { compare: "unordered" });
check("ví dụ 2", () => findDisappearedNumbers([1, 1]), [2], { compare: "unordered" });
check("1 phần tử", () => findDisappearedNumbers([1]), []);
check("hoán vị đầy đủ, không thiếu số nào", () => findDisappearedNumbers([3, 1, 2]), []);
check("thiếu số 1", () => findDisappearedNumbers([2, 2]), [1], { compare: "unordered" });
check("thiếu nhiều số", () => findDisappearedNumbers([1, 1, 1, 1]), [2, 3, 4], { compare: "unordered" });
check("thiếu số cuối n", () => findDisappearedNumbers([1, 2, 2]), [3], { compare: "unordered" });
check("toàn số n", () => findDisappearedNumbers([3, 3, 3]), [1, 2], { compare: "unordered" });
check("đã sắp xếp, có trùng", () => findDisappearedNumbers([1, 2, 2, 4, 4]), [3, 5], { compare: "unordered" });
check("hiệu năng n=100000", () => findDisappearedNumbers(Array(100000).fill(1)), Array.from({ length: 99999 }, (_, i) => i + 2), { compare: "unordered", maxMs: 300 });

report();

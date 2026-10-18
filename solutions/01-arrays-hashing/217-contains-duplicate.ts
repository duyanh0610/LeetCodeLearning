/**
 * #217 Contains Duplicate (Easy)
 * https://leetcode.com/problems/contains-duplicate/
 * Dạng: Arrays & Hashing - Ngày 2
 *
 * ── ĐỀ BÀI ──
 * Cho một mảng số nguyên `nums`. Trả về true nếu có ít nhất một giá trị xuất hiện từ 2 lần trở lên,
 * trả về false nếu mọi phần tử đều khác nhau.
 *
 * ── VÍ DỤ ──
 * nums = [1,2,3,1]            -> true   (số 1 xuất hiện 2 lần)
 * nums = [1,2,3,4]            -> false
 * nums = [1,1,1,3,3,4,3,2,4,2] -> true
 *
 * ── RÀNG BUỘC ──
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function containsDuplicate(nums: number[]): boolean {
  const map = new Map<number, number>()
  for (let i = 0; i <nums.length; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], 1);
  }

  return false;
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/217-contains-duplicate.ts) =====
check("ví dụ 1: có trùng", () => containsDuplicate([1, 2, 3, 1]), true);
check("ví dụ 2: không trùng", () => containsDuplicate([1, 2, 3, 4]), false);
check("ví dụ 3: nhiều số trùng", () => containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
check("1 phần tử", () => containsDuplicate([5]), false);
check("2 phần tử giống nhau", () => containsDuplicate([7, 7]), true);
check("số âm trùng nhau", () => containsDuplicate([-1, -1]), true);
check("âm và dương cùng độ lớn không phải trùng", () => containsDuplicate([-1, 1]), false);
check("số 0 trùng", () => containsDuplicate([0, 4, 5, 0]), true);
check("trùng ở hai đầu mảng", () => containsDuplicate([9, 1, 2, 3, 4, 9]), true);
check("giá trị biên 10^9", () => containsDuplicate([1e9, -1e9, 1e9]), true);
check("hiệu năng: 100000 số khác nhau", () => containsDuplicate(Array.from({ length: 100000 }, (_, i) => i)), false, { maxMs: 300 });
check("hiệu năng: trùng ở cuối, n=100000", () => containsDuplicate([...Array.from({ length: 99999 }, (_, i) => i), 0]), true, { maxMs: 300 });

report();

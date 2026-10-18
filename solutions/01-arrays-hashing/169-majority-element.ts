/**
 * #169 Majority Element (Easy)
 * https://leetcode.com/problems/majority-element/
 * Dạng: Arrays & Hashing - Ngày 2
 *
 * ── ĐỀ BÀI ──
 * Cho mảng `nums` gồm n số nguyên. Phần tử đa số là phần tử xuất hiện NHIỀU HƠN ⌊n/2⌋ lần.
 * Đề đảm bảo luôn tồn tại phần tử đa số. Trả về nó.
 *
 * ── VÍ DỤ ──
 * nums = [3,2,3]          -> 3
 * nums = [2,2,1,1,1,2,2]  -> 2
 *
 * ── RÀNG BUỘC ──
 * - n == nums.length
 * - 1 <= n <= 5 * 10^4
 * - -10^9 <= nums[i] <= 10^9
 *
 * Follow-up: Giải trong O(n) thời gian và O(1) bộ nhớ phụ (gợi ý: Boyer-Moore voting).
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function majorityElement(nums: number[]): number {
  // TODO
  const map = new Map<number,number>();
  let maxCount = 0;
  let result = 0;
  for(let i = 0; i< nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);

    if(map.get(nums[i])! > maxCount) {
      maxCount = map.get(nums[i])!;
      result = nums[i];
    }
  }
  return result;
}

// Cách 2: Boyer-Moore voting - Time O(n), Space O(1)
// function majorityElement(nums: number[]): number {
//   let candidate = 0;
//   let count = 0;
//   for (const x of nums) {
//     if (count === 0) candidate = x;     // hết điểm -> đổi ứng viên
//     count += x === candidate ? 1 : -1;  // giống thì +1, khác thì -1
//   }
//   return candidate;
// }

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/169-majority-element.ts) =====
check("ví dụ 1", () => majorityElement([3, 2, 3]), 3);
check("ví dụ 2", () => majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
check("1 phần tử", () => majorityElement([1]), 1);
check("tất cả giống nhau", () => majorityElement([5, 5, 5, 5]), 5);
check("số âm là đa số", () => majorityElement([-1, -1, 2]), -1);
check("đa số nằm ở cuối mảng", () => majorityElement([1, 2, 3, 3, 3]), 3);
check("đa số xen kẽ", () => majorityElement([1, 2, 1, 2, 1]), 1);
check("đa số vừa đủ (n chẵn, > n/2)", () => majorityElement([4, 4, 4, 1, 2, 3, 4]), 4);
check("chứa số 0", () => majorityElement([0, 0, 1, 0, 2]), 0);
check("giá trị biên", () => majorityElement([-1e9, 1e9, -1e9]), -1e9);
check("hiệu năng n=50000", () => majorityElement([...Array(25001).fill(7), ...Array.from({ length: 24999 }, (_, i) => i + 100)]), 7, { maxMs: 300 });

report();

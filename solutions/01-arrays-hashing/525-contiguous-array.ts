/**
 * #525 Contiguous Array (Medium)
 * https://leetcode.com/problems/contiguous-array/
 * Dạng: Arrays & Hashing - Ngày 9
 *
 * ── ĐỀ BÀI ──
 * Cho mảng nhị phân `nums` (chỉ gồm 0 và 1). Trả về độ dài của mảng con LIÊN TIẾP dài nhất
 * có số lượng 0 bằng số lượng 1.
 *
 * ── VÍ DỤ ──
 * nums = [0,1]   -> 2
 * nums = [0,1,0] -> 2
 * nums = [0,1,1,1,1,1,0,0,0] -> 6
 *
 * ── RÀNG BUỘC ──
 * - 1 <= nums.length <= 10^5
 * - nums[i] là 0 hoặc 1
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function findMaxLength(nums: number[]): number {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/525-contiguous-array.ts) =====
check("ví dụ 1", () => findMaxLength([0, 1]), 2);
check("ví dụ 2", () => findMaxLength([0, 1, 0]), 2);
check("ví dụ 3", () => findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0]), 6);
check("1 phần tử 0", () => findMaxLength([0]), 0);
check("1 phần tử 1", () => findMaxLength([1]), 0);
check("toàn 1", () => findMaxLength([1, 1, 1]), 0);
check("toàn bộ mảng cân bằng", () => findMaxLength([0, 0, 1, 1]), 4);
check("đáp án không bắt đầu từ đầu mảng", () => findMaxLength([1, 1, 0, 1, 0, 0]), 6);
check("đáp án ở giữa", () => findMaxLength([0, 0, 0, 1, 1, 1, 1]), 6);
check("mảng con cân bằng ở cuối", () => findMaxLength([1, 1, 1, 0, 1, 0]), 4);
check("hiệu năng: xen kẽ 0,1 n=100000", () => findMaxLength(Array.from({ length: 100000 }, (_, i) => i % 2)), 100000, { maxMs: 300 });
check("hiệu năng: toàn 0 n=100000", () => findMaxLength(Array(100000).fill(0)), 0, { maxMs: 300 });

report();

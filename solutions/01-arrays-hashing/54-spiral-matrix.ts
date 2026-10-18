/**
 * #54 Spiral Matrix (Medium)
 * https://leetcode.com/problems/spiral-matrix/
 * Dạng: Arrays & Hashing - Ngày 12
 *
 * ── ĐỀ BÀI ──
 * Cho ma trận m x n. Trả về tất cả phần tử theo THỨ TỰ XOÁY ỐC: bắt đầu từ góc trên trái,
 * đi sang phải, rồi xuống, rồi sang trái, rồi lên, cứ thế vào trong.
 *
 * ── VÍ DỤ ──
 * [[1,2,3],[4,5,6],[7,8,9]] -> [1,2,3,6,9,8,7,4,5]
 * [[1,2,3,4],[5,6,7,8],[9,10,11,12]] -> [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 * ── RÀNG BUỘC ──
 * - m == matrix.length, n == matrix[i].length
 * - 1 <= m, n <= 10
 * - -100 <= matrix[i][j] <= 100
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function spiralOrder(matrix: number[][]): number[] {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/54-spiral-matrix.ts) =====
check("ví dụ 1: 3x3", () => spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
check("ví dụ 2: 3x4", () => spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]), [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
check("1x1", () => spiralOrder([[1]]), [1]);
check("1 hàng", () => spiralOrder([[1, 2, 3]]), [1, 2, 3]);
check("1 cột", () => spiralOrder([[1], [2], [3]]), [1, 2, 3]);
check("2x2", () => spiralOrder([[1, 2], [3, 4]]), [1, 2, 4, 3]);
check("4x3 (nhiều hàng hơn cột)", () => spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]), [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8]);
check("2x3", () => spiralOrder([[1, 2, 3], [4, 5, 6]]), [1, 2, 3, 6, 5, 4]);
check("5x1", () => spiralOrder([[1], [2], [3], [4], [5]]), [1, 2, 3, 4, 5]);
check("4x4", () => spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]), [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
check("có số âm", () => spiralOrder([[-1, -2], [-3, -4]]), [-1, -2, -4, -3]);

report();

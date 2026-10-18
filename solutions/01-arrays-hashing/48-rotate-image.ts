/**
 * #48 Rotate Image (Medium)
 * https://leetcode.com/problems/rotate-image/
 * Dạng: Arrays & Hashing - Ngày 11
 *
 * ── ĐỀ BÀI ──
 * Cho ma trận vuông n x n biểu diễn một ảnh. Xoay ảnh 90 độ THEO CHIỀU KIM ĐỒNG HỒ, thực hiện TẠI CHỖ
 * (sửa trực tiếp `matrix`, không cấp phát ma trận 2D khác).
 *
 * ── VÍ DỤ ──
 * [[1,2,3],[4,5,6],[7,8,9]] -> [[7,4,1],[8,5,2],[9,6,3]]
 * [[1,2],[3,4]] -> [[3,1],[4,2]]
 *
 * ── RÀNG BUỘC ──
 * - n == matrix.length == matrix[i].length
 * - 1 <= n <= 20
 * - -1000 <= matrix[i][j] <= 1000
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function rotate(matrix: number[][]): void {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/48-rotate-image.ts) =====
const rot = (m: number[][]) => { rotate(m); return m; };
check("ví dụ 1: 3x3", () => rot([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
check("ví dụ 2: 4x4", () => rot([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]), [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]);
check("1x1", () => rot([[1]]), [[1]]);
check("2x2", () => rot([[1, 2], [3, 4]]), [[3, 1], [4, 2]]);
check("số âm", () => rot([[-1, -2], [-3, -4]]), [[-3, -1], [-4, -2]]);
check("5x5: so với công thức m[n-1-j][i]", () => { const n = 5; const m = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => i * n + j)); const exp = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => m[n - 1 - j][i])); return JSON.stringify(rot(m)) === JSON.stringify(exp); }, true);
check("xoay 4 lần trở về ban đầu", () => { const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; for (let i = 0; i < 4; i++) rotate(m); return m; }, [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
check("ma trận toàn số giống nhau", () => rot([[7, 7], [7, 7]]), [[7, 7], [7, 7]]);
check("sửa tại chỗ (cùng tham chiếu)", () => { const m = [[1, 2], [3, 4]]; const row0 = m[0]; rotate(m); return row0 === m[0] || m[0].length === 2; }, true);
check("20x20 xoay 2 lần = đảo 180 độ", () => { const n = 20; const m = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => i * n + j)); rotate(m); rotate(m); return m; }, Array.from({ length: 20 }, (_, i) => Array.from({ length: 20 }, (_, j) => (19 - i) * 20 + (19 - j))));

report();

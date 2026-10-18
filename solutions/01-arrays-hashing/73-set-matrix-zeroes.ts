/**
 * #73 Set Matrix Zeroes (Medium)
 * https://leetcode.com/problems/set-matrix-zeroes/
 * Dạng: Arrays & Hashing - Ngày 12
 *
 * ── ĐỀ BÀI ──
 * Cho ma trận m x n. Nếu một phần tử bằng 0 thì đặt TOÀN BỘ hàng và cột chứa nó thành 0.
 * Thực hiện TẠI CHỖ (sửa trực tiếp `matrix`).
 *
 * ── VÍ DỤ ──
 * [[1,1,1],[1,0,1],[1,1,1]] -> [[1,0,1],[0,0,0],[1,0,1]]
 * [[0,1,2,0],[3,4,5,2],[1,3,1,5]] -> [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 *
 * ── RÀNG BUỘC ──
 * - m == matrix.length, n == matrix[0].length
 * - 1 <= m, n <= 200
 * - -2^31 <= matrix[i][j] <= 2^31 - 1
 *
 * Follow-up: Giải với O(1) bộ nhớ phụ (gợi ý: dùng hàng đầu và cột đầu làm bộ nhớ đánh dấu).
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function setZeroes(matrix: number[][]): void {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/73-set-matrix-zeroes.ts) =====
const zero = (m: number[][]) => { setZeroes(m); return m; };
check("ví dụ 1", () => zero([[1, 1, 1], [1, 0, 1], [1, 1, 1]]), [[1, 0, 1], [0, 0, 0], [1, 0, 1]]);
check("ví dụ 2: hai số 0 ở hàng đầu", () => zero([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]), [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]);
check("1x1 khác 0", () => zero([[1]]), [[1]]);
check("1x1 bằng 0", () => zero([[0]]), [[0]]);
check("không có số 0 nào", () => zero([[1, 2, 3]]), [[1, 2, 3]]);
check("một hàng có số 0", () => zero([[1, 0, 3]]), [[0, 0, 0]]);
check("một cột có số 0", () => zero([[0], [1], [2]]), [[0], [0], [0]]);
check("số 0 ở góc dưới phải", () => zero([[1, 2], [3, 0]]), [[1, 0], [0, 0]]);
check("toàn 0", () => zero([[0, 0], [0, 0]]), [[0, 0], [0, 0]]);
check("số 0 ở cột đầu, hàng giữa", () => zero([[1, 1], [0, 1], [1, 1]]), [[0, 1], [0, 0], [0, 1]]);
check("số 0 ở hàng đầu, không phải cột đầu", () => zero([[1, 0], [1, 1]]), [[0, 0], [1, 0]]);
check("hiệu năng: 200x200, 1 số 0 ở giữa", () => { const m = Array.from({ length: 200 }, () => Array(200).fill(1)); m[100][100] = 0; zero(m); return m.every((r, i) => r.every((v, j) => v === (i === 100 || j === 100 ? 0 : 1))); }, true, { maxMs: 300 });

report();

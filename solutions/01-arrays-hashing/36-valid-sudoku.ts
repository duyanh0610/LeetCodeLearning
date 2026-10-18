/**
 * #36 Valid Sudoku (Medium)
 * https://leetcode.com/problems/valid-sudoku/
 * Dạng: Arrays & Hashing - Ngày 8
 *
 * ── ĐỀ BÀI ──
 * Kiểm tra bảng Sudoku 9x9 (có thể mới điền một phần) có hợp lệ không. Chỉ xét các ô đã điền:
 * 1) mỗi hàng không có chữ số 1-9 lặp lại; 2) mỗi cột không có chữ số lặp lại;
 * 3) mỗi khối con 3x3 (chia bảng thành 9 khối) không có chữ số lặp lại.
 * Ô trống ký hiệu bằng '.'. Bảng hợp lệ chưa chắc đã giải được.
 *
 * ── VÍ DỤ ──
 * Bảng cổ điển (bảng mẫu trong test) -> true
 * Đổi ô đầu tiên của bảng đó thành '8' (trùng cột) -> false
 *
 * ── RÀNG BUỘC ──
 * - board.length == 9 và board[i].length == 9
 * - board[i][j] là chữ số '1'-'9' hoặc '.'
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function isValidSudoku(board: string[][]): boolean {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/36-valid-sudoku.ts) =====
const toBoard = (rows: string[]) => rows.map((r) => r.split(""));
const emptyBoard = () => Array.from({ length: 9 }, () => Array<string>(9).fill("."));
const classic = [
  "53..7....",
  "6..195...",
  ".98....6.",
  "8...6...3",
  "4..8.3..1",
  "7...2...6",
  ".6....28.",
  "...419..5",
  "....8..79",
];
check("ví dụ 1: bảng cổ điển hợp lệ", () => isValidSudoku(toBoard(classic)), true);
check("ví dụ 2: trùng số trong cột", () => isValidSudoku(toBoard(["83..7....", ...classic.slice(1)])), false);
check("bảng trống", () => isValidSudoku(emptyBoard()), true);
check("trùng trong hàng", () => { const b = emptyBoard(); b[0][0] = "1"; b[0][8] = "1"; return isValidSudoku(b); }, false);
check("trùng trong cột", () => { const b = emptyBoard(); b[0][0] = "1"; b[8][0] = "1"; return isValidSudoku(b); }, false);
check("trùng trong khối 3x3 (khác hàng, khác cột)", () => { const b = emptyBoard(); b[0][0] = "1"; b[1][1] = "1"; return isValidSudoku(b); }, false);
check("cùng số nhưng khác hàng/cột/khối thì hợp lệ", () => { const b = emptyBoard(); b[0][0] = "1"; b[1][3] = "1"; return isValidSudoku(b); }, true);
check("bảng đã giải xong hợp lệ", () => isValidSudoku(toBoard(["534678912", "672195348", "198342567", "859761423", "426853791", "713924856", "961537284", "287419635", "345286179"])), true);
check("trùng ở khối cuối (góc dưới phải)", () => { const b = emptyBoard(); b[6][6] = "9"; b[8][8] = "9"; return isValidSudoku(b); }, false);
check("trùng ở khối giữa", () => { const b = emptyBoard(); b[3][3] = "5"; b[5][4] = "5"; return isValidSudoku(b); }, false);
check("bảng đầy hợp lệ nhưng đổi 1 ô thành trùng", () => isValidSudoku(toBoard(["534678912", "672195348", "198342567", "859761423", "426853791", "713924856", "961537284", "287419635", "345286171"])), false);

report();

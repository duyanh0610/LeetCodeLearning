/**
 * #271 Encode and Decode Strings (Medium)
 * https://leetcode.com/problems/encode-and-decode-strings/
 * Dạng: Arrays & Hashing - Ngày 10
 *
 * ── ĐỀ BÀI ──
 * (Bài thiết kế, trên LeetCode là bài premium.) Viết hai hàm:
 *   - encode(strs): gộp một danh sách chuỗi thành MỘT chuỗi duy nhất để gửi qua mạng.
 *   - decode(s): nhận chuỗi đó và khôi phục lại đúng danh sách chuỗi ban đầu.
 * Chuỗi trong danh sách có thể chứa BẤT KỲ ký tự nào (kể cả ký tự bạn định dùng làm dấu phân cách),
 * và danh sách rỗng [] phải khác với danh sách [""]. Không dùng hàm tuần tự hóa có sẵn như JSON.
 *
 * ── VÍ DỤ ──
 * strs = ["hello","world"] -> encode -> decode -> ["hello","world"]
 * strs = [""]              -> encode -> decode -> [""]
 *
 * ── RÀNG BUỘC ──
 * - 0 <= strs.length <= 200
 * - 0 <= strs[i].length <= 200
 * - strs[i] có thể chứa mọi ký tự (kể cả ký tự đặc biệt)
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function encode(strs: string[]): string {
  // TODO
  throw new Error("TODO");
}

function decode(s: string): string[] {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/271-encode-and-decode-strings.ts) =====
const roundTrip = (strs: string[]) => decode(encode(strs));
check("ví dụ 1", () => roundTrip(["hello", "world"]), ["hello", "world"]);
check("ví dụ 2: một chuỗi rỗng", () => roundTrip([""]), [""]);
check("danh sách rỗng khác [\"\"]", () => roundTrip([]), []);
check("nhiều chuỗi rỗng", () => roundTrip(["", ""]), ["", ""]);
check("chuỗi rỗng xen giữa", () => roundTrip(["", "a", ""]), ["", "a", ""]);
check("chứa ký tự phân cách #", () => roundTrip(["a#b", "3#c", "#"]), ["a#b", "3#c", "#"]);
check("chuỗi giống header độ dài", () => roundTrip(["5#abc", "2#"]), ["5#abc", "2#"]);
check("chứa chữ số và dấu phẩy", () => roundTrip(["1,2,3", "4,5"]), ["1,2,3", "4,5"]);
check("chứa xuống dòng và khoảng trắng", () => roundTrip(["a\nb", "  ", "\t"]), ["a\nb", "  ", "\t"]);
check("chứa Unicode", () => roundTrip(["xin chào", "日本語", "😀"]), ["xin chào", "日本語", "😀"]);
check("encode trả về một string", () => typeof encode(["a", "b"]), "string");
check("hiệu năng: 200 chuỗi dài 200", () => roundTrip(Array.from({ length: 200 }, (_, i) => String(i % 10).repeat(200))), Array.from({ length: 200 }, (_, i) => String(i % 10).repeat(200)), { maxMs: 100 });

report();

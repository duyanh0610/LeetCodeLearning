/**
 * #49 Group Anagrams (Medium)
 * https://leetcode.com/problems/group-anagrams/
 * Dạng: Arrays & Hashing - Ngày 5
 *
 * ── ĐỀ BÀI ──
 * Cho mảng chuỗi `strs`. Gom các chuỗi là anagram của nhau vào cùng một nhóm.
 * Trả về danh sách các nhóm, thứ tự các nhóm và thứ tự trong nhóm đều tùy ý.
 *
 * ── VÍ DỤ ──
 * strs = ["eat","tea","tan","ate","nat","bat"] -> [["bat"],["nat","tan"],["ate","eat","tea"]]
 * strs = [""]  -> [[""]]
 * strs = ["a"] -> [["a"]]
 *
 * ── RÀNG BUỘC ──
 * - 1 <= strs.length <= 10^4
 * - 0 <= strs[i].length <= 100
 * - strs[i] chỉ gồm chữ cái thường a-z
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function groupAnagrams(strs: string[]): string[][] {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/49-group-anagrams.ts) =====
check("ví dụ 1", () => groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]], { compare: "groups" });
check("ví dụ 2: chuỗi rỗng", () => groupAnagrams([""]), [[""]], { compare: "groups" });
check("ví dụ 3: 1 chuỗi", () => groupAnagrams(["a"]), [["a"]], { compare: "groups" });
check("không có cặp anagram nào", () => groupAnagrams(["a", "b", "c"]), [["a"], ["b"], ["c"]], { compare: "groups" });
check("nhiều chuỗi rỗng", () => groupAnagrams(["", "", ""]), [["", "", ""]], { compare: "groups" });
check("độ dài khác nhau không chung nhóm", () => groupAnagrams(["ab", "ba", "abc"]), [["ab", "ba"], ["abc"]], { compare: "groups" });
check("chuỗi trùng hệt nhau vẫn cùng nhóm", () => groupAnagrams(["abc", "abc", "cba"]), [["abc", "abc", "cba"]], { compare: "groups" });
check("cùng ký tự khác số lần: aab vs abb", () => groupAnagrams(["aab", "abb", "baa"]), [["aab", "baa"], ["abb"]], { compare: "groups" });
check("rỗng lẫn với chuỗi khác", () => groupAnagrams(["", "a", ""]), [["", ""], ["a"]], { compare: "groups" });
check("hiệu năng: 10000 chuỗi cùng nhóm", () => groupAnagrams(Array(10000).fill("abc")), [Array(10000).fill("abc")], { compare: "groups", maxMs: 500 });

report();

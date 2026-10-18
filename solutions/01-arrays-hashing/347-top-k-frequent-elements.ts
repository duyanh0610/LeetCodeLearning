/**
 * #347 Top K Frequent Elements (Medium)
 * https://leetcode.com/problems/top-k-frequent-elements/
 * Dạng: Arrays & Hashing - Ngày 6
 *
 * ── ĐỀ BÀI ──
 * Cho mảng `nums` và số nguyên `k`. Trả về `k` phần tử xuất hiện NHIỀU NHẤT (thứ tự bất kỳ).
 * Đề đảm bảo đáp án là duy nhất (không có hòa làm mơ hồ).
 *
 * ── VÍ DỤ ──
 * nums = [1,1,1,2,2,3], k = 2 -> [1,2]
 * nums = [1], k = 1            -> [1]
 *
 * ── RÀNG BUỘC ──
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 * - k nằm trong [1, số phần tử khác nhau của nums]
 *
 * Follow-up: Độ phức tạp thời gian phải tốt hơn O(n log n).
 *
 * ── GHI CHÚ CỦA BẠN ──
 * Time:  O(?)
 * Space: O(?)
 * Ý tưởng / bài học:
 */
import { check, report } from "../ds/test-utils";

// ===== LỜI GIẢI (khi nộp LeetCode chỉ cần copy phần hàm bên dưới) =====
function topKFrequent(nums: number[], k: number): number[] {
  // TODO
  throw new Error("TODO");
}

// ===== TEST (chạy: npx tsx solutions/01-arrays-hashing/347-top-k-frequent-elements.ts) =====
check("ví dụ 1", () => topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2], { compare: "unordered" });
check("ví dụ 2: 1 phần tử", () => topKFrequent([1], 1), [1], { compare: "unordered" });
check("k = 1", () => topKFrequent([4, 4, 4, 5, 5, 6], 1), [4], { compare: "unordered" });
check("có số âm", () => topKFrequent([-1, -1, 2, 2, 2, 3], 2), [2, -1], { compare: "unordered" });
check("k = số phần tử khác nhau", () => topKFrequent([1, 2], 2), [1, 2], { compare: "unordered" });
check("các số xuất hiện rải rác", () => topKFrequent([5, 3, 1, 1, 1, 3, 73, 1], 2), [1, 3], { compare: "unordered" });
check("tất cả giống nhau", () => topKFrequent([7, 7, 7, 7], 1), [7], { compare: "unordered" });
check("số 0", () => topKFrequent([0, 0, 0, 1, 1, 2], 2), [0, 1], { compare: "unordered" });
check("top 3 trong nhiều số", () => topKFrequent([1, 1, 1, 1, 2, 2, 2, 3, 3, 4], 3), [1, 2, 3], { compare: "unordered" });
check("hiệu năng n=100000", () => topKFrequent([...Array(60000).fill(5), ...Array.from({ length: 40000 }, (_, i) => i + 10)], 1), [5], { compare: "unordered", maxMs: 500 });

report();

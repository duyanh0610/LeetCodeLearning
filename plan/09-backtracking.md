# Dạng 9: Backtracking (2 tuần)

## Ngày 1 - Lý thuyết
Không giải bài hôm nay. Đọc, chép lại template bằng tay, tự cài lại từ đầu, xem 1–2 video/bài giảng về dạng này.

### Ý chính
- Thử -> đệ quy -> hoàn tác (choose / explore / unchoose) trên cây quyết định.
- Nhận biết: sinh mọi tổ hợp/hoán vị/tập con, đặt quân, tìm đường có ràng buộc.
- Cắt tỉa (pruning) sớm để giảm nhánh; tránh trùng bằng sort + skip.

### Template (TypeScript)
```ts
function bt(start: number, path: number[]) {
  res.push([...path]);
  for (let i = start; i < nums.length; i++) {
    path.push(nums[i]);   // choose
    bt(i + 1, path);      // explore
    path.pop();           // unchoose
  }
}
```

### Checklist ngày 1
- [ ] Đọc lý thuyết + hiểu vì sao dạng này giảm độ phức tạp
- [ ] Viết lại template không nhìn
- [ ] Ghi 3 "dấu hiệu nhận biết" bằng lời của mình:
  1.
  2.
  3.

## Ngày 2–13 - Luyện tập (2 bài/ngày, dễ → khó)
Mỗi ngày 2 bài (khoảng 60–90 phút). Mỗi bài: tự nghĩ 25–30 phút → bí thì xem gợi ý → **tự code lại không nhìn** → ghi lại bài học. Lưu code vào `solutions/`. Nếu còn sức, làm thêm bài cùng dạng trên LeetCode.

| Ngày | Xong | # | Bài | Độ khó | Thời gian | Ghi chú / bài học |
|---|---|---|---|---|---|---|
| Ngày 2 | [ ] | 78 | [Subsets](https://leetcode.com/problems/subsets/) | Medium | | |
| Ngày 2 | [ ] | 216 | [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/) | Medium | | |
| Ngày 3 | [ ] | 90 | [Subsets II](https://leetcode.com/problems/subsets-ii/) | Medium | | |
| Ngày 3 | [ ] | 784 | [Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/) | Medium | | |
| Ngày 4 | [ ] | 77 | [Combinations](https://leetcode.com/problems/combinations/) | Medium | | |
| Ngày 4 | [ ] | 89 | [Gray Code](https://leetcode.com/problems/gray-code/) | Medium | | |
| Ngày 5 | [ ] | 46 | [Permutations](https://leetcode.com/problems/permutations/) | Medium | | |
| Ngày 5 | [ ] | 1079 | [Letter Tile Possibilities](https://leetcode.com/problems/letter-tile-possibilities/) | Medium | | |
| Ngày 6 | [ ] | 47 | [Permutations II](https://leetcode.com/problems/permutations-ii/) | Medium | | |
| Ngày 6 | [ ] | 526 | [Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement/) | Medium | | |
| Ngày 7 | [ ] | 39 | [Combination Sum](https://leetcode.com/problems/combination-sum/) | Medium | | |
| Ngày 7 | [ ] | 1239 | [Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/) | Medium | | |
| Ngày 8 | [ ] | 40 | [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) | Medium | | |
| Ngày 8 | [ ] | 473 | [Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/) | Medium | | |
| Ngày 9 | [ ] | 17 | [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | Medium | | |
| Ngày 9 | [ ] | 698 | [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) | Medium | | |
| Ngày 10 | [ ] | 79 | [Word Search](https://leetcode.com/problems/word-search/) | Medium | | |
| Ngày 10 | [ ] | 52 | [N-Queens II](https://leetcode.com/problems/n-queens-ii/) | Hard | | |
| Ngày 11 | [ ] | 131 | [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) | Medium | | |
| Ngày 11 | [ ] | 37 | [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) | Hard | | |
| Ngày 12 | [ ] | 93 | [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) | Medium | | |
| Ngày 12 | [ ] | 140 | [Word Break II](https://leetcode.com/problems/word-break-ii/) | Hard | | |
| Ngày 13 | [ ] | 51 | [N-Queens](https://leetcode.com/problems/n-queens/) | Hard | | |
| Ngày 13 | [ ] | 301 | [Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/) | Hard | | |

## Ngày 14 - Ôn tập & mock
- [ ] Làm lại các bài không tự giải được (đánh dấu ở bảng trên)
- [ ] 1 bài Medium chưa gặp cùng dạng, bấm giờ 30–40 phút, vừa code vừa nói to như phỏng vấn
- [ ] Tổng kết: dấu hiệu nhận biết, lỗi hay mắc, biến thể cần nhớ:

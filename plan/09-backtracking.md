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

## Ngày 2–13 - Luyện tập (1 bài/ngày, dễ → khó)
Mỗi bài: tự nghĩ 25–30 phút → bí thì xem gợi ý → **tự code lại không nhìn** → ghi lại bài học. Lưu code vào `solutions/`. Nếu còn sức, làm thêm bài cùng dạng trên LeetCode.

| Ngày | Xong | # | Bài | Độ khó | Thời gian | Ghi chú / bài học |
|---|---|---|---|---|---|---|
| Ngày 2 | [ ] | 78 | [Subsets](https://leetcode.com/problems/subsets/) | Medium | | |
| Ngày 3 | [ ] | 90 | [Subsets II](https://leetcode.com/problems/subsets-ii/) | Medium | | |
| Ngày 4 | [ ] | 77 | [Combinations](https://leetcode.com/problems/combinations/) | Medium | | |
| Ngày 5 | [ ] | 46 | [Permutations](https://leetcode.com/problems/permutations/) | Medium | | |
| Ngày 6 | [ ] | 47 | [Permutations II](https://leetcode.com/problems/permutations-ii/) | Medium | | |
| Ngày 7 | [ ] | 39 | [Combination Sum](https://leetcode.com/problems/combination-sum/) | Medium | | |
| Ngày 8 | [ ] | 40 | [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) | Medium | | |
| Ngày 9 | [ ] | 17 | [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | Medium | | |
| Ngày 10 | [ ] | 79 | [Word Search](https://leetcode.com/problems/word-search/) | Medium | | |
| Ngày 11 | [ ] | 131 | [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) | Medium | | |
| Ngày 12 | [ ] | 93 | [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) | Medium | | |
| Ngày 13 | [ ] | 51 | [N-Queens](https://leetcode.com/problems/n-queens/) | Hard | | |

## Ngày 14 - Ôn tập & mock
- [ ] Làm lại các bài không tự giải được (đánh dấu ở bảng trên)
- [ ] 1 bài Medium chưa gặp cùng dạng, bấm giờ 30–40 phút, vừa code vừa nói to như phỏng vấn
- [ ] Tổng kết: dấu hiệu nhận biết, lỗi hay mắc, biến thể cần nhớ:

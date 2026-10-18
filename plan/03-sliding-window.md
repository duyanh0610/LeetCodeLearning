# Dạng 3: Sliding Window (2 tuần)

## Ngày 1 - Lý thuyết
Không giải bài hôm nay. Đọc, chép lại template bằng tay, tự cài lại từ đầu, xem 1–2 video/bài giảng về dạng này.

### Ý chính
- Cửa sổ [l, r] trượt trên mảng/chuỗi; mở rộng r, thu hẹp l khi vi phạm điều kiện.
- Nhận biết: 'subarray/substring liên tục' + tối ưu độ dài/tổng/số lượng.
- Cửa sổ cố định (size k) vs cửa sổ co giãn (biến đổi theo điều kiện).

### Template (TypeScript)
```ts
let l = 0, best = 0;
for (let r = 0; r < s.length; r++) {
  // thêm s[r] vào cửa sổ
  while (/* cửa sổ không hợp lệ */ false) {
    // bỏ s[l] khỏi cửa sổ
    l++;
  }
  best = Math.max(best, r - l + 1);
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
| Ngày 2 | [ ] | 121 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Easy | | |
| Ngày 3 | [ ] | 643 | [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) | Easy | | |
| Ngày 4 | [ ] | 219 | [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/) | Easy | | |
| Ngày 5 | [ ] | 3 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | | |
| Ngày 6 | [ ] | 424 | [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) | Medium | | |
| Ngày 7 | [ ] | 567 | [Permutation in String](https://leetcode.com/problems/permutation-in-string/) | Medium | | |
| Ngày 8 | [ ] | 209 | [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) | Medium | | |
| Ngày 9 | [ ] | 438 | [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | Medium | | |
| Ngày 10 | [ ] | 1004 | [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/) | Medium | | |
| Ngày 11 | [ ] | 904 | [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) | Medium | | |
| Ngày 12 | [ ] | 76 | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | Hard | | |
| Ngày 13 | [ ] | 239 | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | Hard | | |

## Ngày 14 - Ôn tập & mock
- [ ] Làm lại các bài không tự giải được (đánh dấu ở bảng trên)
- [ ] 1 bài Medium chưa gặp cùng dạng, bấm giờ 30–40 phút, vừa code vừa nói to như phỏng vấn
- [ ] Tổng kết: dấu hiệu nhận biết, lỗi hay mắc, biến thể cần nhớ:

# Dạng 2: Two Pointers (2 tuần)

## Ngày 1 - Lý thuyết
Không giải bài hôm nay. Đọc, chép lại template bằng tay, tự cài lại từ đầu, xem 1–2 video/bài giảng về dạng này.

### Ý chính
- Hai con trỏ đi từ 2 đầu vào giữa (mảng đã sort / đối xứng) hoặc cùng chiều (fast/slow).
- Nhận biết: mảng sorted, tìm cặp/bộ ba có tổng cho trước, palindrome, gộp/xóa phần tử in-place.
- Mỗi bước loại bỏ được 1 phần không gian tìm kiếm -> O(n).

### Template (TypeScript)
```ts
let l = 0, r = nums.length - 1;
while (l < r) {
  const sum = nums[l] + nums[r];
  if (sum === target) return [l, r];
  if (sum < target) l++; else r--;
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
| Ngày 2 | [ ] | 125 | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | Easy | | |
| Ngày 3 | [ ] | 283 | [Move Zeroes](https://leetcode.com/problems/move-zeroes/) | Easy | | |
| Ngày 4 | [ ] | 26 | [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | Easy | | |
| Ngày 5 | [ ] | 680 | [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/) | Easy | | |
| Ngày 6 | [ ] | 167 | [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | Medium | | |
| Ngày 7 | [ ] | 15 | [3Sum](https://leetcode.com/problems/3sum/) | Medium | | |
| Ngày 8 | [ ] | 16 | [3Sum Closest](https://leetcode.com/problems/3sum-closest/) | Medium | | |
| Ngày 9 | [ ] | 75 | [Sort Colors](https://leetcode.com/problems/sort-colors/) | Medium | | |
| Ngày 10 | [ ] | 11 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | Medium | | |
| Ngày 11 | [ ] | 18 | [4Sum](https://leetcode.com/problems/4sum/) | Medium | | |
| Ngày 12 | [ ] | 344 | [Reverse String](https://leetcode.com/problems/reverse-string/) | Easy | | |
| Ngày 13 | [ ] | 42 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | Hard | | |

## Ngày 14 - Ôn tập & mock
- [ ] Làm lại các bài không tự giải được (đánh dấu ở bảng trên)
- [ ] 1 bài Medium chưa gặp cùng dạng, bấm giờ 30–40 phút, vừa code vừa nói to như phỏng vấn
- [ ] Tổng kết: dấu hiệu nhận biết, lỗi hay mắc, biến thể cần nhớ:

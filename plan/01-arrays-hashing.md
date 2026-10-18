 # Dạng 1: Arrays & Hashing (2 tuần)

## Ngày 1 - Lý thuyết
Không giải bài hôm nay. Đọc, chép lại template bằng tay, tự cài lại từ đầu, xem 1–2 video/bài giảng về dạng này.

### Ý chính
- Dùng Map/Set để tra cứu O(1) thay vì lồng 2 vòng for O(n²).
- Nhận biết: cần đếm tần suất, tìm trùng, tìm cặp bù (target - x), gom nhóm theo 'chữ ký' (key).
- Prefix/suffix array: tính sẵn để trả lời truy vấn O(1).

### Template (TypeScript)
```ts
const seen = new Map<number, number>();
for (let i = 0; i < nums.length; i++) {
  const need = target - nums[i];
  if (seen.has(need)) return [seen.get(need)!, i];
  seen.set(nums[i], i);
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
| Ngày 2 | [ ] | 217 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | Easy | | |
| Ngày 3 | [ ] | 242 | [Valid Anagram](https://leetcode.com/problems/valid-anagram/) | Easy | | |
| Ngày 4 | [ ] | 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | | |
| Ngày 5 | [ ] | 49 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | | |
| Ngày 6 | [ ] | 347 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | | |
| Ngày 7 | [ ] | 238 | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | Medium | | |
| Ngày 8 | [ ] | 36 | [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) | Medium | | |
| Ngày 9 | [ ] | 128 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | Medium | | |
| Ngày 10 | [ ] | 271 | [Encode and Decode Strings](https://leetcode.com/problems/encode-and-decode-strings/) | Medium | | |
| Ngày 11 | [ ] | 560 | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | Medium | | |
| Ngày 12 | [ ] | 73 | [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) | Medium | | |
| Ngày 13 | [ ] | 41 | [First Missing Positive](https://leetcode.com/problems/first-missing-positive/) | Hard | | |

## Ngày 14 - Ôn tập & mock
- [ ] Làm lại các bài không tự giải được (đánh dấu ở bảng trên)
- [ ] 1 bài Medium chưa gặp cùng dạng, bấm giờ 30–40 phút, vừa code vừa nói to như phỏng vấn
- [ ] Tổng kết: dấu hiệu nhận biết, lỗi hay mắc, biến thể cần nhớ:

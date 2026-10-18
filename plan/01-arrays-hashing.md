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

## Ngày 2–13 - Luyện tập (2 bài/ngày, dễ → khó)
Mỗi ngày 2 bài (khoảng 60–90 phút). Mỗi bài: tự nghĩ 25–30 phút → bí thì xem gợi ý → **tự code lại không nhìn** → ghi lại bài học. Lưu code vào `solutions/`. Nếu còn sức, làm thêm bài cùng dạng trên LeetCode.

| Ngày | Xong | # | Bài | Độ khó | Thời gian | Ghi chú / bài học |
|---|---|---|---|---|---|---|
| Ngày 2 | [ ] | 217 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | Easy | | |
| Ngày 2 | [ ] | 169 | [Majority Element](https://leetcode.com/problems/majority-element/) | Easy | | |
| Ngày 3 | [ ] | 242 | [Valid Anagram](https://leetcode.com/problems/valid-anagram/) | Easy | | |
| Ngày 3 | [ ] | 448 | [Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/) | Easy | | |
| Ngày 4 | [ ] | 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | | |
| Ngày 4 | [ ] | 387 | [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) | Easy | | |
| Ngày 5 | [ ] | 49 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | | |
| Ngày 5 | [ ] | 383 | [Ransom Note](https://leetcode.com/problems/ransom-note/) | Easy | | |
| Ngày 6 | [ ] | 347 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | | |
| Ngày 6 | [ ] | 205 | [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) | Easy | | |
| Ngày 7 | [ ] | 238 | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | Medium | | |
| Ngày 7 | [ ] | 290 | [Word Pattern](https://leetcode.com/problems/word-pattern/) | Easy | | |
| Ngày 8 | [ ] | 36 | [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) | Medium | | |
| Ngày 8 | [ ] | 454 | [4Sum II](https://leetcode.com/problems/4sum-ii/) | Medium | | |
| Ngày 9 | [ ] | 128 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | Medium | | |
| Ngày 9 | [ ] | 525 | [Contiguous Array](https://leetcode.com/problems/contiguous-array/) | Medium | | |
| Ngày 10 | [ ] | 271 | [Encode and Decode Strings](https://leetcode.com/problems/encode-and-decode-strings/) | Medium | | |
| Ngày 10 | [ ] | 189 | [Rotate Array](https://leetcode.com/problems/rotate-array/) | Medium | | |
| Ngày 11 | [ ] | 560 | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | Medium | | |
| Ngày 11 | [ ] | 48 | [Rotate Image](https://leetcode.com/problems/rotate-image/) | Medium | | |
| Ngày 12 | [ ] | 73 | [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) | Medium | | |
| Ngày 12 | [ ] | 54 | [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) | Medium | | |
| Ngày 13 | [ ] | 41 | [First Missing Positive](https://leetcode.com/problems/first-missing-positive/) | Hard | | |
| Ngày 13 | [ ] | 974 | [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/) | Medium | | |

## Ngày 14 - Ôn tập & mock
- [ ] Làm lại các bài không tự giải được (đánh dấu ở bảng trên)
- [ ] 1 bài Medium chưa gặp cùng dạng, bấm giờ 30–40 phút, vừa code vừa nói to như phỏng vấn
- [ ] Tổng kết: dấu hiệu nhận biết, lỗi hay mắc, biến thể cần nhớ:

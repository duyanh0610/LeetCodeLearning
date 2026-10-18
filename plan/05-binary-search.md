# Dạng 5: Binary Search (2 tuần)

## Ngày 1 - Lý thuyết
Không giải bài hôm nay. Đọc, chép lại template bằng tay, tự cài lại từ đầu, xem 1–2 video/bài giảng về dạng này.

### Ý chính
- Chia đôi không gian tìm kiếm mỗi bước -> O(log n).
- Không chỉ trên mảng sorted: 'binary search on answer' - tìm giá trị nhỏ nhất thỏa điều kiện đơn điệu (feasible).
- Cẩn thận biên: l <= r vs l < r, mid = l + ((r - l) >> 1).

### Template (TypeScript)
```ts
let l = 0, r = n - 1;
while (l < r) {            // tìm vị trí đầu tiên thỏa ok()
  const mid = l + ((r - l) >> 1);
  if (ok(mid)) r = mid; else l = mid + 1;
}
return l;
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
| Ngày 2 | [ ] | 704 | [Binary Search](https://leetcode.com/problems/binary-search/) | Easy | | |
| Ngày 2 | [ ] | 367 | [Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/) | Easy | | |
| Ngày 3 | [ ] | 35 | [Search Insert Position](https://leetcode.com/problems/search-insert-position/) | Easy | | |
| Ngày 3 | [ ] | 278 | [First Bad Version](https://leetcode.com/problems/first-bad-version/) | Easy | | |
| Ngày 4 | [ ] | 69 | [Sqrt(x)](https://leetcode.com/problems/sqrt-x/) | Easy | | |
| Ngày 4 | [ ] | 744 | [Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) | Easy | | |
| Ngày 5 | [ ] | 74 | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | Medium | | |
| Ngày 5 | [ ] | 1011 | [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | Medium | | |
| Ngày 6 | [ ] | 34 | [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | Medium | | |
| Ngày 6 | [ ] | 540 | [Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/) | Medium | | |
| Ngày 7 | [ ] | 875 | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | Medium | | |
| Ngày 7 | [ ] | 1283 | [Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/) | Medium | | |
| Ngày 8 | [ ] | 153 | [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | Medium | | |
| Ngày 8 | [ ] | 2300 | [Successful Pairs of Spells and Potions](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/) | Medium | | |
| Ngày 9 | [ ] | 33 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Medium | | |
| Ngày 9 | [ ] | 658 | [Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/) | Medium | | |
| Ngày 10 | [ ] | 162 | [Find Peak Element](https://leetcode.com/problems/find-peak-element/) | Medium | | |
| Ngày 10 | [ ] | 240 | [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) | Medium | | |
| Ngày 11 | [ ] | 981 | [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) | Medium | | |
| Ngày 11 | [ ] | 1482 | [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) | Medium | | |
| Ngày 12 | [ ] | 410 | [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) | Hard | | |
| Ngày 12 | [ ] | 154 | [Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/) | Hard | | |
| Ngày 13 | [ ] | 4 | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Hard | | |
| Ngày 13 | [ ] | 719 | [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) | Hard | | |

## Ngày 14 - Ôn tập & mock
- [ ] Làm lại các bài không tự giải được (đánh dấu ở bảng trên)
- [ ] 1 bài Medium chưa gặp cùng dạng, bấm giờ 30–40 phút, vừa code vừa nói to như phỏng vấn
- [ ] Tổng kết: dấu hiệu nhận biết, lỗi hay mắc, biến thể cần nhớ:

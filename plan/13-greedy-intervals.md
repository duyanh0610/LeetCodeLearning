# Dạng 13: Greedy & Intervals (2 tuần)

## Ngày 1 - Lý thuyết
Không giải bài hôm nay. Đọc, chép lại template bằng tay, tự cài lại từ đầu, xem 1–2 video/bài giảng về dạng này.

### Ý chính
- Greedy: chọn tối ưu cục bộ mỗi bước và chứng minh được tối ưu toàn cục (thường sort trước).
- Intervals: sort theo start (hoặc end), quét 1 lượt, so sánh với interval cuối.
- Nếu greedy không chứng minh được -> nghĩ tới DP.

### Template (TypeScript)
```ts
intervals.sort((a, b) => a[0] - b[0]);
const res = [intervals[0]];
for (const [s, e] of intervals.slice(1)) {
  const last = res[res.length - 1];
  if (s <= last[1]) last[1] = Math.max(last[1], e);
  else res.push([s, e]);
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
| Ngày 2 | [ ] | 455 | [Assign Cookies](https://leetcode.com/problems/assign-cookies/) | Easy | | |
| Ngày 3 | [ ] | 56 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | Medium | | |
| Ngày 4 | [ ] | 57 | [Insert Interval](https://leetcode.com/problems/insert-interval/) | Medium | | |
| Ngày 5 | [ ] | 435 | [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) | Medium | | |
| Ngày 6 | [ ] | 452 | [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) | Medium | | |
| Ngày 7 | [ ] | 986 | [Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/) | Medium | | |
| Ngày 8 | [ ] | 55 | [Jump Game](https://leetcode.com/problems/jump-game/) | Medium | | |
| Ngày 9 | [ ] | 45 | [Jump Game II](https://leetcode.com/problems/jump-game-ii/) | Medium | | |
| Ngày 10 | [ ] | 134 | [Gas Station](https://leetcode.com/problems/gas-station/) | Medium | | |
| Ngày 11 | [ ] | 763 | [Partition Labels](https://leetcode.com/problems/partition-labels/) | Medium | | |
| Ngày 12 | [ ] | 846 | [Hand of Straights](https://leetcode.com/problems/hand-of-straights/) | Medium | | |
| Ngày 13 | [ ] | 678 | [Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/) | Medium | | |

## Ngày 14 - Ôn tập & mock
- [ ] Làm lại các bài không tự giải được (đánh dấu ở bảng trên)
- [ ] 1 bài Medium chưa gặp cùng dạng, bấm giờ 30–40 phút, vừa code vừa nói to như phỏng vấn
- [ ] Tổng kết: dấu hiệu nhận biết, lỗi hay mắc, biến thể cần nhớ:

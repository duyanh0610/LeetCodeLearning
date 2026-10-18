# Dạng 8: Heap / Priority Queue (2 tuần)

## Ngày 1 - Lý thuyết
Không giải bài hôm nay. Đọc, chép lại template bằng tay, tự cài lại từ đầu, xem 1–2 video/bài giảng về dạng này.

### Ý chính
- Heap lấy min/max trong O(log n); build O(n).
- Nhận biết: 'top K', 'K-th', merge K nguồn đã sort, lập lịch theo độ ưu tiên.
- Top K lớn nhất: dùng min-heap size K. Median stream: 2 heap (max-heap nửa dưới, min-heap nửa trên).
- JS/TS không có heap built-in -> tự cài MinHeap (hoặc dùng thư viện khi luyện).

### Template (TypeScript)
```ts
// min-heap size k giữ k phần tử lớn nhất
for (const x of nums) {
  heap.push(x);
  if (heap.size() > k) heap.pop();
}
return heap.peek();
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
| Ngày 2 | [ ] | 703 | [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) | Easy | | |
| Ngày 3 | [ ] | 1046 | [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) | Easy | | |
| Ngày 4 | [ ] | 973 | [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) | Medium | | |
| Ngày 5 | [ ] | 215 | [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | Medium | | |
| Ngày 6 | [ ] | 692 | [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) | Medium | | |
| Ngày 7 | [ ] | 621 | [Task Scheduler](https://leetcode.com/problems/task-scheduler/) | Medium | | |
| Ngày 8 | [ ] | 767 | [Reorganize String](https://leetcode.com/problems/reorganize-string/) | Medium | | |
| Ngày 9 | [ ] | 378 | [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) | Medium | | |
| Ngày 10 | [ ] | 373 | [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) | Medium | | |
| Ngày 11 | [ ] | 355 | [Design Twitter](https://leetcode.com/problems/design-twitter/) | Medium | | |
| Ngày 12 | [ ] | 295 | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | Hard | | |
| Ngày 13 | [ ] | 502 | [IPO](https://leetcode.com/problems/ipo/) | Hard | | |

## Ngày 14 - Ôn tập & mock
- [ ] Làm lại các bài không tự giải được (đánh dấu ở bảng trên)
- [ ] 1 bài Medium chưa gặp cùng dạng, bấm giờ 30–40 phút, vừa code vừa nói to như phỏng vấn
- [ ] Tổng kết: dấu hiệu nhận biết, lỗi hay mắc, biến thể cần nhớ:

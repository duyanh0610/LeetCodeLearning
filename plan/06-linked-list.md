# Dạng 6: Linked List (2 tuần)

## Ngày 1 - Lý thuyết
Không giải bài hôm nay. Đọc, chép lại template bằng tay, tự cài lại từ đầu, xem 1–2 video/bài giảng về dạng này.

### Ý chính
- Kỹ thuật: dummy head, fast/slow pointer (cycle, middle), reverse in-place.
- Luôn vẽ hình con trỏ trước khi code; cẩn thận null.
- Merge/đảo ngược là 'viên gạch' cho các bài khó hơn.

### Template (TypeScript)
```ts
let prev: ListNode | null = null, cur = head;
while (cur) {
  const next = cur.next;
  cur.next = prev;
  prev = cur;
  cur = next;
}
return prev;
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
| Ngày 2 | [ ] | 206 | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | Easy | | |
| Ngày 2 | [ ] | 203 | [Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) | Easy | | |
| Ngày 3 | [ ] | 21 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | Easy | | |
| Ngày 3 | [ ] | 83 | [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) | Easy | | |
| Ngày 4 | [ ] | 141 | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | Easy | | |
| Ngày 4 | [ ] | 160 | [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/) | Easy | | |
| Ngày 5 | [ ] | 876 | [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) | Easy | | |
| Ngày 5 | [ ] | 142 | [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) | Medium | | |
| Ngày 6 | [ ] | 234 | [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) | Easy | | |
| Ngày 6 | [ ] | 328 | [Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/) | Medium | | |
| Ngày 7 | [ ] | 19 | [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | Medium | | |
| Ngày 7 | [ ] | 24 | [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) | Medium | | |
| Ngày 8 | [ ] | 143 | [Reorder List](https://leetcode.com/problems/reorder-list/) | Medium | | |
| Ngày 8 | [ ] | 61 | [Rotate List](https://leetcode.com/problems/rotate-list/) | Medium | | |
| Ngày 9 | [ ] | 2 | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | Medium | | |
| Ngày 9 | [ ] | 86 | [Partition List](https://leetcode.com/problems/partition-list/) | Medium | | |
| Ngày 10 | [ ] | 138 | [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | Medium | | |
| Ngày 10 | [ ] | 82 | [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) | Medium | | |
| Ngày 11 | [ ] | 287 | [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) | Medium | | |
| Ngày 11 | [ ] | 92 | [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) | Medium | | |
| Ngày 12 | [ ] | 146 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | | |
| Ngày 12 | [ ] | 148 | [Sort List](https://leetcode.com/problems/sort-list/) | Medium | | |
| Ngày 13 | [ ] | 23 | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | | |
| Ngày 13 | [ ] | 25 | [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) | Hard | | |

## Ngày 14 - Ôn tập & mock
- [ ] Làm lại các bài không tự giải được (đánh dấu ở bảng trên)
- [ ] 1 bài Medium chưa gặp cùng dạng, bấm giờ 30–40 phút, vừa code vừa nói to như phỏng vấn
- [ ] Tổng kết: dấu hiệu nhận biết, lỗi hay mắc, biến thể cần nhớ:

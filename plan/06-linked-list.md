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

## Ngày 2–13 - Luyện tập (1 bài/ngày, dễ → khó)
Mỗi bài: tự nghĩ 25–30 phút → bí thì xem gợi ý → **tự code lại không nhìn** → ghi lại bài học. Lưu code vào `solutions/`. Nếu còn sức, làm thêm bài cùng dạng trên LeetCode.

| Ngày | Xong | # | Bài | Độ khó | Thời gian | Ghi chú / bài học |
|---|---|---|---|---|---|---|
| Ngày 2 | [ ] | 206 | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | Easy | | |
| Ngày 3 | [ ] | 21 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | Easy | | |
| Ngày 4 | [ ] | 141 | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | Easy | | |
| Ngày 5 | [ ] | 876 | [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) | Easy | | |
| Ngày 6 | [ ] | 234 | [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) | Easy | | |
| Ngày 7 | [ ] | 19 | [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | Medium | | |
| Ngày 8 | [ ] | 143 | [Reorder List](https://leetcode.com/problems/reorder-list/) | Medium | | |
| Ngày 9 | [ ] | 2 | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | Medium | | |
| Ngày 10 | [ ] | 138 | [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | Medium | | |
| Ngày 11 | [ ] | 287 | [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) | Medium | | |
| Ngày 12 | [ ] | 146 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | Medium | | |
| Ngày 13 | [ ] | 23 | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | | |

## Ngày 14 - Ôn tập & mock
- [ ] Làm lại các bài không tự giải được (đánh dấu ở bảng trên)
- [ ] 1 bài Medium chưa gặp cùng dạng, bấm giờ 30–40 phút, vừa code vừa nói to như phỏng vấn
- [ ] Tổng kết: dấu hiệu nhận biết, lỗi hay mắc, biến thể cần nhớ:

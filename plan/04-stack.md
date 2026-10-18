# Dạng 4: Stack & Monotonic Stack (2 tuần)

## Ngày 1 - Lý thuyết
Không giải bài hôm nay. Đọc, chép lại template bằng tay, tự cài lại từ đầu, xem 1–2 video/bài giảng về dạng này.

### Ý chính
- Stack (LIFO): xử lý cặp đóng/mở, undo, biểu thức, DFS lặp.
- Monotonic stack: giữ stack tăng/giảm để tìm 'phần tử lớn/nhỏ hơn kế tiếp' trong O(n).
- Mỗi phần tử push/pop tối đa 1 lần -> O(n).

### Template (TypeScript)
```ts
const st: number[] = []; // lưu index
for (let i = 0; i < a.length; i++) {
  while (st.length && a[st[st.length - 1]] < a[i]) {
    const j = st.pop()!; // a[i] là next greater của a[j]
  }
  st.push(i);
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
| Ngày 2 | [ ] | 20 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | Easy | | |
| Ngày 2 | [ ] | 682 | [Baseball Game](https://leetcode.com/problems/baseball-game/) | Easy | | |
| Ngày 3 | [ ] | 232 | [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) | Easy | | |
| Ngày 3 | [ ] | 1047 | [Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) | Easy | | |
| Ngày 4 | [ ] | 496 | [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) | Easy | | |
| Ngày 4 | [ ] | 225 | [Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/) | Easy | | |
| Ngày 5 | [ ] | 155 | [Min Stack](https://leetcode.com/problems/min-stack/) | Medium | | |
| Ngày 5 | [ ] | 71 | [Simplify Path](https://leetcode.com/problems/simplify-path/) | Medium | | |
| Ngày 6 | [ ] | 150 | [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) | Medium | | |
| Ngày 6 | [ ] | 394 | [Decode String](https://leetcode.com/problems/decode-string/) | Medium | | |
| Ngày 7 | [ ] | 22 | [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) | Medium | | |
| Ngày 7 | [ ] | 901 | [Online Stock Span](https://leetcode.com/problems/online-stock-span/) | Medium | | |
| Ngày 8 | [ ] | 739 | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | Medium | | |
| Ngày 8 | [ ] | 735 | [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) | Medium | | |
| Ngày 9 | [ ] | 853 | [Car Fleet](https://leetcode.com/problems/car-fleet/) | Medium | | |
| Ngày 9 | [ ] | 1249 | [Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/) | Medium | | |
| Ngày 10 | [ ] | 503 | [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) | Medium | | |
| Ngày 10 | [ ] | 316 | [Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/) | Medium | | |
| Ngày 11 | [ ] | 402 | [Remove K Digits](https://leetcode.com/problems/remove-k-digits/) | Medium | | |
| Ngày 11 | [ ] | 456 | [132 Pattern](https://leetcode.com/problems/132-pattern/) | Medium | | |
| Ngày 12 | [ ] | 84 | [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) | Hard | | |
| Ngày 12 | [ ] | 907 | [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/) | Medium | | |
| Ngày 13 | [ ] | 224 | [Basic Calculator](https://leetcode.com/problems/basic-calculator/) | Hard | | |
| Ngày 13 | [ ] | 32 | [Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/) | Hard | | |

## Ngày 14 - Ôn tập & mock
- [ ] Làm lại các bài không tự giải được (đánh dấu ở bảng trên)
- [ ] 1 bài Medium chưa gặp cùng dạng, bấm giờ 30–40 phút, vừa code vừa nói to như phỏng vấn
- [ ] Tổng kết: dấu hiệu nhận biết, lỗi hay mắc, biến thể cần nhớ:

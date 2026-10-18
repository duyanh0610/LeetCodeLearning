# Dạng 7: Trees (DFS / BFS) (2 tuần)

## Ngày 1 - Lý thuyết
Không giải bài hôm nay. Đọc, chép lại template bằng tay, tự cài lại từ đầu, xem 1–2 video/bài giảng về dạng này.

### Ý chính
- DFS đệ quy: preorder/inorder/postorder; nghĩ 'việc của 1 node + tin tưởng con'.
- BFS với queue: duyệt theo tầng (level order).
- BST: inorder cho dãy tăng dần; truyền (min, max) khi validate.

### Template (TypeScript)
```ts
function dfs(node: TreeNode | null): number {
  if (!node) return 0;
  const L = dfs(node.left), R = dfs(node.right);
  return 1 + Math.max(L, R);
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
| Ngày 2 | [ ] | 226 | [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | Easy | | |
| Ngày 2 | [ ] | 101 | [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) | Easy | | |
| Ngày 3 | [ ] | 104 | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | Easy | | |
| Ngày 3 | [ ] | 572 | [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) | Easy | | |
| Ngày 4 | [ ] | 100 | [Same Tree](https://leetcode.com/problems/same-tree/) | Easy | | |
| Ngày 4 | [ ] | 112 | [Path Sum](https://leetcode.com/problems/path-sum/) | Easy | | |
| Ngày 5 | [ ] | 543 | [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) | Easy | | |
| Ngày 5 | [ ] | 108 | [Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) | Easy | | |
| Ngày 6 | [ ] | 110 | [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) | Easy | | |
| Ngày 6 | [ ] | 637 | [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/) | Easy | | |
| Ngày 7 | [ ] | 102 | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | Medium | | |
| Ngày 7 | [ ] | 235 | [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | Medium | | |
| Ngày 8 | [ ] | 199 | [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) | Medium | | |
| Ngày 8 | [ ] | 1448 | [Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/) | Medium | | |
| Ngày 9 | [ ] | 98 | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | Medium | | |
| Ngày 9 | [ ] | 103 | [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) | Medium | | |
| Ngày 10 | [ ] | 230 | [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | Medium | | |
| Ngày 10 | [ ] | 113 | [Path Sum II](https://leetcode.com/problems/path-sum-ii/) | Medium | | |
| Ngày 11 | [ ] | 236 | [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | Medium | | |
| Ngày 11 | [ ] | 437 | [Path Sum III](https://leetcode.com/problems/path-sum-iii/) | Medium | | |
| Ngày 12 | [ ] | 105 | [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | Medium | | |
| Ngày 12 | [ ] | 114 | [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) | Medium | | |
| Ngày 13 | [ ] | 124 | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | Hard | | |
| Ngày 13 | [ ] | 297 | [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Hard | | |

## Ngày 14 - Ôn tập & mock
- [ ] Làm lại các bài không tự giải được (đánh dấu ở bảng trên)
- [ ] 1 bài Medium chưa gặp cùng dạng, bấm giờ 30–40 phút, vừa code vừa nói to như phỏng vấn
- [ ] Tổng kết: dấu hiệu nhận biết, lỗi hay mắc, biến thể cần nhớ:

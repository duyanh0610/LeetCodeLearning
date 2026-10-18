# Dạng 10: Graphs (BFS/DFS, Union-Find, Topo Sort) (2 tuần)

## Ngày 1 - Lý thuyết
Không giải bài hôm nay. Đọc, chép lại template bằng tay, tự cài lại từ đầu, xem 1–2 video/bài giảng về dạng này.

### Ý chính
- Biểu diễn: adjacency list; grid cũng là graph (4 hướng).
- BFS = đường ngắn nhất không trọng số; DFS = component, chu trình.
- Topological sort (Kahn) cho phụ thuộc/DAG; Union-Find cho kết nối động.
- Luôn có visited để tránh lặp vô hạn.

### Template (TypeScript)
```ts
const q = [start]; const seen = new Set([start]);
while (q.length) {
  const u = q.shift()!;
  for (const v of adj[u]) {
    if (!seen.has(v)) { seen.add(v); q.push(v); }
  }
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
| Ngày 2 | [ ] | 733 | [Flood Fill](https://leetcode.com/problems/flood-fill/) | Easy | | |
| Ngày 3 | [ ] | 200 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | Medium | | |
| Ngày 4 | [ ] | 695 | [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) | Medium | | |
| Ngày 5 | [ ] | 547 | [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | Medium | | |
| Ngày 6 | [ ] | 133 | [Clone Graph](https://leetcode.com/problems/clone-graph/) | Medium | | |
| Ngày 7 | [ ] | 994 | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | Medium | | |
| Ngày 8 | [ ] | 417 | [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) | Medium | | |
| Ngày 9 | [ ] | 207 | [Course Schedule](https://leetcode.com/problems/course-schedule/) | Medium | | |
| Ngày 10 | [ ] | 210 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | Medium | | |
| Ngày 11 | [ ] | 684 | [Redundant Connection](https://leetcode.com/problems/redundant-connection/) | Medium | | |
| Ngày 12 | [ ] | 743 | [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | Medium | | |
| Ngày 13 | [ ] | 127 | [Word Ladder](https://leetcode.com/problems/word-ladder/) | Hard | | |

## Ngày 14 - Ôn tập & mock
- [ ] Làm lại các bài không tự giải được (đánh dấu ở bảng trên)
- [ ] 1 bài Medium chưa gặp cùng dạng, bấm giờ 30–40 phút, vừa code vừa nói to như phỏng vấn
- [ ] Tổng kết: dấu hiệu nhận biết, lỗi hay mắc, biến thể cần nhớ:

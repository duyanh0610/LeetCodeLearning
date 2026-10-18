# Lý thuyết nền tảng (đọc trước khi bắt đầu dạng 1)

Phần này **không cần giải bài**. Mục tiêu: có "bản đồ" để các dạng bài sau biết mình đang dùng công cụ gì.

## 1. Độ phức tạp (Big-O)
| Big-O | Ví dụ | n tối đa (~1s) |
|---|---|---|
| O(1) | truy cập mảng, Map.get | - |
| O(log n) | binary search, heap push/pop | bất kỳ |
| O(n) | duyệt 1 lần | ~10⁷–10⁸ |
| O(n log n) | sort, heap n lần | ~10⁶ |
| O(n²) | 2 vòng for | ~10⁴ |
| O(2ⁿ) / O(n!) | subsets / permutations | ~20 / ~10 |

- Đọc **constraints** của đề để đoán độ phức tạp cần đạt (n ≤ 10⁵ → cần O(n log n) hoặc tốt hơn).
- Tính cả **space** (kể cả call stack đệ quy).

## 2. Cách tính Time Complexity

**Ý tưởng:** đếm số thao tác cơ bản theo kích thước input `n`, rồi giữ lại số hạng tăng nhanh nhất và bỏ hằng số.

### Quy tắc
1. **Bỏ hằng số:** `3n + 5` → O(n); `2n²` → O(n²).
2. **Giữ số hạng lớn nhất:** `n² + n + 100` → O(n²).
3. **Nối tiếp thì cộng:** hai khối chạy lần lượt `O(a) + O(b)` → `O(max(a, b))`.
4. **Lồng nhau thì nhân:** vòng trong nằm trong vòng ngoài → `O(a × b)`.
5. **Input khác nhau dùng biến khác nhau:** duyệt 2 mảng độc lập là O(n + m), không phải O(n).
6. **Chia đôi mỗi bước** → O(log n).
7. **Worst case** là mặc định khi phỏng vấn, trừ khi người phỏng vấn hỏi average / amortized.

### Các mẫu hay gặp
```ts
// O(1): số bước không phụ thuộc n
const first = a[0];

// O(n): 1 vòng lặp
for (const x of a) { /* ... */ }

// O(n): hai vòng lặp NỐI TIẾP -> n + n = 2n
for (const x of a) { /* ... */ }
for (const x of a) { /* ... */ }

// O(n²): hai vòng lặp LỒNG nhau
for (let i = 0; i < n; i++)
  for (let j = 0; j < n; j++) { /* ... */ }

// O(n²): vòng trong phụ thuộc i -> 1 + 2 + ... + n = n(n+1)/2
for (let i = 0; i < n; i++)
  for (let j = 0; j < i; j++) { /* ... */ }

// O(log n): biến giảm một nửa mỗi bước
while (n > 1) n = Math.floor(n / 2);

// O(n): vòng ngoài n lần nhưng tổng công việc vòng trong chỉ n
// (ví dụ two pointers, sliding window, monotonic stack: mỗi phần tử vào/ra tối đa 1 lần)
for (let r = 0; r < n; r++) {
  while (l < r && invalid()) l++;   // l chỉ tăng, tổng cộng tối đa n lần
}
```

### Công thức theo kiểu bài
| Kiểu | Time |
|---|---|
| Duyệt 1 lần | O(n) |
| Sort rồi xử lý | O(n log n) |
| Binary search | O(log n) |
| Mỗi phần tử dùng heap / BST | O(n log n) |
| Duyệt ma trận m × n | O(m · n) |
| Duyệt graph (BFS/DFS) | O(V + E) |
| Duyệt cây | O(n) |
| Subsets (2ⁿ nhánh, mỗi nhánh copy O(n)) | O(n · 2ⁿ) |
| Permutations | O(n · n!) |
| DP | O(số state × chi phí mỗi transition) |

### Đệ quy: viết công thức rồi giải
- Gọi hàm 1 lần với `n-1`, làm O(1): `T(n) = T(n-1) + O(1)` → O(n).
- Gọi 2 lần với `n-1`: `T(n) = 2T(n-1) + O(1)` → O(2ⁿ) (fibonacci đệ quy không memo).
- Chia đôi, mỗi tầng làm O(n): `T(n) = 2T(n/2) + O(n)` → O(n log n) (merge sort).
- Chia đôi, chỉ đi 1 nhánh, làm O(1): `T(n) = T(n/2) + O(1)` → O(log n) (binary search).
- Cách nhanh: **số node trong cây đệ quy × công việc mỗi node**.
- Có memo: **số state khác nhau × công việc mỗi state** (mỗi state chỉ tính 1 lần).

### Amortized (chi phí trung bình)
- `array.push` thỉnh thoảng phải resize nhưng trung bình O(1).
- Map/Set: get/set/has trung bình O(1), worst case O(n) khi đụng độ hash.
- Monotonic stack, sliding window: nhìn có vòng `while` trong `for` nhưng tổng là O(n).

### Những hàm built-in có chi phí ẩn (hay bị bỏ sót)
| Thao tác | Chi phí |
|---|---|
| `arr.shift()`, `arr.unshift()` | O(n) |
| `arr.slice()`, `[...arr]`, `arr.concat()` | O(n) |
| `arr.includes()`, `indexOf()` | O(n) |
| `arr.sort()` | O(n log n) |
| `str + str`, `s.slice()`, `s.substring()` | O(độ dài chuỗi) |
| `JSON.stringify`, `arr.join()` | O(tổng kích thước) |
| `map.has / set.has` | O(1) trung bình |

Ví dụ: `for (...) { s = s + c }` trông như O(n) nhưng nếu mỗi lần nối tốn O(độ dài s) thì có thể thành O(n²). Dùng mảng rồi `join` một lần.

## 3. Cách tính Space Complexity (bộ nhớ)

**Ý tưởng:** đếm bộ nhớ **phụ thêm** mà thuật toán cần theo `n`, **không tính input**, nhưng **có tính output** nếu đề bài hay người phỏng vấn yêu cầu (nên hỏi, hoặc nêu rõ "auxiliary space" và "tổng").

### Những thứ tốn bộ nhớ
1. **Biến, con trỏ, bộ đếm:** O(1).
2. **Cấu trúc phụ:** mảng, Map, Set, heap, queue, stack có kích thước theo `n` → O(n).
3. **Bảng DP:** state 1D → O(n); 2D → O(m · n).
4. **Call stack của đệ quy:** độ sâu đệ quy × bộ nhớ mỗi frame.
   - Duyệt cây cân bằng: O(log n); cây lệch (như linked list): O(n).
   - DFS trên graph: O(V) trong trường hợp xấu.
   - Backtracking: O(độ sâu) cho stack + O(độ dài path) (chưa tính kết quả).
5. **Bản sao dữ liệu:** `arr.slice()`, `[...arr]`, `str.split('')` đều tạo O(n) mới.

### Mẫu hay gặp
| Cách làm | Space |
|---|---|
| Vài biến, two pointers, in-place | O(1) |
| Hash Map/Set lưu tối đa n phần tử | O(n) |
| Sliding window với Map ký tự (bảng chữ cái cố định) | O(k) hoặc O(1) |
| BFS (queue) | O(độ rộng lớn nhất của tầng) ≤ O(n) |
| DFS đệ quy | O(độ sâu) |
| DP 1D / 2D | O(n) / O(m · n) |
| DP nén (chỉ cần hàng trước) | O(n) thay vì O(m · n) |
| Sort in-place (`Array.sort` của V8 là TimSort) | tối đa O(n) bộ nhớ phụ |

### Đánh đổi time ↔ space (hay được hỏi tiếp)
- Dùng Map/Set: **thêm O(n) space để giảm time từ O(n²) → O(n)** (Two Sum).
- Prefix sum: thêm O(n) space để trả lời truy vấn O(1).
- Memoization: thêm O(số state) space để tránh tính lại.
- Two pointers sau khi sort: thường **giảm space** về O(1) nhưng tốn O(n log n) để sort.
- Chuyển đệ quy sang vòng lặp: bỏ call stack.

### Ví dụ tính nhanh
```ts
function twoSum(nums: number[], target: number) {      // Time O(n), Space O(n)
  const seen = new Map<number, number>();              // tối đa n phần tử
  for (let i = 0; i < nums.length; i++) {              // n lần
    if (seen.has(target - nums[i])) return [seen.get(target - nums[i])!, i]; // O(1)
    seen.set(nums[i], i);                              // O(1)
  }
  return [];
}

function maxDepth(root: TreeNode | null): number {     // Time O(n), Space O(h)
  if (!root) return 0;                                 // h = chiều cao cây: log n .. n
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

function subsets(nums: number[]): number[][] {          // Time O(n · 2^n), Space O(n) (stack + path)
  const res: number[][] = [], path: number[] = [];      // + O(n · 2^n) cho output
  const bt = (i: number) => {
    if (i === nums.length) { res.push([...path]); return; }  // copy path O(n)
    bt(i + 1);
    path.push(nums[i]); bt(i + 1); path.pop();
  };
  bt(0);
  return res;
}
```

### Quy trình tự phân tích khi phỏng vấn
1. Xác định `n` (có thể nhiều biến: `n`, `m`, `V`, `E`, `k`).
2. Tìm vòng lặp / lời gọi đệ quy; quyết định là cộng (nối tiếp) hay nhân (lồng).
3. Cộng chi phí ẩn của hàm built-in (sort, slice, shift, nối chuỗi).
4. Với đệ quy: viết `T(n)` hoặc đếm node × công việc mỗi node.
5. Đếm cấu trúc phụ + độ sâu call stack để ra space.
6. Nói to cả hai: "Time O(...), Space O(...), vì ...", và nếu có cách đổi time lấy space (hoặc ngược lại) thì nêu luôn.

### Bài tập tự kiểm tra (đáp án ở cuối)
1. Một vòng `for i<n` chứa vòng `for j<n; j*=2`. Time?
2. Hai vòng `for` lồng nhau, vòng trong chạy từ `i` đến `n`. Time?
3. Fibonacci đệ quy không memo: Time và Space?
4. Fibonacci có memo: Time và Space?
5. `while (l < r)` trong `for r` (sliding window, `l` chỉ tăng): Time?
6. Sort `n` chuỗi, mỗi chuỗi dài tối đa `k`: Time?

<details><summary>Đáp án</summary>

1. O(n log n)
2. O(n²)
3. Time O(2ⁿ), Space O(n) (độ sâu call stack)
4. Time O(n), Space O(n)
5. O(n)
6. O(n · k · log n) (mỗi phép so sánh chuỗi tốn O(k))

</details>

## 4. Cấu trúc dữ liệu cần thuộc (trong TS/JS)
| Cấu trúc | Thao tác chính | Ghi chú |
|---|---|---|
| Array | index O(1), push/pop O(1), shift/unshift O(n) | `queue.shift()` chậm với queue lớn |
| Map / Set | get/set/has O(1) trung bình | dùng thay object khi key không phải string |
| Stack | push/pop | dùng Array |
| Queue | enqueue/dequeue | Array + head index để O(1) |
| Heap | push/pop O(log n), peek O(1) | JS không có sẵn, phải tự cài |
| Linked List | chèn/xóa O(1) khi có node | không truy cập ngẫu nhiên |
| Tree / BST | duyệt O(n), BST search O(h) | h = chiều cao |
| Graph | adjacency list | grid cũng là graph |

## 5. Bảng "thấy gì → nghĩ gì" (pattern cheat sheet)
| Dấu hiệu trong đề | Dạng | Ngày |
|---|---|---|
| Tìm trùng, đếm, cặp bù | Hash Map / Set | 2 |
| Mảng sorted, cặp/bộ ba, palindrome | Two Pointers | 3 |
| Subarray/substring liên tục, tối ưu độ dài | Sliding Window | 4 |
| Ngoặc, undo, "next greater" | Stack / Monotonic Stack | 5 |
| Sorted, O(log n), "min X thỏa điều kiện" | Binary Search | 6 |
| Con trỏ next, cycle, đảo ngược | Linked List | 7 |
| Cây nhị phân, đệ quy theo node, theo tầng | Tree DFS / BFS | 8 |
| Top K, K-th, median, merge K | Heap | 9 |
| Sinh mọi tổ hợp/hoán vị/tập con | Backtracking | 10 |
| Kết nối, đường ngắn nhất, phụ thuộc | Graph BFS/DFS/Topo/UF | 11 |
| Đếm số cách, min/max, bài toán con gối nhau | DP 1D / 2D | 12–13 |
| Lịch, khoảng, chọn cục bộ tối ưu | Greedy / Intervals | 14 |

## 6. Quy trình giải bài khi phỏng vấn (UMPIRE rút gọn)
1. **Hiểu đề**: nhắc lại đề, hỏi input/output, edge case (rỗng, 1 phần tử, trùng, âm, tràn số).
2. **Ví dụ**: tự vẽ 1–2 ví dụ, kể cả ví dụ biên.
3. **Brute force trước**: nêu cách ngây thơ + độ phức tạp.
4. **Tối ưu**: xác định dạng (bảng trên), nêu ý tưởng, độ phức tạp mới.
5. **Code**: đặt tên biến rõ ràng, vừa code vừa nói.
6. **Test**: chạy tay ví dụ + edge case; sửa bug.
7. **Phân tích**: time/space, có thể cải tiến gì.

## 7. Cách luyện (áp dụng cho mọi dạng)
- Mỗi bài: **25–30 phút tự nghĩ** → bí thì xem gợi ý/lời giải → **tự code lại không nhìn**.
- Ghi vào bảng của ngày: thời gian, bài học, lỗi mắc.
- Bài không tự giải được → đánh dấu, làm lại sau 1, 3, 7 ngày (spaced repetition).
- Code vào `solutions/` với tên `<số>-<tên-bài>.ts`.

## 8. Việc nên làm trước khi bắt đầu
- [ ] Đọc hết file này, chép lại bảng "thấy gì → nghĩ gì" bằng tay một lần.
- [ ] Tự cài lại (không nhìn): MinHeap, Queue O(1), Union-Find.
- [ ] Tạo tài khoản LeetCode, setup môi trường chạy TS (`npx tsx file.ts`).
- [ ] Làm thử 1 bài khởi động: #1 Two Sum (đo thời gian).

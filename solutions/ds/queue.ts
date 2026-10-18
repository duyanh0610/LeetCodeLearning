export class Queue<T> {
  private a: T[] = [];
  private head = 0;

  push(x: T) { this.a.push(x); }

  pop(): T | undefined {
    if (this.head >= this.a.length) return undefined;
    const x = this.a[this.head++];
    // dọn bộ nhớ khi phần đã lấy quá nửa
    if (this.head * 2 >= this.a.length) {
      this.a = this.a.slice(this.head);
      this.head = 0;
    }
    return x;
  }

  peek(): T | undefined { return this.a[this.head]; }
  size() { return this.a.length - this.head; }
}

if (process.argv[1]?.endsWith("queue.ts")) {
  const q = new Queue<number>();
  for (let i = 0; i < 5; i++) q.push(i);
  const out: number[] = [];
  while (q.size()) out.push(q.pop()!);
  console.log(out, JSON.stringify(out) === "[0,1,2,3,4]" ? "OK" : "FAIL");
}

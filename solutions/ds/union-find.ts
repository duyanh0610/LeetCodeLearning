export class UnionFind {
  private parent: number[];
  private size: number[];
  count: number; // số nhóm hiện tại

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = new Array(n).fill(1);
    this.count = n;
  }

  find(x: number): number {
    while (this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]]; // path compression
      x = this.parent[x];
    }
    return x;
  }

  // trả về false nếu a, b đã cùng nhóm (hữu ích để phát hiện chu trình)
  union(a: number, b: number): boolean {
    let ra = this.find(a), rb = this.find(b);
    if (ra === rb) return false;
    if (this.size[ra] < this.size[rb]) [ra, rb] = [rb, ra]; // union by size
    this.parent[rb] = ra;
    this.size[ra] += this.size[rb];
    this.count--;
    return true;
  }

  connected(a: number, b: number) { return this.find(a) === this.find(b); }
}

if (process.argv[1]?.endsWith("union-find.ts")) {
  const uf = new UnionFind(5);
  uf.union(0, 1); uf.union(1, 2);
  const ok = uf.connected(0, 2) && !uf.connected(0, 3) && uf.count === 3 && !uf.union(0, 2);
  console.log(ok ? "OK" : "FAIL");
}

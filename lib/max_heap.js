class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2)
  }

  getLeftChild(idx) {
    return idx * 2
  }

  getRightChild(idx) {
    return (idx * 2) + 1
  }

  siftUp(idx) {
    if (idx === 1) return;

    const parentIdx = Math.floor(idx / 2);
    const parentVal = this.array[parentIdx];
    const childVal = this.array[idx];

    if (childVal > parentVal) {
      this.swap(this.array, parentIdx, idx);
      this.siftUp(parentIdx);
    }
  }

  swap(array, i, j) {
    [ array[i], array[j]] = [array[j], array[i] ]
  }

  deleteMax() {
    const max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }
}

module.exports = {
  MaxHeap
};

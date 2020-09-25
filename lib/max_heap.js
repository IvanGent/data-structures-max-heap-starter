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
}

module.exports = {
  MaxHeap
};

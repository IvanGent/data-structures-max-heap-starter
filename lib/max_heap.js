class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {

  }

  siftUp(idx) {
    if(idx === 1) return;

    const parentIdx = Math.floor(idx / 2);
    const parentVal = this.array[parentIdx];
    const childVal = this.array[idx];

    if(childVal > parentVal) {
      this.swap(this.array, parentIdx, idx);
      this.siftUp(parentIdx);
    }
  }
}

module.exports = {
  MaxHeap
};

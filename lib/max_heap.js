class MaxHeap {
  constructor() {
    this.array = [null];
  }

  buildHeap(li) {
    li.forEach((n) => this.insert(n));
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

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftDown(idx) {
    let leftIdx = idx * 2;
    let rightIdx = ((idx * 2) + 1);
    let leftVal = this.array[leftIdx];
    let rightVal = this.array[rightIdx];
    let val = this.array[idx];
    let swapIdx;

    if (leftVal === undefined) {
      leftVal = -Infinity;
    }
    if (rightVal === undefined) {
      rightVal = -Infinity;
    }
    if (val > leftVal && val > rightVal) {
      return;
    }

    if (leftVal > rightVal) {
      swapIdx = leftIdx;
    } else {
      swapIdx = rightIdx;
    }

    this.swap(this.array, idx, swapIdx);
    this.siftDown(swapIdx);

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
    [array[i], array[j]] = [array[j], array[i]]
  }

  deleteMax() {
    if(this.array.length === 1) {
      return null;
    }
    if(this.array.length === 2) {
      return this.array[1];
    }
      const max = this.array[1];
      this.array[1] = this.array.pop();
      this.siftDown(1);
      return max;

  }
}

const maxHeap = new MaxHeap();
maxHeap.buildHeap([1, 2, 5, 65, 3, 6, 20])

module.exports = {
  MaxHeap
};

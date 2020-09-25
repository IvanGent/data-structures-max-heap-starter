
siftDown(idx) {
    // const li = this.array;
    // const currValue = li[idx]; // current parent
    // const leftChildIndex = idx * 2;
    // const rightChildIndex = idx * 2 + 1;
    // let leftValue = li[leftChildIndex]; // left child
    // let rightValue = li[rightChildIndex]; // right child

    // need to set to -Infinity to make sure there is a comparison value
    // if (leftValue === undefined) leftValue = -Infinity;
    // if (rightValue === undefined) rightValue = -Infinity;

    // is parent larger than both children?
    // (24 > 50 && 24 > 27)
    // if (currValue > leftValue && currValue > rightValue) return;

    let swapIdx;

    // [null, 24, 50, 27, 32, 42]
    //    [50, 42, 27, 32, 24]
    //         50
    //     42       27
    // 32     24

    // if not larger than both children, pick a swapIdx
    // 50 > 27
    if (leftValue > rightValue) {
        swapIdx = leftChildIndex;
    } else {
        swapIdx = rightChildIndex;
    }

    this.swap(li, idx, swapIdx);
    this.siftDown(swapIdx);
  // }

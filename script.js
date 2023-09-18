function minCost(arr) {
    let n = arr.length;
    let minHeap = new MinHeap();
    for (let i = 0; i < n; i++) {
        minHeap.insert(arr[i]);
    }
    let cost = 0;
    while (minHeap.size() > 1) {
        let firstMin = minHeap.extractMin();
        let secondMin = minHeap.extractMin();
        let sum = firstMin + secondMin;
        cost += sum;
        minHeap.insert(sum);
    }
    return cost;
}

function findMinimumCost(ropeLengths) {
    // Convert the input string of comma-separated integers to an array of integers.
    const ropes = ropeLengths.split(',').map(Number);

    // Create a min-heap to store rope lengths.
    const minHeap = new MinHeap();

    // Add all rope lengths to the min-heap.
    ropes.forEach(rope => minHeap.insert(rope));

    let totalCost = 0;

    // Continue connecting ropes until there is only one rope left in the heap.
    while (minHeap.size() > 1) {
        const rope1 = minHeap.extractMin();
        const rope2 = minHeap.extractMin();

        const combinedCost = rope1 + rope2;
        totalCost += combinedCost;

        minHeap.insert(combinedCost);
    }

    return totalCost;
}

// Example usage:
const ropeLengths = "4,2,7,6,9";
const minimumCost = findMinimumCost(ropeLengths);
document.getElementById("result").textContent = minimumCost;
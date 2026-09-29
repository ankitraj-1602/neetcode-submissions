class KthLargest {
    constructor(k, nums) {
        this.k = k
        this.heap = new MinPriorityQueue()

        for (let i of nums) {
            this.add(i)
        }
    }

    add(val) {
        this.heap.enqueue(val)

        if (this.heap.size() > this.k) {
            this.heap.dequeue()
        }

        return this.heap.front()
    }
}
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let heap = new MinPriorityQueue()
        for(let i of nums){
            heap.enqueue(i)
            if(heap.size()>k){
                heap.dequeue()
            }
        }
        return heap.front()
    }
}

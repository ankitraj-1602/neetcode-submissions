class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let heap = new MaxPriorityQueue()

        for(let i of stones){
            heap.enqueue(i)
        }

        while(heap.size()>1){
            let x = heap.dequeue()
            let y = heap.dequeue()
            if(x!==y){
                heap.enqueue(x-y)
            }
        }
        return heap.size()==1?heap.front():0
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let heap = new MaxPriorityQueue((pair)=>pair.distance)
        for(let i =0;i<points.length;i++){
            let distance = (points[i][0])*(points[i][0]) + (points[i][1])*(points[i][1])
            heap.enqueue({
                distance:distance,
                index:i
            })
            if(heap.size()>k){
                heap.dequeue()
            }
        }
        let result = []
        while(heap.size()>0){
            let pair = heap.dequeue()
            result.push(points[pair.index])
        }
        return result
    }
}

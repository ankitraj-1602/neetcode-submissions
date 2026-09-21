class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let mp = new Map()
        for(let i of nums){
            mp.set(i,(mp.get(i) || 0)+1)
        }
        console.log(mp)
        let sortedMp = [...mp].sort((a,b)=>b[1]-a[1])
        return sortedMp.slice(0,k).map(i=>i[0])
        
    }
}

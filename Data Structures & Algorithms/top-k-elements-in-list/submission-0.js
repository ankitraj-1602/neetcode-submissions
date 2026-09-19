class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let mp = new Map()
        for(let i of nums) mp.set(i,(mp.get(i) || 0)+1)
        let entries = [...mp.entries()]
        let st = entries.sort((a,b)=>b[1]-a[1])
        let ans = []
        for(let i =0;i<k;i++){
            ans.push(st[i][0])
        }
        return ans
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let mp = new Map()
        for(let i of nums){
            mp.set(i,(mp.get(i) || 0) + 1)
            if(mp.get(i)>1) return i
        }
        return 0
    }
}

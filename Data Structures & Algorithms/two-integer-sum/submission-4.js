class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mp = new Map()
        for(let i in nums){
            if(mp.get(target-nums[i]) && i!=mp.get(target-nums[i])){
                return [Number(i),Number(mp.get(target-nums[i]))]
            }
            mp.set(nums[i],i)
        }
    
        return []
    }
}

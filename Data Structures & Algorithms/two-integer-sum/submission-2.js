class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mp = new Map()
        for(let i in nums){
            mp.set(nums[i],i)
        }
        for(let i in nums){
            let j = mp.get(target-nums[i])
            if(i!==j && j!=undefined){
                return [Number(i),Number(mp.get(target-nums[i]))]
            }
        }
    }
}

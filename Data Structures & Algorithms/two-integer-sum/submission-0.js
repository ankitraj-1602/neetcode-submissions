class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mp = new Map()
        for(let i=0;i<nums.length;i++){
            if(mp.has(target-nums[i])){
                return [i,mp.get(target-nums[i])]
            }
            mp.set(nums[i],i)
        }
        for(let [key,value] of mp.entries()){
            console.log(key)
        }
    }
}

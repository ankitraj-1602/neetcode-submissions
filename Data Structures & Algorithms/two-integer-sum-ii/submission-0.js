class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let left = 0, right = nums.length-1
        while(left<=right){
            let sum = nums[left]+nums[right]
            console.log(sum)
            if(sum === target) return [left+1,right+1]
            if(sum<target){
                left++
            }
            if(sum>target){
                right--
            }
        }
        
    }
}

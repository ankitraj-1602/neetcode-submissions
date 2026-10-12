class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let res = 0
        for(let i of nums){
            res = res ^ i
        }
        for(let i =0;i<=nums.length;i++){
            res = res ^ i
        }
        return res
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let res
        for(let i of nums){
            res = res ^ i
        }
        return res
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let size = nums.length
        let pre = [nums[0]]
        let suff = new Array(size)
        suff[size-1] = nums[size-1]
        for(let i =1;i<nums.length;i++){
            pre[i] = nums[i]*pre[i-1]
        }
        for(let i =size-2;i>=0;i--){
            suff[i] = nums[i]*suff[i+1]
        }
        let ans = []
        ans[0]= suff[1]
        ans[size-1] = pre[size-2]
        for(let i =1;i<=size-2;i++){
            ans[i] = pre[i-1]*suff[i+1]
        }
        return ans
    }
}

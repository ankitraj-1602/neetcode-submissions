class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre = [nums[0]]
        let suff = new Array(nums.length)
        suff[nums.length-1]=nums[nums.length-1]
        for(let i = 1;i<nums.length;i++){
            pre[i]=pre[i-1]*nums[i]
        }
        for(let i = nums.length-2;i>=0;i--){
            suff[i]=nums[i]*suff[i+1]
        }
        console.log(pre,suff)
        let ans = []
        ans[0]=suff[1]
        ans[nums.length-1] = pre[nums.length-2]
        for(let i =1;i<nums.length-1;i++){
            ans[i]=pre[i-1]*suff[i+1]
        }
        return ans
    }
}

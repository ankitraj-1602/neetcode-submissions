class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let st = new Set(nums)
        let mxLen = 0
        for (let i of nums){
            if(st.has(i-1)){
                continue
            }else{
                let lcount = 1
                let current = i
                while(st.has(current+1)){
                    lcount++
                    current++
                }
                mxLen = Math.max(mxLen,lcount)
            }
        }
        return mxLen
    }
}

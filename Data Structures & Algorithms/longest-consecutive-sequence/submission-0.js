class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let st = new Set(nums)
        let longest = 0
        for(let i of st){
            if(!st.has(i-1)){
                let curr = i
                let count = 0
                while(st.has(curr)){
                    curr=curr+1
                    count++
                }
                longest = Math.max(longest,count)
                count=0
            }
        }
        return longest
    }
}

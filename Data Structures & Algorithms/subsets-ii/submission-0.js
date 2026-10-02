class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let result = []
        let subset = []
        nums.sort((a,b)=>a-b)
        function backtrack(index){
            
                result.push([...subset])
                
            
            for(let i=index;i<nums.length;i++){
                if(i>index && nums[i-1]==nums[i]){
                    continue
                }
            subset.push(nums[i])
            backtrack(i+1)

            subset.pop()
            // backtrack(i+1)
            }
        }
        backtrack(0)
        return result
    }
}

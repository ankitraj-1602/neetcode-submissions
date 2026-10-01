class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(nums, target) {
        let result =[]
        let subset = []
        nums.sort((a,b)=>a-b)
        function backtrack(index,sum){
            if(sum===target){
                
                result.push([...subset])
                return
            }
            if(index===nums.length || sum>target){
                return
            }
            for(let i = index;i<nums.length;i++){
                if(i>index && nums[i-1]==nums[i]){
                    continue
                }
            subset.push(nums[i])
            backtrack(i+1,sum+nums[i])

            subset.pop()
            // backtrack(i+1,sum)
            }
        }
        backtrack(0,0)
        return result
    }
}

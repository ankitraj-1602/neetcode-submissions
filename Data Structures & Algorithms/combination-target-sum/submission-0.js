class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = []
        let subset = []
        function backtrack(index,sum){
            if(sum===target){
                result.push([...subset])
                return
            }
            if(nums.length===index || sum>target) return

            subset.push(nums[index])
            backtrack(index,sum+nums[index])

            subset.pop()
            backtrack(index+1,sum)
        }
        backtrack(0,0)
        return result
    }
}

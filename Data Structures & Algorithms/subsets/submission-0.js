class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = []
        let subsets = []
        function backtracking(index){
            if(nums.length === index){
                result.push([...subsets])
                return
            }

            subsets.push(nums[index])
            backtracking(index+1)

            subsets.pop()
            backtracking(index+1)
        }
        backtracking(0)
        return result
    }
}

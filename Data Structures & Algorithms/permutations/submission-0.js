class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = []
        let subset = []
        let used = new Array(nums.length).fill(false)

        function backtrack(){
            if(nums.length===subset.length){
                result.push([...subset])
                return
            }

            for(let i =0;i<nums.length;i++){
                if(used[i]) continue
                subset.push(nums[i])
                used[i]=true
                backtrack()
                
                subset.pop()
                used[i]=false
            }
        }
        backtrack()
        return result
    }
}

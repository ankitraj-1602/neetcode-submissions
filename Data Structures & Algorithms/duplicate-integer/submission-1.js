class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let st = new Set()
        for(let i of nums){
            if(st.has(i)){
                return true;
            }
            else{
                st.add(i)
            }
        }
        return false
    }
}

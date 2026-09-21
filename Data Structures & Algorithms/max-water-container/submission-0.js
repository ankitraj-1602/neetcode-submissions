class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let mxArea = 0
        let left = 0, right = heights.length-1
        while(left<right){
            let area = (right-left)*Math.min(heights[left],heights[right])
            mxArea= Math.max(mxArea,area)
            if(heights[left]<heights[right]){
                left++
            }else{
                right--
            }
        }
        return mxArea
    }
}

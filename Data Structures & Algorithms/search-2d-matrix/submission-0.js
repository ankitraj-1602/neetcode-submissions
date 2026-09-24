class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length
        let n = matrix[0].length
        let left = 0, size = (m*n), right = size-1
        while(left<=right){
            let mid = Math.floor((left+right)/2)
            console.log(mid)
            let row = Math.floor(mid/n)
            let col = mid%n
            console.log(row,col)
            if(matrix[row][col]===target){
                return true
            }else if(matrix[row][col]<target){
                left = mid+1
            }else{
                right = mid -1
            }
        }
        return false
    }
}

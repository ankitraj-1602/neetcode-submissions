class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length
        let cols = grid[0].length

        function dfs(row, col, count) {
            if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] != '1') {
                return count
            }
            grid[row][col] = '0'

            count = dfs(row + 1, col, count + 1)
            count = dfs(row - 1, col, count)
            count = dfs(row, col - 1, count)
            count = dfs(row, col + 1, count)

            return count
        }
        let mxCount = 0
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] == '1') {
                    let res = dfs(row, col, 0)
                    console.log(res)
                    mxCount = Math.max(res, mxCount)
                }
            }
        }
        return mxCount
    }
}

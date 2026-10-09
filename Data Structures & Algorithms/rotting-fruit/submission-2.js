class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length
        let cols = grid[0].length
        let queue = []
        let fresh = 0
        let index = 0
        let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
        let mins = 0

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] == 2) {
                    queue.push([row, col])
                }
                if (grid[row][col] == 1) {
                    fresh++
                }
            }
        }

        while (index < queue.length && fresh>0) {
            let size = queue.length - index
            for (let i = 0; i < size; i++) {
                let curr = queue[index]
                index++
                for (let direction of directions) {
                    let newRow = curr[0] + direction[0]
                    let newCol = curr[1] + direction[1]
                    if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols || grid[newRow][newCol] != 1) {
                        continue
                    }
                    grid[newRow][newCol] = 2
                    queue.push([newRow, newCol])
                    fresh--

                }
            }
            mins++
        }
        if (fresh !== 0) {
            return -1
        }
        return mins
    }
}

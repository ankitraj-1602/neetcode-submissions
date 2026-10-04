class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let rows = grid.length
        let cols = grid[0].length
        let queue = []
        let INF = 2147483647

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] == 0) {
                    queue.push([row, col])
                }
            }
        }

        let index = 0
        while(index<queue.length){
            let [row,col] = queue[index]
            index++
            let directions = [[-1,0],[1,0],[0,-1],[0,1]]
            for(let direction of directions){
                let newRow = row + direction[0]
                let newCol = col + direction[1]
                if(newRow<0 || newRow>=rows || newCol<0 || newCol>=cols || grid[newRow][newCol]!=INF){
                    continue
                }
                grid[newRow][newCol]=grid[row][col]+1
                queue.push([newRow,newCol])
            }
        }
        
    }
}

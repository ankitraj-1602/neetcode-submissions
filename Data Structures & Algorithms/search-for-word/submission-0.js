class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length
        let cols = board[0].length

        function backtrack(row,col,index){
            if(word.length===index){
                return true
            }
            if(row<0 || row>=rows || col<0 || col>=cols || word[index]!=board[row][col]){
                return false
            }

            let temp = board[row][col]
            board[row][col]='#'

            let found = backtrack(row-1,col,index+1) ||
            backtrack(row,col-1,index+1) ||
            backtrack(row+1,col,index+1) ||
            backtrack(row,col+1,index+1)

            board[row][col]=temp
            return found

        }
        for(let row=0;row<rows;row++){
            for(let col=0;col<cols;col++){
                if(backtrack(row,col,0)){
                    return true
                }
            }
        }

        return false
    }
}

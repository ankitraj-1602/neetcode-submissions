class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = []
        let current = ""
        function backtrack(open,close){
            if(current.length==n*2){
                result.push(current)
                // current=""
                return
            }

            if(open<n){
                current = current+ "("
                backtrack(open+1,close)
                current = current.slice(0,-1)
            }
            if(close<open){
                current=current+")"
                backtrack(open,close+1)
                current = current.slice(0,-1)
            }

        }
        backtrack(0,0)
        return result
    }
}

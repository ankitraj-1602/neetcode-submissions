class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let graph = Array.from({length:n},()=>[])
        for(let i of edges){
            let a = i[0]
            let b = i[1]
            graph[a].push(b)
            graph[b].push(a)
        }
        let count = 0
        let visited = new Array(n).fill(false)

        function dfs(node){
            visited[node]=true

            for(let n of graph[node]){
                if(!visited[n]){
                    dfs(n)
                }
            }
        }

        for(let i =0;i<n;i++){
            if(visited[i]==false){
                dfs(i)
                count++
            }
        }
        return count

    }
}

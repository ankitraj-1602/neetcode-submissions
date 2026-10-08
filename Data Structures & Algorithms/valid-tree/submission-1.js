class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let graph = Array.from({length:n},()=>[])

        for(let edge of edges){
            let a = edge[0]
            let b = edge[1]
            graph[a].push(b)
            graph[b].push(a)
        }

        let visited = new Array(n).fill(false)
        let cycle = false
        function dfs(node,parent){
            visited[node]=true
            for(let i of graph[node]){
                if(!visited[i]){
                    dfs(i,node)
                }else if(i!=parent){
                    cycle=true
                }
            }
        }
        // for(let i =0;i<n;i++){
        //     if(!visited[i]){
        //         dfs(i)
        //     }
        // }
        dfs(0,-1)
        let notvisited = false
        for(let i of visited){
            if(i==false){
                notvisited=true
            }
        }

        return !notvisited && !cycle
    }
}

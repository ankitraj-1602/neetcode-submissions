class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let n = edges.length
        let graph = Array.from({ length: n + 1 }, () => [])

        function dfs(node, target, visited) {
            if (node == target) {
                return true
            }
            visited[node] = true
            for (let i of graph[node]) {
                if (!visited[i]) {

                    if (dfs(i, target, visited)) {
                        return true
                    }
                }
            }
            return false

        }
        for (let edge of edges) {
            let visited = new Array(n + 1).fill(false)
            let a = edge[0]
            let b = edge[1]

            if (dfs(a, b, visited)) {
                return [a, b]
            }

            graph[a].push(b)
            graph[b].push(a)

        }
        return []
    }
}

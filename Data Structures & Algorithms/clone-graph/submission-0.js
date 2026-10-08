/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(node==null){
            return node
        }

        let map = new Map()

        function dfs(node){
            if(map.has(node)){
                return map.get(node)
            }
            let copy = new Node(node.val)
            map.set(node,copy)
            for(let i of node.neighbors){
                copy.neighbors.push(dfs(i))
            }
            return copy
        }
        return dfs(node)
    }
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    traverse(root,depth){
        if(root==null){
            return 0
        }
        let left = this.traverse(root.left,depth+1)
        let right = this.traverse(root.right,depth+1)
        return 1+ Math.max(left,right)
    }
    maxDepth(root) {
        return this.traverse(root,0)
        
    }
}

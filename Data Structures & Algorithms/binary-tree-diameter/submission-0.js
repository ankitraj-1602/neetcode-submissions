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
    diameter = 0
    traversal(root){
        if(root==null){
            return 0
        }
        let left = this.traversal(root.left,this.diameter)
        let right = this.traversal(root.right,this.diameter)
        this.diameter = Math.max(this.diameter,(left+right))

        return 1 + Math.max(left,right)
    }
    diameterOfBinaryTree(root) {
        
        this.traversal(root)
        return this.diameter
    }
}

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
     * @return {boolean}
     */
    diff = 0
    ans = true
    traverse(root, depth = 0){
        if(root==null){
            return 0
        }
        let left = this.traverse(root.left, depth+1)
        let right = this.traverse(root.right, depth+1)
        this.diff = Math.abs(left-right)
        if(this.diff>1){
            this.ans= false
        }
        return 1 + Math.max(left,right)
    }
    isBalanced(root) {
        this.traverse(root)
        return this.ans
    }
}

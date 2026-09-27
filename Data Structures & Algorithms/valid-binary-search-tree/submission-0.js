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
    traverse(root, min, max){
        if(root==null){
            return true
        }
        if(root.val <=min || root.val>=max){
            return false
        }
        let left = this.traverse(root.left,min,root.val)
        let right = this.traverse(root.right,root.val,max)
        return left && right
    }
    isValidBST(root) {
        return this.traverse(root,-Infinity, Infinity)
    }
}

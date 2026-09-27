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
    count = 0
    traverse(root,val){
        if(root==null){
            return
        }
        if(root.val>=val){
            this.count++
        }
        let max = root.val>val?root.val:val
        this.traverse(root.left,max)
        this.traverse(root.right,max)
        return
    }
    goodNodes(root) {
        this.traverse(root,root.val)
        return this.count
    }
}

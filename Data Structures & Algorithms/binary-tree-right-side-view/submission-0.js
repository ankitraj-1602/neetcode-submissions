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
     * @return {number[]}
     */
    ans=[]
    traverse(root,level){
        if(root==null){
            return 0
        }
        if(level==this.ans.length){

        this.ans.push(root.val)
        }
        this.traverse(root.right,level+1)
        this.traverse(root.left,level+1)
        return 
    }
    rightSideView(root) {
        this.traverse(root,0)
        return this.ans
    }
}

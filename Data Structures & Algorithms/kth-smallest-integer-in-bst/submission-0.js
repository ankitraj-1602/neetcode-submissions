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
     * @param {number} k
     * @return {number}
     */
    arr=[]
    traverse(root){
        if(root==null){
            return 
        }
        this.traverse(root.left)
        this.arr.push(root.val)
        this.traverse(root.right)
        return
    }
    kthSmallest(root, k) {
        this.traverse(root)
        console.log(this.arr)
        return this.arr[k-1]
    }
}

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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSametree(p, q) {
        if (p == null && q == null) {
            return true
        }
        if (p==null || q==null || p?.val != q?.val) {
            return false
        }
        let left = this.isSametree(p.left, q.left)
        let right = this.isSametree(p.right, q.right)
        return left && right
    }
    isSubtree(root, subRoot) {
        if (root == null) {
            return false
        }
        if (root?.val == subRoot?.val) {
            if (this.isSametree(root,subRoot)) {
                return true
            }
        }
        let left = this.isSubtree(root?.left, subRoot)
        let right = this.isSubtree(root?.right, subRoot)
        return left || right

    }
}

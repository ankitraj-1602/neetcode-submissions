/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let l1 = head
        let l2 = head
        while(l1!=null && l2!=null && l1.next!=null && l2.next!=null){
            l1 = l1.next
            l2 = l2.next.next
            if(l1==l2) return true

        }
        return false
    }
}

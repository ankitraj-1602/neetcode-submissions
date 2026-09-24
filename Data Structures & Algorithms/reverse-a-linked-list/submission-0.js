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
     * @return {ListNode}
     */
    reverseList(head) {
        let l = head
        let last = null
        if (head == null || head.next == null) return head
        while (l != null) {
            let prev = l.next
            l.next = last
            last = l
            l = prev
        }
        return last

    }
}

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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let len = 0
        let l1 = head
        while(l1!=null){
            len++
            l1 = l1.next
        }
        console.log(len)
        let rem = len - n
        l1 = head.next
        let prev = head
        
        let cnt = 0
        if(len==n) return l1
        while(l1!=null){
            cnt++
            if(cnt==rem){
                prev.next = l1.next
                break
            }
            l1 = l1.next
            prev = prev.next
        }
        return head
    }
}

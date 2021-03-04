/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let nodes = new ListNode(0);
    let current = nodes;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = new ListNode(l1.val)
            l1 = l1.next;
        } else {
            current.next = new ListNode(l2.val)
            l2 = l2.next;
        }
        current = current.next;
    }
    if (l1 == null) {
        current.next = l2
    } else {
        current.next = l1
    }
    // 递归解法
    // if(l1==null) return l2
    // if(l2==null) return l1
    // if(l1.val < l2.val) {
    //     nodes = l1;
    //     nodes.next = mergeTwoLists(nodes.next, l2)
    // } else {
    //     nodes = l2;
    //     nodes.next = mergeTwoLists(l1, nodes.next)
    // }
    return nodes.next;
};
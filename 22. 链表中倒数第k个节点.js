/**
 * 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，
 * 本题从1开始计数，即链表的尾节点是倒数第1个节点。

例如，一个链表有 6 个节点，从头节点开始，
它们的值依次是 1、2、3、4、5、6。
这个链表的倒数第 3 个节点是值为 4 的节点。

 */

var getKthFromEnd = function (head, k) {
    let count = 0;
    let current = head;
    let res = head;
    while (current) {
        if (count >= k) {
            res = res.next;
        } 
        current = current.next;
        count++;
    }
    return res;
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}
const example = new ListNode(1)
example.next = new ListNode(2)
example.next.next = new ListNode(3)
example.next.next.next = new ListNode(4)
example.next.next.next.next = new ListNode(5)
const res = getKthFromEnd(example, 3);
console.log(res);
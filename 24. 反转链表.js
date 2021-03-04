/**
 *定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 */
var reverseList = function(head) {
    if(head == null) {
        return null;
    }

    let current = head;
    let h = null;
    while(current) {
        const node = new ListNode(current.val);
        node.next = h;
        h = node;
        current = current.next;
    }
    return h;
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}
const example = new ListNode(1)
example.next = new ListNode(2)
example.next.next = new ListNode(3)

const res = reverseList(example);
console.log(res);
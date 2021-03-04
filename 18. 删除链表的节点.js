/**
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
   返回删除后的链表的头节点。
   输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var deleteNode = function (head, val) {
    let nodes = head;
    if(nodes.val === val) return nodes.next;

    while(nodes.next!=null){
        if(nodes.next.val === val) {
            nodes.next = nodes.next.next;
            return head;
        }
        nodes = nodes.next;
    }

    return head;
};
const nodes = new ListNode(4)
nodes.next = new ListNode(5)
nodes.next.next = new ListNode(1)
nodes.next.next.next = new ListNode(9);
const res = deleteNode(nodes, 9);
console.log(res)
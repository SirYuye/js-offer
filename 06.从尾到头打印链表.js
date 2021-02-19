/**
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * 输入：head = [1,3,2]
   输出：[2,3,1]
 */

 
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reversePrint = function (head) {
    let node = head;
    let array = new Array();
    while(node != null){
        array.unshift(node.val);
        node = node.next;
    }
    return array;
};

const example = new ListNode(1);
example.next = new ListNode(3);
example.next.next = new ListNode(2);
const res = reversePrint(example);
console.log(res); 
/**
 * Definition for a binary tree node.
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 利用栈的特性，bfs广度优先搜索
var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    const res = [];
    const quene = [root];
    while(quene.length !== 0) {
        const node = quene.shift()
        if(node) {
            res.push(node.val);
            quene.push(node.left, node.right)
        }
    }
    return res;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.right = new TreeNode(4)
root.left.right.right = new TreeNode(5)
const res = levelOrder(root);
console.log(res)
/**
 * @description 
 * 从上到下按层打印二叉树，
 * 同一层的节点按从左到右的顺序打印，
 * 每一层打印到一行。
 */

var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    const res = [];
    const quene = [root];
    while (quene.length !== 0) {
        const tmp = [];
        const len = quene.length
        for (let i = 0; i < len; i++) {
            const node = quene.shift()
            tmp.push(node.val);
            node.left && quene.push(node.left)
            node.right && quene.push(node.right)
        }
        res.push(tmp)
    }
    return res;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.left.left = new TreeNode(56)
root.left.right = new TreeNode(32)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
const res = levelOrder(root);
console.log(res)
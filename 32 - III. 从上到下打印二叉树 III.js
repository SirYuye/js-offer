// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    const res = [];
    const quene = [root];
    let reverse = false;
    while (quene.length !== 0) {
        const tmp = [];
        const len = quene.length
        for (let i = 0; i < len; i++) {
            const node = quene.shift()
            reverse ? tmp.unshift(node.val) : tmp.push(node.val);
            node.left && quene.push(node.left)
            node.right && quene.push(node.right)
        }
        reverse = !reverse;
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
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
const res = levelOrder(root);
console.log(res)
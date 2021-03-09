/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if(root == null)  {
        return null;
    }
    const result = new TreeNode(root.val)
    result.left = mirrorTree(root.right);
    result.right = mirrorTree(root.left);
    return result;
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const A = new TreeNode(4);
A.left = new TreeNode(2)
A.right = new TreeNode(7)
A.left.left = new TreeNode(1)
A.left.right = new TreeNode(3)
A.right.left = new TreeNode(6)
A.right.right = new TreeNode(9)

const res = mirrorTree(A);
console.log(res)
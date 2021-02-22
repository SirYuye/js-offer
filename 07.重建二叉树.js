/**
 * @description 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。
 *              假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 
 */


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var buildTree = function (preorder, inorder) {
    if(!preorder.length||!inorder.length){
        return null;
    }
    const root = new TreeNode(preorder[0]);
    // i有两个含义，一个是根节点在中序遍历结果中的下标，另一个是当前左子树的节点个数
    let i = 0; 
    for (; i < inorder.length; ++i) {
        if (inorder[i] === root.val) {
            break;
        }
    }
    root.left = buildTree(preorder.slice(1,i+1),inorder.slice(0, i));
    root.right = buildTree(preorder.slice(i+1),inorder.slice(i+1))
    return root;
};

const preorder = [1,2,4,7,3,5,6,8];
const inorder = [4,7,2,1,5,3,8,6];
const res = buildTree(preorder, inorder);
console.log(res);
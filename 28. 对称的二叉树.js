/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const isEqual = (left, right) => {
        if (left == null && right == null) {
            return true
        } 
        if (left == null || right == null) {
            return false
        }
        if (left.val !== right.val) {
            return false;
        }
        return isEqual(left.left, right.right) && isEqual(left.right, right.left)
    }

    return root == null ? true : isEqual(root.left, root.right);
};


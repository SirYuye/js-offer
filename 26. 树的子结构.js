/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */

var isSubStructure = function (A, B) {
    let result = false;
    if (A != null && B != null) {
        if (A.val === B.val) {
            result = isEqual(A, B)
        }
        if (!result) {
            result = isSubStructure(A.right, B) || isSubStructure(A.left, B);
        }
    }

    return result;
};

function isEqual(A, B) {
    if (B == null) {
        return true;
    }
    if (A == null || A.val !== B.val) {
        return false
    }
    return isEqual(A.left, B.left) && isEqual(A.right, B.right)
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const A = new TreeNode(3);
A.left = new TreeNode(4)
A.right = new TreeNode(5)
A.left.left = new TreeNode(1)
A.left.right = new TreeNode(2)

const B = new TreeNode(4)
B.left = new TreeNode(1)
B.right = new TreeNode(10)

const res = isSubStructure(A, B);
console.log(res)
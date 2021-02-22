/**
 * @description 
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。

[["a","b","c","e"],
["s","f","c","s"],
["a","d","e","e"]]

但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。

 */

var exist = function (board, word) {
    if (board.length === 0 || word.length === 0) {
        return false;
    }
    const row = board.length;
    const col = board[0].length;
    const dfs = function (i, j, board, word, index) {
        console.log(i, j, index)
        // 判断不符合条件
        if (i < 0 || i >= row || j < 0 || j >= col || board[i][j] !== word[index]) {
            return false;
        }
        // word遍历完了
        if (index === word.length - 1) {
            return true;
        }
        // 记录到board的值
        const tmp = board[i][j]; 
         // 锁上，因为后续的递归是4个方向上的，无法保证上一个方向的值
        board[i][j] = '-';
        const res = dfs(i - 1, j, board, word, index + 1) || dfs(i + 1, j, board, word, index + 1) || dfs(i, j - 1, board, word, index + 1) || dfs(i, j + 1, board, word, index + 1);
        // 恢复现场
        board[i][j] = tmp;
        return res;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (dfs(i, j, board, word, 0)) {
                return true;
            }
        }

    }

    return false;
};

const res = exist([["a", "b", "c", "e"],
["s", "f", "c", "s"],
["a", "d", "e", "e"]], 'bfce');

console.log(res);
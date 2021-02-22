/**
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 * 一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），
 * 也不能进入行坐标和列坐标的数位之和大于k的格子。
 * 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。
 * 但它不能进入方格 [35, 38]，因为3+5+3+8=19。
 * 请问该机器人能够到达多少个格子？
 * 输入：m = 2, n = 3, k = 1
   输出：3
**/
var movingCount = function (m, n, k) {
    let Sum = x => x % 10 + Math.floor(x / 10);
    let obj = new Object();

    const dfs = function (x, y) {
        let axis = `[${x},${y}]`;
        if (x >= n || x < 0 || y >= m || y < 0 || Sum(x) + Sum(y) > k || obj[axis]) {
            return false;
        }

        obj[axis] = true;
        return 1 + dfs(x + 1, y) + dfs(x - 1, y) + dfs(x, y + 1) + dfs(x, y - 1);
    }

    return dfs(0, 0);
};

const res = movingCount(2, 3, 1);
console.log(res);

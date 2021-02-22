/**
 * @param {number} n
 * @return {number}
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。
 * 求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 */
var numWays = function(n) {
    if(n<=0){
        return 1;
    }
    let arr = [1,2];
    for (let index = 2; index <= n; index++) {
        arr.push((arr[index-1]+arr[index-2])%1000000007)
    }
    return arr[n-1];
};

const res = numWays(100);
console.log(res)
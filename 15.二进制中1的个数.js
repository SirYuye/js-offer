/**
 * 请实现一个函数，输入一个整数（以二进制串形式），
 * 输出该数二进制表示中 1 的个数。
 * 例如，把 9 表示成二进制是 1001，有 2 位是 1。
 * 因此，如果输入 9，则该函数输出 2。
 */

var hammingWeight = function(n) {
    let count = 0;
    while (n) {
        count++;
        n = n & (n - 1);
      }
    return count;
};

const res = hammingWeight(11111111111111111111111111111101);
console.log(res)
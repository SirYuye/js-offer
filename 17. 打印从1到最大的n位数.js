/**
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 * 输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]
 */
var printNumbers = function(n) {
    const counts = Math.pow(10, n) -1 ;
    let arr = new Array(counts);
    for (let i = 0; i < counts; i++) {
       arr[i] = i+1;
    }
    return arr;
};

const res = printNumbers(2);
console.log(res)
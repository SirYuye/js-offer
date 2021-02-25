/**
 * 实现函数double Power(double base, int exponent)，求base的exponent次方。不得使用库函数，同时不需要考虑大数问题。
输入: 2.00000, 10
输出: 1024.00000
 */

var myPow = function (x, n) {
    if(n===0){
        return 1
    }
    const isNegative = n < 0;
    const result = absMyPow(x, Math.abs(n));

    return isNegative ? 1 / result : result;
    function absMyPow(base, exponent) {
        if (exponent === 0) {
            return 0;
        }
        if (exponent === 1) {
            return base
        }

        const subResult = absMyPow(base, Math.floor(exponent / 2));
        return exponent % 2 ? subResult * subResult * base : subResult * subResult
    }
}

const res = myPow(0.44528, 0);
console.log(res)
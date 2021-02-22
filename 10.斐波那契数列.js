/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<2) {
        return n ? 1 : 0;
    }
    let one = 1;
    let two = 1;
    let sum = 0;
    for (let i = 2; i < n; i++) {
        sum = one + two;
        one = two;
        two = sum;
    }
    return sum;
};

const res = fib(81);
console.log(res)
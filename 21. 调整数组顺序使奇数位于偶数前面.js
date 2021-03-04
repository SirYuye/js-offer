/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 * 输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
 */

var exchange = function (nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        // a&1 === 1 奇数
        // a&1 === 0 偶数
        if (nums[start] % 2 === 1) {
            start++;
            continue;
        }
        if (nums[end] % 2 === 0) {
            end--;
            continue;
        }
        [nums[start++], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
    return nums;
};
const res = exchange([1, 2, 3, 4]);
console.log(res);
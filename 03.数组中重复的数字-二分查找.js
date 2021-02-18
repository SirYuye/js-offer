/**
 * @description
 * 不修改数组找出重复的数字。
   在一个长度为 n+1 的数组 nums 里的所有数字都在 1～n 的范围内。
   数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
   请找出数组中任意一个重复的数字。
 * @example
 * 输入：[2, 3, 5, 4, 3, 2, 6, 7]
   输出：2 或 3 
 */

var findRepeatNumber = function (nums) {
    const { length } = nums;
    let [start, end] = [1, length - 1];
    while (end >= start) {
        // 计算中位数 位运算好处是可以优化性能
        const middle = (end + start) >> 1;
        const count = countRange(nums, length, start, middle);
        if (start === end) {
            if (count > 1) {
                return start;
            } else {
                break;
            }
        }
        if (count > (middle - start + 1)) {
            end = middle;
        } else {
            start = middle + 1;
        }
    }

    return -1;
};

function countRange(nums, length, start, end) {
    let count = 0;
    for (let i = 0; i < length; i++) {
        if (nums[i] >= start && nums[i] <= end) {
            count++;
        }
    }
    return count;
}

const res = findRepeatNumber([2, 3, 5, 4, 3, 2, 6, 7]);
console.log(res);
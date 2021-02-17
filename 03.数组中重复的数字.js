/**
 * @description
 * 找出数组中重复的数字。
   在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
   数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
   请找出数组中任意一个重复的数字。
 * @example
 * 输入：[2, 3, 1, 0, 2, 5, 3]
   输出：2 或 3 
 */

var findRepeatNumber = function (nums) {
    if (nums.length <= 0) {
        return false;
    }
    const { length } = nums;
    for (let i = 0; i < length; i++) {
        if (nums[i] < 0 || nums[i] > length - 1) {
            return false;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] != i) {

            if (nums[i] === nums[nums[i]]) {
                return nums[i];
            }
            const indexNum = nums[i];
            [nums[i], nums[indexNum]] = [nums[indexNum], nums[i]]
        }
    }

    return false;
};
const res = findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);
console.log(res);


/**
 * 不修改数组找出重复的数字
 */
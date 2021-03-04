/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.array = nums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    let sum = 0;
    for (let index = i; index <= j; index++) {
        sum+=this.array[index];
    }
    return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
var obj = new NumArray([-2, 0, 3, -5, 2, -1])
var param_1 = obj.sumRange(0,2)
console.log(param_1)
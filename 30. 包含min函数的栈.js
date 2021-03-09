/**
 * @description 定义栈的数据结构，
 * 请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
 * 调用 min、push 及 pop 的时间复杂度都是 O(1)。
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.m_data = [];
    this.m_min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.m_data.push(x);
    if (this.m_data.length === 0) {
        this.m_min.push(x)
    } else {
        const min = x > this.m_min[this.m_min.length - 1] ? this.m_min[this.m_min.length - 1] : x
        this.m_min.push(min)
    }
    return x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.m_min.pop();
    return this.m_data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.m_data[this.m_data.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.m_min[this.m_min.length - 1];
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.min())
minStack.pop();
console.log(minStack.top())
console.log(minStack.min())

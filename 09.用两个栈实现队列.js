var CQueue = function() {
    this.stack1 = new Array()
    this.stack2 = new Array()
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    // console.log(object)
    if(this.stack2.length === 0) {
        while(this.stack1.length!==0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    console.log(this.stack2)
    if(this.stack2.length === 0) {
        return -1;
    } else {
        return this.stack2.pop()
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
var obj = new CQueue()
obj.appendTail(1)
obj.appendTail(2)
var param_2 = obj.deleteHead()
obj.appendTail(4)
var param_3 = obj.deleteHead()
console.log(param_3)
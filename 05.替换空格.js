/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 输入：s = "We are happy."
   输出："We%20are%20happy."
 */

var replaceSpace = function(s) {
    let array = new Array();
    for (let i = 0; i < s.length; i++) {
        if(s[i].charCodeAt() === 32){
            array.push('%20');
        } else {
            array.push(s[i]);
        }
        
    }
    return array.join('');
};

const res = replaceSpace('We are happy.');
console.log(res);
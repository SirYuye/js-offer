/**
 * 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。
输入: "the sky is blue"
输出: "blue is sky the"
 */

var reverseWords = function(s) {
    let arr = [];
    let position = 0
    for (let i = 0; i < s.length; i++) {
      if(s[i].charCodeAt()===32){
        console.log(position,i)
        arr.unshift(s.substring(position, i));
        position = i+1;
      }
    }
    console.log(arr)
    return arr.join(' ');
};

const res = reverseWords('the sky is blue');
console.log(res);
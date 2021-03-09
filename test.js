var removeDuplicates = function(S) {
  let arr = new Array();
 for (let i = 0; i < S.length; i++) {
    if(arr.length > 0 && arr[arr.length-1] === S[i]) {
        arr.pop();
    } else {
        arr.push(S[i]);
    }
 }
 return arr.join('')
};

console.log(removeDuplicates('abbaca'))
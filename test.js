var isToeplitzMatrix = function(matrix) {
    var count = 0;
    var x = matrix[0].length;
    var current = matrix[count].slice(0, x - 1).join('');
    while(count < matrix.length - 1) {
        if(current !== matrix[count+1].slice(1, x).join('')){
            return false;
        }
        current = matrix[count+1].slice(0, x - 1).join('');
        count++;
    }
    return true;
};

const res = isToeplitzMatrix(
    [
        [1,2,3,4],
        [5,1,2,3],
        [9,5,1,2]]);
console.log(res)
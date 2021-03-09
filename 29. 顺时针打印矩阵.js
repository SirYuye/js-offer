/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 0) {
        return []
    }
    let columns = matrix[0].length;
    let rows = matrix.length;
    let start = 0;
    let result = [];
    while (columns > start * 2 && rows > start * 2) {
        printNumber(matrix, columns, rows, start, result);
        start++;
    }
    return result;
};

function printNumber(numbers, columns, rows, start, result) {
    console.log(start)
    let endX = columns - 1 - start;
    let endY = rows - 1 - start;
    // 从左到右打印
    for (let i = start; i <= endX; i++) {
        result.push(numbers[start][i])
    }
    // 从上到下打印
    if (start < endY) {
        for (let i = start + 1; i <= endY; i++) {
            console.log(i, endX)
            result.push(numbers[i][endX])
        }
    }
    // 从右到左打印
    if (start < endX && start < endY) {
        for (let i = endX - 1; i >= start; i--) {
            result.push(numbers[endY][i])
        }
    }
    // 从下到上打印
    if (start < endX && start < endY - 1) {
        for (let i = endY - 1; i >= start + 1; i--) {
            result.push(numbers[i][start])
        }
    }
}

const res = spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);
console.log(res)
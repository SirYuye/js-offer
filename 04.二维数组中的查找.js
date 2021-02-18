/**
 * @description
 * 在一个 n * m 的二维数组中，
 * 每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。
 * 请完成一个高效的函数，输入这样的一个二维数组和一个整数，
 * 判断数组中是否含有该整数。
 * @example 
 * [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
    ]
    给定 target = 5，返回 true。
    给定 target = 20，返回 false。
 */
var findNumberIn2DArray = function (matrix, target) {
    if(matrix.length === 0) {
        return false;
    }
    const rows = matrix.length;
    const columns = matrix[0].length;
    let row = 0;
    let column = columns - 1;
    while(row<rows && column < columns) {
        if(matrix[row][column] === target) {
            return true;
        } else if(matrix[row][column] > target) {
            column--;
        } else {
            row++;
        }
    }

    return false;
};
const example = [
    [1,  4,  7,  11, 15],
    [2,  5,  8,  12, 19],
    [3,  6,  9,  16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]
const result = findNumberIn2DArray([[-1,3]]
    ,3);
console.log(result);
/**
 * @description
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。
    输入：[3,4,5,1,2]
    输出：1 
    输入：[2,2,2,0,1]
    输出：0
 */

var minArray = function(numbers) {
    if(numbers.length===0) {
        return
    }
    let index1 = 0;
    let index2 = numbers.length - 1;
    let indexMiddle = index1;
    while(numbers[index1] >= numbers[index2]) {
        if(index2 - index1 === 1) {
            indexMiddle = index2;
            break;
        }
        indexMiddle = (index1 + index2) >> 1;
        if(numbers[index1] === numbers[index2] && numbers[indexMiddle] == numbers[index1]) {
            return MinInOrder(numbers, index1, index2)
        }
        if(numbers[indexMiddle] >= numbers[index1]) {
            index1 = indexMiddle;
        } else if(numbers[indexMiddle] <= numbers[index2]){
            index2 = indexMiddle;
        }

    }
    return numbers[indexMiddle];
};

function MinInOrder(numbers, index1, index2) {
    const result = numbers[index1];
    for (let i = index1 + 1; i < index2; i++) {
        if(numbers[i] < result) {
            return numbers[i]
        }
    }

    return result;
}
const res = minArray([3, 1]);
console.log(res);
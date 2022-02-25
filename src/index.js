// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    let arr = matrix;
    for (i = 1; i < arr.length; i = i + 2) {
        arr[i].reverse();
    }

    return arr.flat();
};

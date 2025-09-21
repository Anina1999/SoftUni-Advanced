function equalNeighbors(matrix) {
    let result = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let current = matrix[row][col];

            if (col < matrix[row].length - 1 && current === matrix[row][col + 1]) {
                result++;
            }

            if (row < matrix.length - 1 && current === matrix[row + 1][col]) {
                result++;
            }
        }
    }
    return result;
}

// console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']]));
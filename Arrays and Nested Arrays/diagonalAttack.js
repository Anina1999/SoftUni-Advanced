function isMatrixDiagonalSumsEqual(matrix) {
    let parsedMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        parsedMatrix.push(matrix[i].split(' ').map(Number));
    }
    
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let row = 0; row < parsedMatrix.length; row++) {
        let currRow = parsedMatrix[row][row]; 
        let currCol = parsedMatrix[row][parsedMatrix.length - 1 - row];
        firstDiagonalSum += currRow;
        secondDiagonalSum += currCol;
    }
    
    if (firstDiagonalSum === secondDiagonalSum) {
        for (let i = 0; i < parsedMatrix.length; i++) {
            for (let j = 0; j < parsedMatrix[i].length; j++) {
                if (i !== j && i !== (parsedMatrix.length - 1 - j)) {
                    parsedMatrix[i][j] = firstDiagonalSum;
                }
            }
        }
    }

    for (let el of parsedMatrix) {
        console.log(el.join(' '));
    }
}

// isMatrixDiagonalSumsEqual(['5 3 12 3 1',
// '11 4 23 2 5',
// '101 12 3 21 10',
// '1 4 5 2 2',
// '5 22 33 11 1']);
// isMatrixDiagonalSumsEqual(['1 1 1', '1 1 1', '1 1 0']);
function spiralMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = 0;
        }
    }

    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = cols - 1;
    let num = 1;

    while (startRow <= endRow && startCol <= endCol) {

        for (let col = startCol; col <= endCol; col++) {
            matrix[startRow][col] = num;
            num++;
        }
        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            matrix[row][endCol] = num;
            num++;
        }
        endCol--;

        for (let col = endCol; col >= startCol; col--) {
            matrix[endRow][col] = num;
            num++;
        }
        endRow--;

        for (let row = endRow; row >= startRow; row--) {
            matrix[row][startCol] = num;
            num++;
        }
        startCol++;
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

// spiralMatrix(5, 5);
// spiralMatrix(3, 3);
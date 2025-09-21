//solve 1
function sumDiagonals(matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][i]; 
        secondDiagonal += matrix[i][matrix.length - 1 - i];
    }
    console.log(`${firstDiagonal} ${secondDiagonal}`);
}

sumDiagonals([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);

//solve 2
function sumDiagonals(matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        firstDiagonal += matrix[row][row];
    }

    for (let row = 0; row < matrix.length; row++) {
        let col = matrix.length - row - 1;
        secondDiagonal += matrix[row][col];
    }

    console.log(`${firstDiagonal} ${secondDiagonal}`);
}
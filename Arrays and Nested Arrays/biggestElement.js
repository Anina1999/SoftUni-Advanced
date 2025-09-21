function findBiggestElInMatrix(matrix) {
    let biggestEl = Number.NEGATIVE_INFINITY;

    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        let row = matrix[rowIndex];

        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            let current = row[colIndex];
            if (current > biggestEl) {
                biggestEl = current;
            }
        }
    }

    return biggestEl;
}

//console.log([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);
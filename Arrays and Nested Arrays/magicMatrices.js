//solve 1
function checkIfMagicalMatrix(matrix) {
    let isMagical = true;
    let finalSum = matrix[0].reduce((sum, val) => sum + val, 0);
    let numRows = matrix.length;
    let numCols = matrix[0].length;

    for (let i = 0; i < numRows; i++) {
        let rowSum = 0;
        let colSum = 0;

        for (let j = 0; j < numCols; j++) {
            rowSum += matrix[i][j];
        }

        for (let j = 0; j < numRows; j++) {
            colSum += matrix[j][i];
        }

        if (rowSum !== finalSum || colSum !== finalSum) {
            isMagical = false;
            break;
        }
    }
    console.log(isMagical);
}

//checkIfMagicalMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);

//solve 2
function checkIfMagicalMatrix(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumRowOne = 0;
        let sumRowTwo = 0;
        let sumColOne = 0;
        let sumColTwo = 0;

        matrix[i].forEach(el => sumRowOne += el);
        matrix[i + 1].forEach(el => sumRowTwo += el);

        matrix.forEach(eachRow => {
            sumColOne += eachRow[i];
            sumColTwo += eachRow[i + 1];
        });

        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            return false;
        }
    }

    return true;
}


//console.log(checkIfMagicalMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));

//solve 3
function checkIfMagicalMatrix(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumRowOne = matrix.reduce(((acc, el) => acc + el[i]), 0);
        let sumRowTwo = matrix.reduce(((acc, el) => acc + el[i + 1]), 0);
        let sumColOne = matrix[i].reduce(((acc, el) => acc + el), 0);
        let sumColTwo = matrix[i + 1].reduce(((acc, el) => acc + el), 0);

        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            return false;
        }
    }

    return true;
}
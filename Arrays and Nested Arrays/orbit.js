function buildOrbit(arr) {
    let slicedArr = arr.slice();
    let rows = slicedArr.shift();
    let cols = slicedArr.shift();
    let x = slicedArr.shift();
    let y = slicedArr.shift();

    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix.push([]);
        for (let col = 0; col < cols; col++) {
        matrix[row].push(0);
        }
    }

     function validatePosition(mat, x, y) {
        let isValid = true;
        if (x < 0 || x >= mat.length || y < 0 || y >= mat[0].length) {
            isValid = false;
        }
        if (!isValid) {
            return 'error';
        }
        return isValid;
    }
    
    function positionStar(mat, x, y) {
        mat[x][y] = 1; 
        return mat;
    }
    
    function fillOrbit(mat, x, y) {
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                let distance = Math.max(Math.abs(row - x), Math.abs(col - y));
                mat[row][col] = distance + 1;
            }
        }
        return mat;
    }

    if (validatePosition(matrix, x, y) !== 'error') {
        fillOrbit(matrix, x, y);
    }

    matrix.forEach(e => console.log(e.join(' ')));
}

// buildOrbit([4, 4, 0, 0]);
// buildOrbit([5, 5, 2, 2]);
// buildOrbit([3, 3, 2, 2]);
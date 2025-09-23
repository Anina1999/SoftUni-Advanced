//solve 1
function makeTicTacToeApp(arr) {
    let dashBoard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    const playerOne = 'X';
    const playerTwo = 'O';
    let currentPlayer = playerOne;
    let i = 0;

    function makeYourTurn(player, matrix, stepOne, stepTwo) {
        if (matrix[stepOne][stepTwo] !== false) {
            console.log("This place is already taken. Please choose another!");
            return false;
        }
        matrix[stepOne][stepTwo] = player;
        return true;
    }

    function isWinner(matrix, player) {
        for (let i = 0; i < 3; i++) {
            if (
                matrix[i][0] === player &&
                matrix[i][1] === player &&
                matrix[i][2] === player
            ) return true;

            if (
                matrix[0][i] === player &&
                matrix[1][i] === player &&
                matrix[2][i] === player
            ) return true;
        }

        if (
            matrix[0][0] === player &&
            matrix[1][1] === player &&
            matrix[2][2] === player
        ) return true;

        if (
            matrix[0][2] === player &&
            matrix[1][1] === player &&
            matrix[2][0] === player
        ) return true;

        return false;
    }

    function isBoardFull(matrix) {
        for (let row of matrix) {
            if (row.includes(false)) return false;
        }
        return true;
    }

    while (i < arr.length) {
        let currentMove = arr[i];
        let [row, col] = currentMove.split(' ').map(Number);

        let moveSuccessful = makeYourTurn(currentPlayer, dashBoard, row, col);

        i++;

        if (!moveSuccessful) {
            continue;
        }

        if (isWinner(dashBoard, currentPlayer)) {
            console.log(`Player ${currentPlayer} wins!`);
            dashBoard.forEach(r => console.log(r.map(x => x === false ? 'false' : x).join('\t')));
            return;
        }

        if (isBoardFull(dashBoard)) {
            console.log("The game ended! Nobody wins :(");
            dashBoard.forEach(r => console.log(r.map(x => x === false ? 'false' : x).join('\t')));
            return;
        }

        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    }

    dashBoard.forEach(r => console.log(r.map(x => x === false ? 'false' : x).join('\t')));
}

// makeTicTacToeApp(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
// makeTicTacToeApp(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
// makeTicTacToeApp(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);


function makeTicTacToeApp(arr) {
    let dashBoard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let isPlayerOne = true;

    for (let coordinates of arr) {
        let [x, y] = coordinates.split(' ');

        let marker = isPlayerOne ? 'X' : 'О';

        if (dashBoard[x][y]) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        dashBoard[x][y] = marker;

        if (checkWinner(dashBoard, marker)) {
            console.log(`Player ${marker} wins!`);
            dashBoard.forEach(row => console.log(row.join('\t')));
            return;
        }

        if (!checkFreeSpace(dashBoard)) {
            console.log("The game ended! Nobody wins :(");
            dashBoard.forEach(row => console.log(row.join('\t')));
            return;
        }

        isPlayerOne = !isPlayerOne;
    }

    function checkWinner(board, marker) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][0] === marker &&
                board[i][1] === marker &&
                board[i][2] === marker) {

                return true;
            } else if (
                board[0][i] === marker &&
                board[1][i] === marker &&
                board[2][i] === marker) {
                return true;
            }
        }

        if (
            board[0][0] === marker &&
            board[1][1] === marker &&
            board[2][2] === marker
        ) {
            return true;
        }

        if (
            board[0][2] === marker &&
            board[1][1] === marker &&
            board[2][0] === marker
        ) {
            return true;
        }

        return false;
    }

    function checkFreeSpace(board) {
        return !!board.flat().filter(x => !x).length;
    }
} 
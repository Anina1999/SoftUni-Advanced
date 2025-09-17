//solve 1
function validityChecker(...input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);

    function checkValidity(x1, y1, x2, y2) {
        let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        let isValid = Number.isInteger(distance);

        switch (isValid) {
            case true:
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
                break;
            case false:
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
                break;
        }
    }

    checkValidity(x1, y1, 0, 0);
    checkValidity(x2, y2, 0, 0);
    checkValidity(x1, y1, x2, y2);
}

//solve 2
function validityChecker(...input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);

    function checker(x1, y1, x2, y2) {
        let distanceX = x1 - x2;
        let distanceY = y1 - y2;

        return Math.sqrt(distanceX ** 2 + distanceY ** 2);
    }

    if (Number.isInteger(checker(x1, y1, 0, 0))) {
        console.log(`${x1}, ${y1} to {0, 0} is valid`);
    } else {
        console.log(`${x1}, ${y1} to {0, 0} is invalid`);
    }

    if (Number.isInteger(checker(x2, y2, 0, 0))) {
        console.log(`${x2}, ${y2} to {0, 0} is valid`);
    } else {
        console.log(`${x2}, ${y2} to {0, 0} is invalid`);
    }

    if (Number.isInteger(checker(x1, y1, x2, y2))) {
        console.log(`${x1}, ${y1} to ${x2}, ${y2} is valid`);
    } else {
        console.log(`${x1}, ${y1} to ${x2}, ${y2} is valid`);
    }
}

//validityChecker(2, 1, 1, 1);
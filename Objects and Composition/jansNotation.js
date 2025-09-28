function jansNotation(inputArr) {
    let buff = [];
    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }

    for (let i = 0; i < inputArr.length; i++) {
        let currentIndex = inputArr[i];

        if (typeof currentIndex === 'number') {
            buff.push(currentIndex);
        } else if (operations[currentIndex]) {
            if (buff.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }

            let b = buff.pop();
            let a = buff.pop();
            let result = operations[currentIndex](a, b);
            buff.push(result);
        }
    }

    if (buff.length === 1) {
        console.log(buff[0]);
    } else if (buff.length > 1) {
        console.log("Error: too many operands!");
    }
}

// jansNotation([3,

// 4,

// '+']);

// jansNotation([5,

// 3,

// 4,

// '*',

// '-']);
// jansNotation([7,

// 33,

// 8,

// '-']);
// jansNotation([15, '/']);
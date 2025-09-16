//solve 1
function computeGreatestDivisor(a, b) {
    let divisorsA = [];
    let divisorsB = [];

    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            divisorsA.push(i);
        }
    }

    for (let i = 1; i <= b; i++) {
        if (b % i === 0) {
            divisorsB.push(i);
        }
    }

    let commonDivisors = divisorsA.filter(num => divisorsB.includes(num));
    let greatestDivisor = Math.max(...commonDivisors);

    console.log(greatestDivisor);
}

//computeGreatestDivisor(2154, 458);

//solve 2
function computeGreatestDivisor(a, b) {
    let greatestDivisor = a % b;

    while (greatestDivisor !== 0) {
        a = b;
        b = greatestDivisor;
        greatestDivisor = a % b;
    }
    console.log(b);
}

//solve 3
function computeGreatestDivisor(a, b) {
    let min = a < b ? a : b;

    for (; min > 0; min--) { //while (min > 0) {min--}
        if (a % min === 0 && b % min === 0) {
            console.log(min);
            break;
        }
    }
}
function mathOperations(a, b, string) {
    if (string === '+') {
        return a + b;
    } else if (string === '-') {
        return a - b;
    } else if (string === '*') {
        return a * b;
    } else if (string === '/') {
        return a / b;
    } else if (string === '%') {
        return a % b;
    } else if (string === '**') {
        return a ** b;
    } else {
        return 'error';
    }
}

// let mathOperation = mathOperations(3, 5.5, '*');
// console.log(mathOperation);

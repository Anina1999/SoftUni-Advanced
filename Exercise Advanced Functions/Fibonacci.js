function getFibonator() {
    let numOne = 0;
    let numTwo = 1;

    return function nextFibonacciNumber() {
        const result = numOne + numTwo;
        numOne = numTwo;
        numTwo = result;
        return numOne;
    };
}

// let fib = getFibonator();

// console.log(fib()); 
// console.log(fib()); 
// console.log(fib()); 
// console.log(fib()); 
// console.log(fib()); 
// console.log(fib()); 
// console.log(fib()); 
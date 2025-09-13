function findLargestNumber(numOne, numTwo, numThree) {
    if (numOne > numTwo && numOne > numThree) {
        console.log(`The largest number is ${numOne}.`);
    } else if (numTwo > numOne && numTwo > numThree) {
        console.log(`The largest number is ${numTwo}.`);
    } else {
        console.log(`The largest number is ${numThree}.`);
    }
}

//findLargestNumber(5, -3, 16);
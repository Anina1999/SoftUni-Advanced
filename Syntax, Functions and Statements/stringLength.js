function calculateSums(inputOne, inputTwo, inputThree) {
    let total = inputOne.length + inputTwo.length + inputThree.length;
    let averageSum = Math.floor(total / 3);

    console.log(total);
    console.log(averageSum);
}

// function calculateSums(inputOne, inputTwo, inputThree) {
// let array = [inputOne, inputTwo, inputThree];
// let result = array.reduce((sum, input) => sum + input.length, 0);
// let averageSum = result / array.length;

// console.log(result);
// console.log(averageSum.toFixed(0));
// }
//calculateSums('chocolate', 'ice cream', 'cake');
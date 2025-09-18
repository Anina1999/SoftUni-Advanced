function calculateSumOfFirstAndLastEl(arr) {
    let sliceArr = arr.slice().map(Number);
    let first = sliceArr.shift();
    let last = sliceArr.pop();
    let sum = first + last;

    console.log(sum);
}

//calculateSumOfFirstAndLastEl(['20', '30', '40']);
//solve 1 (using arrays, nested function and reduce method)
function checkEqualDigits(number) {
    let arr = String(number).split('').map(Number);
    
    function checkEquals(array) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] !== array[i + 1]) {
                return false;
            }
        }
        return true;
    }

    let check = checkEquals(arr);
    let sum = arr.reduce((sum, e) => sum + e, 0);
    console.log(check);
    console.log(sum);
}

//checkEqualDigits(2222222);

//solve 2 (using for loop and boolean flag)
function checkEqualDigits(number) {
    let numberToStr = String(number);
    let firstNum = numberToStr[0];
    let isEqual = true;

    let sum = Number(firstNum);

    for (let i = 1; i < numberToStr.length; i++) {
        sum += Number(numberToStr[i]);
        if (firstNum !== numberToStr[i]) {
            isEqual = false;
        }
    }
    console.log(isEqual);
    console.log(sum);
}

//solve 3 (using Set())
function checkEqualDigits(number) {
    let numberToStr = String(number);
    let arr = numberToStr.split('').map(Number);
    let set = new Set(arr);

    set.size === 1 ? console.log(true) : console.log(false);

    let sum = 0;

    arr.forEach(x => sum += x);
    console.log(sum);
}    

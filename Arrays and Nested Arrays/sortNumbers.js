//solve 1
function sortNumbers(arr) {
    let result = [];
    let sortedArr = arr.sort((a, b) => a - b);

    while (sortedArr.length > 0) {
        let smallest = sortedArr.shift();
        result.push(smallest);

        if (sortedArr.length > 0) {
            let biggest = sortedArr.pop();
            result.push(biggest);
        }
    }
    return result;
}

//console.log(sortNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));

//solve 2
function sortNumbers(arr) {
    let array = arr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < Math.ceil(array.length / 2); i++) {
        let lastIndex = array.length - 1;

        result.push(array[i]);

        if (i !== lastIndex - i) {
            result.push(array[lastIndex - i]);
        }
    }

    return result;
}

// console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
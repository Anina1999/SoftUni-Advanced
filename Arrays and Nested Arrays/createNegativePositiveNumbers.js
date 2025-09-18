function createNegativePositiveNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let currentIndex = arr[i];
        if (currentIndex < 0) {
            result.unshift(currentIndex);
        } else {
            result.push(currentIndex);
        }
    }

    for (let el of result) {
        console.log(el);
    }
}

//createNegativePositiveNumbers([3, -2, 0, -1]);
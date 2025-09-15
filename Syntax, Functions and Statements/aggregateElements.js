function performDifferentOperations(arr) {
    function sumOfAllElements(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    function sumOfInverseValues(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += 1 / array[i];
        }
        return sum;
    }

    function concatStrings(array) {
        let result = '';
        for (let i = 0; i < array.length; i++) {
            result += array[i].toString();
        }
        return result;
    }

    console.log(sumOfAllElements(arr));
    console.log(sumOfInverseValues(arr));
    console.log(concatStrings(arr));
}

//performDifferentOperations([1, 2, 3]);
//performDifferentOperations([2, 4, 8, 16]);
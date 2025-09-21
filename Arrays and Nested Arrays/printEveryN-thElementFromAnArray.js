function printSequenceFromAnArray(arr, step) {
    return arr.filter((el, index) => index % step === 0);
}

//console.log(printSequenceFromAnArray(['5', '20', '31', '4', '20'], 2));
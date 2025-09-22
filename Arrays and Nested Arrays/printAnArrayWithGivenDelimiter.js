//solve 1
function printAnArrayWithGivenDelimiter(arr, delimiter) {
    console.log(arr.join(delimiter));
}

//printAnArrayWithGivenDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');

//solve 2
function printAnArrayWithGivenDelimiter(arr, delimiter) {
    let buff = '';
    arr.forEach((el, i, self) => {
        if (i === self.length - 1) {
            buff += el;
        } else {
            buff += el + delimiter;
        }
    });
    console.log(buff);
}
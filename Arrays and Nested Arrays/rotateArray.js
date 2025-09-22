//solve 1
function rotateArray(strArr, numOfRotations) {
    numOfRotations = numOfRotations % strArr.length;

    for (let i = 0; i < numOfRotations; i++) {
        let lastEl = strArr.pop();
        strArr.unshift(lastEl);
    }

    console.log(strArr.join(' '));
}

//rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);

//solve 2
function rotateArray(strArr, numOfRotations) {
    for (let i = 0; i < numOfRotations; i++) {
        strArr.unshift(strArr.pop());
    }

    console.log(strArr.join(' '));
}
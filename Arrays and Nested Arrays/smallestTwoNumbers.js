function printSmallestElements(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let smallesElements = sorted.splice(0, 2);

    console.log(smallesElements.join(' '));
}

//printSmallestElements([3, 0, 10, 4, 7, 3]);
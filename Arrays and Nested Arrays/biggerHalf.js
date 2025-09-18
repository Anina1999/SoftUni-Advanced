function sortInAscendingOrder(arr) {
    let slicedArr = arr.slice().sort((a, b) => a - b);
    let secondHalf = Math.floor(slicedArr.length / 2);
    let newArr = slicedArr.splice(secondHalf);

    return newArr;
}

//sortInAscendingOrder([3, 19, 14, 7, 2, 19, 6]);
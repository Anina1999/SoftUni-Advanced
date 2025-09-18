//solve 1
function pieceOfPie(arr, start, end) {
    let newArr = [];

    if (arr.includes(start) && arr.includes(end)) {
        let startIndex = arr.indexOf(start);
        let endIndex = arr.indexOf(end);

        for (let i = startIndex; i <= endIndex; i++) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

//console.log(pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie'));

//solve 2
function pieceOfPie(arr, start, end) {
    let startIndex = arr.indexOf(start);
    let endIndex = arr.indexOf(end);

    return arr.slice(startIndex, endIndex + 1);
}
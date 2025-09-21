//solve 1
function processOddPositions(arr) {
    let oddElements = [];

    arr.forEach((element, index) => {
        if (index % 2 !== 0) {
            oddElements.push(element * 2);
        }
    });

    let reversedOrder = oddElements.reverse();

    return reversedOrder.join(' ');
}

//solve 2
const processOddPositions = (arr) => arr
    .filter((e, i) => i % 2 === 1)
    .map(e => e * 2)
    .reverse()
    .join(' ');

//console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
function getRectangleOfStars(num) {
    let row = '* '.repeat(num).trim();
    let result = '';
    for (let i = 0; i < num; i++) {
        result += row + ' ' + '\n';
    }
    return result;
}

let rectangle = getRectangleOfStars(7);
console.log(rectangle);
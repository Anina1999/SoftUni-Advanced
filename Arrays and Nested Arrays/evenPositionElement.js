//solve 1
function findEvenPositionedElements(array) {
    let even = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) { 
            even.push(array[i]); 
        }
    }
    console.log(even.join(' '));
}

//findEvenPositionedElements(['20', '30', '40',
//'50', '60']);

//solve 2
function findEvenPositionedElements(array) {
    let even = [];
    array.forEach((el, index) => {
        if (index % 2 === 0) {
            even.push(el);
        }
    });
    console.log(even.join(' '));
}

//solve 3
function findEvenPositionedElements(array) {
    let even = '';
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            even += array[i];
            even += ' ';
        }
    }
    console.log(even);
}
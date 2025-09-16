function cookingByNumbers(inputNum, opOne, opTwo, opThree, opFour, opFive) {
    let operationsArr = [opOne, opTwo, opThree, opFour, opFive].map(String);
    let num = Number(inputNum);

    for (let i = 0; i < operationsArr.length; i++) {
        let operation = operationsArr[i];
        if (operation === 'chop') {
            num /= 2;
        } else if (operation === 'dice') {
            num = Math.sqrt(num);
        } else if (operation === 'spice') {
            num += 1;
        } else if (operation === 'bake') {
            num *= 3;
        } else if (operation === 'fillet') {
            num *= 0.8;
        } else {
            console.log('Invalid operation');
            break;
        }
        
        if (Number.isInteger(num)) {
            console.log(num);
        } else {
            console.log(num.toFixed(1));
        }
    }
}

/*cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake',
'fillet');*/
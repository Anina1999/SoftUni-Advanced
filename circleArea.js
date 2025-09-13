function calculateAreaOfCircle(input) {
    let type = typeof input;
    if (type === 'number') {
        let circleArea = Math.PI * input ** 2;
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}

// calculateAreaOfCircle(5);
// calculateAreaOfCircle('name');
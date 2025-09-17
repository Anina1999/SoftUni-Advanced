function generateAndReturnSequence(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let previousK = arr.slice(start, i);
        let sum = previousK.reduce((acc, num) => acc + num, 0);
        arr.push(sum);
    }

    return arr;
}

let array = generateAndReturnSequence(8, 2);
console.log(array);
//solve 1
function extractIncreasingSubset(arr) {
    let currentBiggest = 0;
    let increasingArr = arr.reduce((acc, current) => {

        if (current >= currentBiggest) {
            currentBiggest = current;
            acc.push(current);
        }

        return acc;
    }, []);

    return increasingArr.map(element => console.log(element));
}

/*extractIncreasingSubset([1,

3,

8,

4,

10,

12,

3,

2,

24]);*/


//solve 2
function extractIncreasingSubset(arr) {
    let result = [];
    result.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        currentNumber = arr[i];

        if (currentNumber >= result[result.length - 1]) {
            result.push(currentNumber);
        }
    }
    return result;
}

/*console.log(extractIncreasingSubset([1,

3,

8,

4,

10,

12,

3,

2,

24]));*/
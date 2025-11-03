export function subSum(arr, start, end) {
    if(Array.isArray(arr) === false) {
        return NaN;
    }

    let sum = 0;
    
    start = Math.max(0, start);
    end = Math.min(arr.length - 1, end);

    for (let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
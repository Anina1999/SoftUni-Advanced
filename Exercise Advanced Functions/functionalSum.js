function functionalSum(num) {
    let state = 0;

    function sum(n) {
        state += n;
        return sum;
    }

    sum.toString = () => state;

    sum(num);
    return sum;
}

console.log(functionalSum(1)(6)(-3).toString()); 
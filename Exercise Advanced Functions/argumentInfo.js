function argumentInfo(...args) {
    const result = {};

    for (let el of args) {
        let type = typeof el;
        console.log(`${type}: ${el}`)

        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }
        
        result[type] += 1;
    }

    Object.entries(result)
        .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)
        .forEach(([type, count]) => console.log(`${type} = ${count}`));

    // const resultArr = Object.entries(result);
    // resultArr.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    // for (let [type, count] of resultArr) {
    //     console.log(`${type} = ${count}`);
    // }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
//solve 1
function sortNamesAlphabetically(arr) {
    let i = 1;
    let sorted = arr
        .sort((a, b) => a.localeCompare(b))
        .map(e => {
            console.log(`${i}.${e}`);
            i++;
        });
}

/*sortNamesAlphabetically(["John",

"Bob",

"Christina",

"Ema"]);*/

//solve 2
function sortNamesAlphabetically(arr) {
    arr.sort((a, b) => a.localeCompare(b))
        .forEach((el, i) => {
        console.log(`${i + 1}.${el}`)
    });
}
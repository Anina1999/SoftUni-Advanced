//solve 1
function sortArrayByCriteries(arr) {
    let alphabeticallyCompared = arr.sort((a, b) => a.localeCompare(b));
    let sorted = alphabeticallyCompared.sort((a, b) => a.length - b.length);
    sorted.forEach(element => console.log(element));
}

//sortArrayByCriteries(['test', 'Deny', 'omen', 'Default']);

//solve 2
function sortArrayByCriteries(arr) {
    arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    }).forEach(el => console.log(el));
}


//solve 3 (best practice to sort by 2 criterias)
function sortArrayByCriteries(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).forEach(el => console.log(el));
}
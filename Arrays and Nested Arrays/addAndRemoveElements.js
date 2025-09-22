//solve 1
function addAndRemoveElements(comm) {
    let resultArr = [];
    let number = 1;

    comm.forEach(cmd => {
        cmd === 'add' 
            ? resultArr.push(number)
            : resultArr.pop();
        number++;
    });

    if (resultArr.length === 0) {
        console.log('Empty');
    } else {
        resultArr.forEach(number => console.log(number));
    }
}

//addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);

//solve 2
function addAndRemoveElements(comm) {
    let result = [];
    let currNum = 1;

    comm.forEach(e => {
        if (e === 'add') {
            result.push(currNum);
        } else {
            result.pop();
        }
        currNum++;
    });
    result.length === 0 ? console.log('Empty') : console.log(result.join('\n'));
}
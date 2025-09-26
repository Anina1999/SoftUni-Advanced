//solve 1
function calorieObject(arrOfStrings) {
    let object = {};
    let name;

    for (let i = 0; i < arrOfStrings.length; i++) {
        let currentIndex = arrOfStrings[i];
        if (i % 2 === 0) {
            name = currentIndex;
        } else {
            object[name] = Number(currentIndex);
        }
    }

    console.log(object);
}

// calorieObject(['Yoghurt', '48', 'Rise', '138',
// 'Apple', '52']);

// calorieObject(['Potato', '93', 'Skyr', '63',
// 'Cucumber', '18', 'Milk', '42']);

//solve 2
function calorieObject(arrOfStrings) {
    const object = {};
    
    for (let i = 0; i < arrOfStrings.length; i += 2) {
        let key = arrOfStrings[i];
        let value = Number(arrOfStrings[i + 1]);

        object[key] = value;
    }

    console.log(object);
}
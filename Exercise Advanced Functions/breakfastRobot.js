function breakfastRobot() {
    const microelementsObj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipeObj = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return function manager(strArg) {
        const [command, item, qtyStr] = strArg.split(' ');
        const quantity = Number(qtyStr);

        if (command === 'restock') {
            microelementsObj[item] += quantity;
            return 'Success';

        } else if (command === 'prepare') {
            const recipe = recipeObj[item];

            for (let ingredient in recipe) {
                const required = recipe[ingredient] * quantity;
                if (microelementsObj[ingredient] < required) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (let ingredient in recipe) {
                microelementsObj[ingredient] -= recipe[ingredient] * quantity;
            }

            return 'Success';

        } else if (command === 'report') {
            return `protein=${microelementsObj.protein} carbohydrate=${microelementsObj.carbohydrate} fat=${microelementsObj.fat} flavour=${microelementsObj.flavour}`;
        }
    };
}
let manager = breakfastRobot();
console.log(manager("restock flavour 50")); // Success
console.log(manager ("prepare lemonade 4")); // Error: not enough carbohydrate in
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
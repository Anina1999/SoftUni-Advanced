//solve 1 using map
function juiceFlavours(arr) {
    const juiceQuantities = new Map();
    const bottles = new Map();

    for (let line of arr) {
        let [juice, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!juiceQuantities.has(juice)) {
            juiceQuantities.set(juice, 0);
        }

        juiceQuantities.set(juice, juiceQuantities.get(juice) + quantity);

        let totalQuantity = juiceQuantities.get(juice);
        if (totalQuantity >= 1000) {
            let bottleCount = Math.floor(totalQuantity / 1000);
            juiceQuantities.set(juice, totalQuantity % 1000);

            if (!bottles.has(juice)) {
                bottles.set(juice, 0);
            }
            bottles.set(juice, bottles.get(juice) + bottleCount);
        }
    }

    for (let [juice, bottleCount] of bottles) {
        console.log(`${juice} => ${bottleCount}`);
    }
}

juiceFlavours(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);


//solve 2 using object
function juiceFlavours(arr) {
    const juiceQuantities = {}; 
    const bottles = {};        

    for (let line of arr) {
        let [juice, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!juiceQuantities.hasOwnProperty(juice)) {
            juiceQuantities[juice] = 0;
        }

        juiceQuantities[juice] += quantity;

        if (juiceQuantities[juice] >= 1000) {
            let bottleCount = Math.floor(juiceQuantities[juice] / 1000);
            juiceQuantities[juice] %= 1000;

            if (!bottles.hasOwnProperty(juice)) {
                bottles[juice] = 0;
            }
            bottles[juice] += bottleCount;
        }
    }

    for (let juice in bottles) {
        console.log(`${juice} => ${bottles[juice]}`);
    }
}
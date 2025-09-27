//solve 1
function carFactory(carObj) {
    let engine;
        if (carObj.power <= 90) {
            engine = { power: 90, volume: 1800 };
        } else if (carObj.power <= 120) {
            engine = { power: 120, volume: 2400 };
        } else {
            engine = { power: 200, volume: 3500 };
        }
    
    let carriage = {
        type: carObj.carriage,
        color: carObj.color
    };
    
    let wheelsize = carObj.wheelsize;
        if (wheelsize % 2 === 0) {
            wheelsize--;
        }
    let wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    
    return {
        model: carObj.model,
        engine: engine,
        carriage: carriage,
        wheels: wheels
    };
}

// console.log(carFactory({ model: 'VW Golf II',
// power: 90,
// color: 'blue',
// carriage: 'hatchback',
// wheelsize: 14 }));


// console.log(carFactory({ model: 'Opel Vectra',
// power: 110,
// color: 'grey',
// carriage: 'coupe',
// wheelsize: 17 }));

//solve 2
function carFactory(order) {
    const car = {
        model : undefined,
        engine : null,
        carriage : null,
        wheels : null
    }

    car.model = order.model;

    if (order.power <= 90) {
        car.engine = { power: 90, volume: 1800 };
    } else if (order.power <= 120) {
        car.engine = { power: 120, volume: 2400 };
    } else if (order.power <= 200) {
        car.engine = { power: 200, volume: 3500 };
    }

    car.carriage = { type : order.carriage, color : order.color };

    const size = order.wheelsize % 2 !== 0 ? order.wheelsize : order.wheelsize - 1;

    car.wheels = [size, size, size, size];

    return car;
}

// const car1 = carFactory({ model: 'VW Golf II',
// power: 90,
// color: 'blue',
// carriage: 'hatchback',
// wheelsize: 14 });


// const car2 = carFactory({ model: 'Opel Vectra',
// power: 110,
// color: 'grey',
// carriage: 'coupe',
// wheelsize: 17 });

// console.log(car1);
// console.log(car2);

//solve 3

function carFactory(order) {
    const car = {
        model : undefined,
        engine : null,
        carriage : null,
        wheels : null
    }

    const engineEnum = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 }
    }

    function carriageFactory(type, color) {
        return {type, color};
    }

    car.model = order.model

    if (order.power <= 90) {
        car.engine = engineEnum.smallEngine;
    } else if (order.power <= 120) {
        car.engine = engineEnum.normalEngine;
    } else if (order.power <= 200) {
        car.engine = engineEnum.monsterEngine;
    }
   
    car.carriage = carriageFactory(order.carriage, order.color)

    const size = order.wheelsize % 2 !== 0 ? order.wheelsize : order.wheelsize - 1;

    car.wheels = new Array(4).fill(size);

    return car;
}

const car1 = carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });


const car2 = carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 });

console.log(car1);
console.log(car2);
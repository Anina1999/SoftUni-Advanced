function autoEngineeringCompany(inputArr) {
    const carBrandMap = new Map();

    for (let line of inputArr) {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);

        if (!carBrandMap.has(carBrand)) {
            carBrandMap.set(carBrand, new Map());
        }

        const modelsMap = carBrandMap.get(carBrand);

        if (!modelsMap.has(carModel)) {
            modelsMap.set(carModel, 0);
        }

        modelsMap.set(carModel, modelsMap.get(carModel) + producedCars);
    }

    for (let [brand, models] of carBrandMap) {
        console.log(brand);
        for (let [model, quantity] of models) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);
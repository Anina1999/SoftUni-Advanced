class ShadyCarDealership {
    dealerName;
    availableCars = [];
    soldCars = [];
    revenue = 0;

    constructor(dealerName) {
        this.dealerName = dealerName;
    }

    addCar(model, year, mileage, price) {
        if (
            typeof model !== 'string' || model.trim() === '' ||
            typeof year !== 'number' || year < 1950 ||
            typeof mileage !== 'number' || mileage < 0 ||
            typeof price !== 'number' || price < 0
        ) {
            throw new Error('Invalid car!');
        }

        const car = {
            model: model,
            year: Number(year),
            mileage: Number(mileage),
            price: Number(price),
        };

        this.availableCars.push(car);
        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredYear) {
        const carIndex = this.availableCars.findIndex(car => car.model === model);

        if (carIndex === -1) {
            return `${model} was not found!`;
        }

        const car = this.availableCars[carIndex];
        let soldPrice = car.price;

        const yearDifference = desiredYear - car.year;

        if (yearDifference > 0 && yearDifference <= 5) {
            soldPrice *= 0.9;
        } else if (yearDifference > 5) {
            soldPrice *= 0.8;
        }

        soldPrice = Number(soldPrice.toFixed(2));

        this.availableCars.splice(carIndex, 1);

        this.soldCars.push({
            model: car.model,
            year: car.year,
            mileage: car.mileage,
            soldPrice: soldPrice
        });

        this.revenue += soldPrice;

        return `${model} (${car.year}) was sold for ${soldPrice.toFixed(2)}$`;
    }

    prepareCarForSale(model) {
        const car = this.availableCars.find(car => car.model === model);
        if (!car) {
            return `${model} was not found for preparation!`;
        }

        car.mileage = Math.round(car.mileage / 2);
        car.price = Number(car.price * 1.3);

        return `${car.model} (${car.year}) is prepared for sale with ${car.mileage} km. - ${car.price.toFixed(2)}$`;
    }

    salesJournal(criteria) {
        if (criteria !== 'year' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }

        let sortedSoldCars;
        if (criteria === 'year') {
            sortedSoldCars = this.soldCars.slice().sort((a, b) => b.year - a.year);
        } else {
            sortedSoldCars = this.soldCars.slice().sort((a, b) => a.model.localeCompare(b.model));
        }

        const result = [];
        result.push(`${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`);
        result.push(`${this.soldCars.length} cars sold:`);

        for (const car of sortedSoldCars) {
            result.push(`${car.model} (${car.year}) / ${car.mileage} km. / ${car.soldPrice.toFixed(2)}$`);
        }

        return result.join('\n').trim();
    }
}
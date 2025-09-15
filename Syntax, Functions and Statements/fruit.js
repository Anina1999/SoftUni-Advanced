//solve 1
function calculateNeededExpense(typeOfFruit, weightInGrams, pricePerKilogram) {
    let weightInKilograms = weightInGrams / 1000;
    let totalMoneyNeeded = weightInKilograms * pricePerKilogram;

    console.log(`I need $${totalMoneyNeeded.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${typeOfFruit}.`);
}

//calculateNeededExpense('apple', 1563, 2.35);

//solve 2
function calculateNeededExpense(typeOfFruit, weightInGrams, pricePerKilogram) {
    let weightInKilograms = weightInGrams / 1000;
    let totalMoneyNeeded;

    if (Number.isInteger(weightInKilograms)) {
        totalMoneyNeeded = weightInKilograms * pricePerKilogram;
    } else {
        let kilograms = Math.trunc(weightInKilograms);
        let grams = (weightInKilograms - kilograms) * 1000;
        let pricePerGram = pricePerKilogram / 1000;

        totalMoneyNeeded = (kilograms * pricePerKilogram) + (grams * pricePerGram);
    }

    console.log(`I need $${totalMoneyNeeded.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${typeOfFruit}.`);
}
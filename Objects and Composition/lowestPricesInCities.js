//solve 1
function lowestPricesInCities(inputArr) {
    let products = {};

    for (let line of inputArr) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!products.hasOwnProperty(product)) {
            products[product] = { price: price, town: town };
        } else if (price < products[product].price) {
            products[product] = { price: price, town: town };
        }
    }

    for (let product in products) {
        let { price, town } = products[product];
        console.log(`${product} -> ${price} (${town})`);
    }
}

// lowestPricesInCities(
// ['Sample Town | Sample Product | 1000',

// 'Sample Town | Orange | 2',

// 'Sample Town | Peach | 1',

// 'Sofia | Orange | 3',

// 'Sofia | Peach | 2',

// 'New York | Sample Product | 1000.1',

// 'New York | Burger | 10'
// ]
// );

//solve 2
function lowestPricesInCities(inputArr) {
    const result = {};

    for (let el of inputArr) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if (!result.hasOwnProperty(product)) {
            result[product] = {town, price};
        }

        if (result[product].price > price) {
            result[product] = {town, price};
        }
    }

    for (let [product, productInfo] of Object.entries(result)) {
        console.log(`${product} -> ${productInfo.price} (${productInfo.town})`);
    }
}
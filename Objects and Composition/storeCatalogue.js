//solve 1
function storeCatalogue(arr) {
    let catalogueOfProducts = {};

    for (let line of arr) {
        let [product, price] = line.split(' : ');
        catalogueOfProducts[product] = Number(price);
    }

    let sortedProducts = Object.entries(catalogueOfProducts)
        .sort((a, b) => a[0].localeCompare(b[0]));

    let currentLetter = '';

    for (let [product, price] of sortedProducts) {
        let firstLetter = product[0];
        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            console.log(currentLetter);
        }
        console.log(`  ${product}: ${price}`);
    }
}

// storeCatalogue(['Appricot : 20.4',
// 'Fridge : 1500',
// 'TV : 1499',
// 'Deodorant : 10',
// 'Boiler : 300',
// 'Apple : 1.25',
// 'Anti-Bug Spray : 15',
// 'T-Shirt : 10']);

//solve 2
function storeCatalogue(arr) {
    let catalogueOfProducts = {};

    for (let el of arr) {
        let [product, price] = el.split(' : ');
        let firstCh = product[0];

        if (!catalogueOfProducts.hasOwnProperty(firstCh)) {
            catalogueOfProducts[firstCh] = [];
        }

        catalogueOfProducts[firstCh].push({product, price: Number(price)});
    }

    const keys = Object.keys(catalogueOfProducts).sort((a, b) => a.localeCompare(b));

    for (let key of keys) {
        const productGroup = catalogueOfProducts[key];
        console.log(key);

        productGroup.sort((a, b) => a.product
        .localeCompare(b.product))
        .forEach(e => console.log(`${e.product} : ${e.price}`));
    }
}
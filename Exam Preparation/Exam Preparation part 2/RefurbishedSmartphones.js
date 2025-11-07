class RefurbishedSmartphones {
    retailer;
    availableSmartphones;
    soldSmartphones;
    revenue;
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;

    }
    addSmartphone(model, storage, price, condition) {
        if (!model || storage < 0 || price < 0 || !condition) {
            throw new Error('Invalid smartphone!')
        }

        const phoneInfo = {
            model,
            storage,
            price,
            condition
        }

        this.availableSmartphones.push(phoneInfo);
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`

    }
    sellSmartphone(model, desiredStorage) {
        const foundPhone = this.availableSmartphones.find(phone => phone.model === model)

        if (!foundPhone) {
            throw new Error(`${model} was not found!`);

        }

        const currentStorage = foundPhone.storage;
        const diff = desiredStorage - currentStorage;

        if (currentStorage < desiredStorage) {
            if (diff > 0 && diff <= 128) {
                foundPhone.price *= 0.90
            } else if (diff > 128) {
                foundPhone.price *= 0.80
            }
        }


        this.availableSmartphones = this.availableSmartphones.filter(phone => phone.model !== model);
        this.soldSmartphones.push(foundPhone);
        this.revenue += foundPhone.price;
        return `${model} was sold for ${foundPhone.price.toFixed(2)}$`
    }
    upgradePhones() {
        if (this.availableSmartphones.length === 0) {
            throw new Error("There are no available smartphones!");
        }

        let buff = `Upgraded Smartphones:\n`;

        this.availableSmartphones.forEach(phone => {
            phone.storage *= 2;
            buff += `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$\n`
        })

        return buff.trim()
    }
    salesJournal(criteria) {
        if (criteria !== "storage" && criteria !== 'model') {
            throw new Error("Invalid criteria!");

        }

        let buff = []
        buff.push(`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`)
        buff.push(`${this.soldSmartphones.length} smartphones sold:`)

        this.soldSmartphones.sort((a, b) => {
            if (criteria === "storage") {
                return b.storage - a.storage
            }
            return a.model.localeCompare(b.model)
        }).forEach(phone => {
            buff.push(`${phone.model} / ${phone.storage} GB / ${phone.price.toFixed(2)}$`)
        })

        return buff.join('\n')
    }
}


// let retailer = new RefurbishedSmartphones('SecondLife Devices'); 
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good')); 
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect')); 
// console.log(retailer.addSmartphone('', 512, 1900, 'good'))

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect'); 
// console.log(retailer.upgradePhones());

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));
class WineSelection {
    space = 0;
    wines = [];
    bill = 0;

    constructor(space) {
        this.space = space;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length === this.space) {
            throw new Error('Not enough space in the cellar.');
        }

        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false
        });

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const wine = this.wines.find(w => w.wineName == wineName);

        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }

        wine.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const wineIndex = this.wines.findIndex(w => w.wineName == wineName);

        if (wineIndex === -1) {
            throw new Error("The wine, you're looking for, is not found.");
        }

        const wine = this.wines[wineIndex];

        if (!wine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines.splice(wineIndex, 1);

        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (wineType) {
            const wine = this.wines.find(w => w.wineType == wineType);

            if (!wine) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }

            return `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`;
        }

        const output = [
            `You have space for ${this.space - this.wines.length} bottles more.`,
            `You paid ${this.bill}$ for the wine.`
        ];

        this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

        for (let wine of this.wines) {
            output.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`);
        }

        return output.join(`\n`);
    }
}

const selection = new WineSelection(2)

console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
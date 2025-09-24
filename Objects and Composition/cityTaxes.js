function recordCity(cityName, numberOfPopulation, treasureNum) {
    let cityInfo = {};

    cityInfo.name = cityName;
    cityInfo.population = numberOfPopulation;
    cityInfo.treasury = treasureNum;
    cityInfo.taxRate = 10;

    cityInfo.collectTaxes = function () {
        this.treasury += Math.floor(this.population * this.taxRate);
    };
    cityInfo.applyGrowth = function (percent) {
        this.population += Math.floor(this.population * percent / 100);
    };
    cityInfo.applyReccession = function (percent) {
        this.treasury -= Math.ceil(this.treasury * percent / 100);
    };

    return cityInfo;
}

//Example for testing
const city = recordCity('Tortuga', 7000, 15000);
console.log(city);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);

city.applyReccession(2);
console.log(city.treasury);
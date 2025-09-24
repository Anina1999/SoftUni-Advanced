//solve 1
function createRegistryForTown(strArr) {
    let townRegistry = {};

    for (let i = 0; i < strArr.length; i++) {
        let [town, population] = strArr[i].split(' <-> ');
        
        if (townRegistry[town]) {
            townRegistry[town] += Number(population);
        } else {
            townRegistry[town] = Number(population);
        }
    }

    for (let [town, population] of Object.entries(townRegistry)) {
        console.log(`${town} : ${population}`);
    }
}

// createRegistryForTown(['Istanbul <-> 100000',

// 'Honk Kong <-> 2100004',

// 'Jerusalem <-> 2352344',

// 'Mexico City <-> 23401925',

// 'Istanbul <-> 1000']);

//solve 2
function createRegistryForTown(strArr) {
    let townRegistry = {};

    for (let entry of strArr) {
        const info = entry.split(' <-> ');
        const town = info[0];
        const population = Number(info[1]);

        if (!townRegistry.hasOwnProperty(town)) {
            townRegistry[town] = population;
        } else {
            townRegistry[town] += population;
        }
    }

    for (let town in townRegistry) {
        console.log(`${town} : ${townRegistry[town]}`);
    }
}
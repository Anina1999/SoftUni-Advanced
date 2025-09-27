function heroicInventory(arrOfStr) {
    let heroes = [];

    for (let line of arrOfStr) {
        line = line.trim();
        if (line === '') continue; 
        
        let [name, level, ...items] = line.split(' / ');

        let hero = {
            name: name,
            level: Number(level),
            items: items[0] ? items[0].split(', ') : []
        };

        heroes.push(hero);
    }

    return JSON.stringify(heroes);
}

// console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara']));

// console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));
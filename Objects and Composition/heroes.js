//solve 1
function heroes() {
    const fighter = (name) => {
        let info = {
            name : name,
            health : 100,
            stamina : 100
        }
        return Object.assign(info, canFight(info));
    }

    const mage = (name) => {
        let info = {
            name : name,
            health : 100,
            mana: 100
        }
        return Object.assign(info, canCast(info));
    }

    const canFight = (info) => ({
        fight: () => {
            console.log(`${info.name} slashes at the foe!`);
            info.stamina--;
        }
    })

    const canCast = (info) => ({
        cast : (spell) => {
            console.log(`${info.name} cast ${spell}`);
            info.mana--;
        }
    })

    return {mage : mage, fighter : fighter};
}

//Example 
let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light") 
const scorcher2 = create.fighter("Scorcher 2"); 
scorcher2.fight() 
console.log(scorcher2.stamina); 
console.log(scorcher.mana);
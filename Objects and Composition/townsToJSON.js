//solve 1
function townsToJSON(arr) {

    function getLine(line) {
        return line
            .split('|')
            .filter(e => e !== '')
            .map(e => e.trim());
    }

    let result = [];

    let keys = getLine(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let values = getLine(arr[i]);

        let entries = {};

        for (let j = 0; j < keys.length; j++) {
            let key = keys[j];
            let value = values[j];

            if (key === 'Latitude' || key === 'Longitude') {
                entries[key] = Number(Number(value).toFixed(2));
            } else {
                entries[key] = value;
            }
        }

        result.push(entries);
    }

    return JSON.stringify(result);
}

// console.log(townsToJSON(['| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |']));

// console.log(townsToJSON(['| Town | Latitude | Longitude |', 
//     '| Veliko Turnovo | 43.0757 | 25.6172 |', 
//     '| Monatevideo | 34.50 | 56.11 |']));


//solve 2

function townsToJSON(arr) {
    const result = [];

    const [headerA, headerB, headerC] = arr.shift().split(/\s?\|\s?/gm).filter(el => !!el);

    for (let el of arr) {
        let [town, latitude, longitude] = el.split(/\s?\|\s?/gm).filter(el => !!el);
        const info = {};

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        info[headerA] = town;
        info[headerB] = Number(latitude);
        info[headerC] = Number(longitude);

        result.push(info);
    }

    return JSON.stringify(result);
}

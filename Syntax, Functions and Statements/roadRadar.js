//solve 1
function determineSpeedLimit(speed, area) {
    function checkArea(a) {
        const motorway = 130;
        const interstate = 90;
        const city = 50;
        const residential = 20;

        if (a === 'motorway') return motorway;
        if (a === 'interstate') return interstate;
        if (a === 'city') return city;
        if (a === 'residential') return residential;
    }

    function checkIfWithinLimits(sp, limit) {
        let isWithinLimit = true;
        let overLimit = 0;
        let status = '';

        if (sp > limit) {
            overLimit = sp - limit;

            if (overLimit <= 20) {
                status = 'speeding';
            } else if (overLimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }

            isWithinLimit = false;
        }

        if (isWithinLimit) {
            return `Driving ${sp} km/h in a ${limit} zone`;
        } else {
            return `The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - ${status}`;
        }
    }

    let areaSpeedLimit = checkArea(area);
    let driverSpeedCheck = checkIfWithinLimits(speed, areaSpeedLimit);

    console.log(driverSpeedCheck);
}

//determineSpeedLimit(200, 'motorway');

//solve 2
function determineSpeedLimit(speed, area) {
    let speedLimit = {
        "motorway" : 130,
        "interstate" : 90,
        "city" : 50,
        "residential" : 20
    }

    let currentSpeed = Number(speed);

    if (currentSpeed > speedLimit[area]) {
        let difference = currentSpeed - speedLimit[area];
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit[area]} - ${calculateStatus(difference)}`);
    } else {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimit[area]} zone`);
    }

    function calculateStatus(speedDifference) {
        if (speedDifference <= 20) {
            return 'speeding;'
        } else if (speedDifference > 20 && speedDifference <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}
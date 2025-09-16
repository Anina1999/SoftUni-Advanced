function calculateTimeForWalk(totalSteps, lengthOfFootprintsInMeters, speedInKmH) {
    let distanceInMetres = totalSteps * lengthOfFootprintsInMeters;
    let speedInMetresPerSec = (speedInKmH * 1000) / 3600;
    let timeInSeconds = distanceInMetres / speedInMetresPerSec;
    let rests = Math.floor(distanceInMetres / 500);
    timeInSeconds += rests * 60;

    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds % 3600) / 60);
    let seconds = Math.round(timeInSeconds % 60);

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}

//calculateTimeForWalk(2564, 0.70, 5.5);
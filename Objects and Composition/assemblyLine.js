function createAssemblyLine() {
    function hasClima(object) {
        object.temp = 21;
        object.tempSettings = 21;
        object.adjustTemp = function() {
            if (this.temp < this.tempSettings) {
                this.temp++;
            } else if (this.temp > this.tempSettings) {
                this.temp--;
            }
        };
    }

    function hasAudio(object) {
        object.currentTrack = null;
        object.nowPlaying = function() {
            if (this.currentTrack !== null) {
                console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
            }
        };
    }

    function hasParktronic(object) {
        object.checkDistance = function(distance) {
            if (distance < 0.1) {
                console.log("Beep! Beep! Beep!");
            } else if (distance >= 0.1 && distance < 0.25) {
                console.log("Beep! Beep!");
            } else if (distance >= 0.25 && distance < 0.5) {
                console.log("Beep!");
            } else {
                console.log('');
            }
        };
    }

    return {
        hasClima,
        hasAudio,
        hasParktronic
    };
}


const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

// Example 1
assemblyLine.hasClima(myCar);
console.log(myCar.temp);

myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

// Example 2
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

// Example 3
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4); 
myCar.checkDistance(0.2);

console.log(myCar);
(function() {
    String.prototype.ensureStart = function(str) {
        if (this.startsWith(str)) {
            return this.toString();
        }

        return str + this.toString();  
    };

    String.prototype.ensureEnd = function(str) {
        if (this.endsWith(str)) {
            return this.toString();
        }

        return this.toString() + str;
    };

    String.prototype.isEmpty = function() {
        return !this.toString();
    };

    String.prototype.truncate = function(n) {
        if (n < 4) {
            return ".".repeat(n);
        } else if (this.length <= n) {
            return this.toString();
        } else if (this.includes(" ")) {
            let words = this.split(" ");
            let result = [];

            for (let word of words) {
                let currentString = result.join(" ") + word;
                if (currentString.length + 3 <= n) {
                    result.push(word);
                } else {
                    break;
                }
            }

            return result.join(" ") + "...";
        }
        
        return this.slice(0, n - 3) + "...";
    };

    String.format = function(string, ...params) {
        for (let i = 0; i < params.length; i++) {
            let currentWord = params[i];
            string = string.replace(`{${i}}`, currentWord);
        }

        return string;
    };
})()

let str = 'my string';
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
// console.log(str = str.ensureEnd(' string'));
// console.log("".isEmpty());
// console.log("Pesho".isEmpty());
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox',
'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}',
'dog'));
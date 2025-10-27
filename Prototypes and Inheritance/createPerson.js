function createPerson(firstName, lastName) {
    const person = {
        firstName,
        lastName
    };

    Object.defineProperty(person, "fullName", {
        configurable: true,
        enumerable: true,
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
            const parts = value.split(' ');
            if (parts.length === 2) {
                [this.firstName, this.lastName] = parts;
            }
        }
    });

    return person;
}

let person = createPerson("Albert", "Simpson");

console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson

person.fullName = "Peter";
console.log(person.firstName); // Simon
console.log(person.lastName); // Simpson

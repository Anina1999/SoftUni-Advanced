class Circle {
    _radius;

    constructor(r) {
        this.radius = r;
    }
    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (typeof value !== "number") {
            throw new TypeError('Radius must be a number');
        }

        if (value < 0) {
            throw new RangeError('Radius cannot be negative');
        }
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    set diameter(value) {
        if (typeof value !== "number") {
            throw new TypeError('Diameter must be a number');
        }

        if (value < 0) {
            throw new RangeError('Diameter cannot be negative');
        }
        this._radius = value / 2;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }
}

let c = new Circle(-1);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

myCircle.diameter = -3;
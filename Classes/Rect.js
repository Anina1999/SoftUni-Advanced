class Rect {
    static nextId = 0;
    static index = {};

    id;
    width;
    height;

    constructor(w, h) {
        this.id = Rect.getId();
        this.w = w;
        this.h = h;

        Rect.index[this.id] = this;
    }

    getArea() {
        return this.width ** this.height;
    }

    static getId() {
        return ++this.nextId;
    }
}

const r1 = new Rect(3, 6);
const r2 = new Rect(2, 2);
const r3 = new Rect(1, 10);

console.log(r1, r2, r3);
console.log(Rect)
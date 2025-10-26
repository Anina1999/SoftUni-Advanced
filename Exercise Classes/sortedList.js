class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }

    add(element) {
        this.collection.push(Number(element));
        this.collection.sort((a, b) => a - b);
        this.size = this.collection.length;
        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.collection.length) {
            throw new Error("Index out of bounds");
        }
        this.collection.splice(index, 1);
        this.size = this.collection.length;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.collection.length) {
            throw new Error("Index out of bounds");
        }
        return this.collection[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1); 
console.log(list.get(1)); 
console.log(list.size);
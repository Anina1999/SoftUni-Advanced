//solve 1
function createSortedList() {
    let data = [];

    let objectNum = {
        add: (element) => {
            data.push(element);                
            data.sort((a, b) => a - b);
        },

        remove: (index) => {
            if (index >= 0 && index < data.length) {
                data.splice(index, 1);   
            }
        },

        get: (index) => {
            if (index >= 0 && index < data.length) {
                return data[index]; 
            }
        },

        get size() {
            return data.length;  
        }
    };

    return objectNum;
}

// Example
// let list = createSortedList();
// list.add(5);
// list.add(6);
// list.add(7);

// console.log(list.get(1));

// list.remove(1);
// console.log(list.get(1));

//solve 2
function createSortedList() {
    return {
        _list: [],
        _sortMyArr: (a, b) => a - b,
        size: 0,

        add: function (element) {
            if (typeof element !== 'number') {
                return;
            }
            this._list.push(element);
            this._list.sort(this._sortMyArr);
            this.size = this._list.length;
        },

        remove: function (index) {
            if (index < 0 || index >= this._list.length) {
                return;   
            }
            this._list.splice(index, 1);
            this._list.sort(this._sortMyArr);
            this.size = this._list.length;
        },

        get: function (index) {
            if (index < 0 || index >= this._list.length) {
                return;
            }
            return this._list[index];
        },
    }
}


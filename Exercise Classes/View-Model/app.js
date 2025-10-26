class Textbox {
    _value;
    _elements;
    _invalidSymbols;

    constructor(selector, regex) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
        this._addListener();
    }

    _addListener() {
        Array.from(this.elements).forEach(el => {
            el.addEventListener("input", () => this.value = el.value);
        })
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        Array.from(this.elements).forEach(el => el.value = this.value);
    }

    get elements () {
        return this._elements;
    }

    isValid() {
        return Array.from(this.elements).every(el => !this._invalidSymbols.test(el.value));
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName("textbox");

Array.from(inputs).forEach(input => input.addEventListener('click', function(){console.log(textbox.value)}));

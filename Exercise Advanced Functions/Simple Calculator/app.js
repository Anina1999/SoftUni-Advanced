function calculator() {
    let numOneRef;
    let numTwoRef;
    let resultRef;

    return {
        init(selector1, selector2, resultSelector) {
            numOneRef = document.querySelector(selector1);
            numTwoRef = document.querySelector(selector2);
            resultRef = document.querySelector(resultSelector);
        },
        add() {
            const num1 = Number(numOneRef.value);
            const num2 = Number(numTwoRef.value);
            resultRef.value = num1 + num2;
        },
        subtract() {
            const num1 = Number(numOneRef.value);
            const num2 = Number(numTwoRef.value);
            resultRef.value = num1 - num2;
        }
    };
}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');



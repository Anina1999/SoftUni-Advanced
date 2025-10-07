function subtract() {
    const firstEl = document.getElementById('firstNumber');
    const secondEl = document.getElementById('secondNumber');
    const resultRef = document.getElementById('result');

    let firstNum = Number(firstEl.value);
    let secondNum = Number(secondEl.value);

    const result = firstNum - secondNum;
    resultRef.textContent = result;
}
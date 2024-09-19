function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;

    // Replacing sqrt(x) with Math.sqrt(x)
    expression = expression.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');

    // Replacing ^2 and ^3 with **2 and **3
    expression = expression.replace(/\^2/g, '**2');
    expression = expression.replace(/\^3/g, '**3');

    // Replacing and evaluating expression
    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

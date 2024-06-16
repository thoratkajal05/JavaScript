function calculate() {
    const expression = document.getElementById('expression').value;
    const operatorRegex = /(\+|\-|\*|\/)/;
    const [operand1, operator, operand2] = expression.split(operatorRegex).map(item => item.trim());

    if (!operand1 || !operator || !operand2) {
        document.getElementById('result').innerText = 'Invalid input format.';
        return false;
    }

    let result;
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator.';
    }

    document.getElementById('result').innerText = `Result: ${result}`;
    return false; // Prevent form submission
}

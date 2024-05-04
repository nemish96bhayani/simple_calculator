let result = "";
let operator = "";
let firstNumber = "";
let secondNumber = "";
let displayText = "";
let isDarkTheme = false;

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle("dark", isDarkTheme);
    document.querySelector(".calculator").classList.toggle("dark", isDarkTheme);
    document.querySelector(".display").classList.toggle("dark", isDarkTheme);
    document.getElementById("result-text").classList.toggle("dark", isDarkTheme);
    document.getElementById("cursor").classList.toggle("dark", isDarkTheme);
    document.getElementById("theme-icon").textContent = isDarkTheme ? "☀" : "☾";
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.classList.toggle("dark", isDarkTheme);
    });
}

function insertNumber(num) {
    if (operator === "") {
        firstNumber += num;
        result = firstNumber;
    } else {
        secondNumber += num;
        result = secondNumber;
    }
    displayText += num;
    document.getElementById("result-text").textContent = displayText;
}

function insertOperator(op) {
    if (operator === "") {
        operator = op;
        result = "";
    } else {
        calculateResult();
        operator = op;
        firstNumber = result;
        secondNumber = "";
    }
    displayText += ` ${op} `;
    document.getElementById("result-text").textContent = displayText;
}

function insertDecimal() {
    if (operator === "") {
        if (!firstNumber.includes(".")) {
            firstNumber += ".";
            result = firstNumber;
            displayText += ".";
        }
    } else {
        if (!secondNumber.includes(".")) {
            secondNumber += ".";
            result = secondNumber;
            displayText += ".";
        }
    }
    document.getElementById("result-text").textContent = displayText;
}

function percentage() {
    if (operator === "") {
        firstNumber = parseFloat(firstNumber) / 100;
        result = firstNumber;
        displayText = result.toString();
    } else {
        secondNumber = parseFloat(secondNumber) / 100;
        result = secondNumber;
        displayText = result.toString();
    }
    document.getElementById("result-text").textContent = displayText;
}

function toggleSign() {
    if (operator === "") {
        firstNumber = (-1 * parseFloat(firstNumber)).toString();
        result = firstNumber;
        displayText = result;
    } else {
        secondNumber = (-1 * parseFloat(secondNumber)).toString();
        result = secondNumber;
        displayText = result;
    }
    document.getElementById("result-text").textContent = displayText;
}

function clearResult() {
    result = "";
    operator = "";
    firstNumber = "";
    secondNumber = "";
    displayText = "";
    document.getElementById("result-text").textContent = displayText;
}

function deleteChar() {
    if (operator === "") {
        firstNumber = firstNumber.slice(0, -1);
        result = firstNumber;
        displayText = displayText.slice(0, -1);
    } else {
        secondNumber = secondNumber.slice(0, -1);
        result = secondNumber;
        displayText = displayText.slice(0, -1);
    }
    document.getElementById("result-text").textContent = displayText;
}

function calculateResult() {
    let total = 0;
    switch (operator) {
        case "+":
            total = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case "-":
            total = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case "*":
            total = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case "/":
            total = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
    }
    result = total;
    operator = "";
    firstNumber = result.toString();
    secondNumber = "";
    displayText = result.toString();
    document.getElementById("result-text").textContent = displayText;
}
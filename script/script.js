class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }
    delete() {

    }
    appendNumber(number) {
        this.currentOperand = number;
    }
    chooseOperation(operation) {

    }
    compute() {

    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

var numberButtons = document.getElementsByClassName("number");
var operationButtons = document.getElementsByClassName("operation");
var equalButtons = document.getElementById("equal");
var clearButtons = document.getElementById("clear");
var previousOperandTextElement = document.getElementById("previous-operand");
var currentOperandTextElement = document.getElementById("current-operand");

var calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
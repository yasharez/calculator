// Calculator Web Application
// Developed by Yashar Zafari for The Odin Project
// github: yasharez

// Initialize variables we will need later on
let total = '';
let current = '';
let operation = '';
let previousOperation = '';
let screenReset = false;
let shouldOperate = false;
let textOverflow = false;

// Grab the needed DOM elements
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.numbers');
const period = document.getElementById('dot');
const del = document.getElementById('del');
const clear = document.getElementById('clear');
const sign = document.getElementById('sign');
const operators = document.querySelectorAll('.operators');
const equals = document.getElementById('equals');
const buttons = document.querySelectorAll('button');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

// Populate the display and 'current' variable with numbers inputted by user
numberButtons.forEach((button) => {
    button.addEventListener('click', function() {
        if(screenReset) resetScreen();
        if(display.textContent === '0'){
            display.textContent = '';
            current = '';
        }
        display.textContent += button.textContent;
        if(display.textContent.indexOf('.') !== -1 && period.disabled){
            current = display.textContent;
            shouldOperate = true;
        }else{
            shouldOperate = false;
        }
    });
});

// Main Code to operate on numbers 
operators.forEach((button) => {
    button.addEventListener('click', function() {
        resetOperatorStyle();
        operation = button.textContent;
        if(shouldOperate){
            if(screenReset) resetScreen();
            if (total === ''){
                total = display.textContent;
                screenReset = true;
            }else if(previousOperation !== operation){
                current = display.textContent;
                total = solve(previousOperation);
                screenReset = true;
            }else if(operation !== ''){
                current = display.textContent;
                total = solve(operation);
                screenReset = true;
            };
        };
        screenReset = true;
        previousOperation = operation;
    });
});

// Function for equal button that solves most recent operation
equals.addEventListener('click', function(){
    current = display.textContent;
    total = solve(previousOperation);
    operation = '';
    screenReset = true;
});

// Function that clears display and 'current' variable
clear.addEventListener('click', function() {
    total = '';
    current = '';
    period.disabled = false;
    resetScreen();
    resetOperatorStyle();
});

// Function that adds a decimal to display/'current' variable
period.addEventListener('click', function(){
    period.disabled = true;
    if(display.textContent.indexOf('.') === -1){
        display.textContent += period.textContent;
    };
    screenReset = false;
});

// Function that removes last display entry
del.addEventListener('click', function(){
    let deleted = display.textContent.slice(display.textContent.length - 1);
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    if(deleted === '.'){
        period.disabled = false;
    };
    if(display.textContent.length === 0 || display.textContent === '-'){
        display.textContent = '0';
    };
    total = display.textContent;
    current = '';
    shouldOperate = false;
});

function resetScreen(){
    display.textContent = '0';
    screenReset = false;
};

function solve(currentOperator){
    if(operation !== ''){
        total = operate(currentOperator, total, current);
        display.textContent = total;
    };
    console.log(`succesfully ran solve. Total: ${total}, Current: ${current}, currentOperator: ${currentOperator}`);
    current = '';
    shouldOperate = false;
    period.disabled = false;
    resetOperatorStyle();
    return total;
};

// Function that outputs the result of two entries and operator
function operate(operator, num1, num2){
    switch(operator){
        case '+':
            num1 = Number(num1);
            num2 = Number(num2);
            return String(num1 + num2);
        case '-':
            num1 = Number(num1);
            num2 = Number(num2);
            return String(num1 - num2);
        case '\u00F7':
            num1 = Number(num1);
            num2 = Number(num2);
            return String(num1 / num2);
        case '\u00D7':
            num1 = Number(num1);
            num2 = Number(num2);
            return String(num1 * num2);
    };
};

function resetOperatorStyle(){
    addButton.classList.remove('active-operators');
    subtractButton.classList.remove('active-operators');
    multiplyButton.classList.remove('active-operators');
    divideButton.classList.remove('active-operators');
}

addButton.addEventListener('click', () => {
    addButton.classList.add('active-operators');
});

subtractButton.addEventListener('click', () => {
    subtractButton.classList.add('active-operators');
});

multiplyButton.addEventListener('click', () => {
    multiplyButton.classList.add('active-operators');
});

divideButton.addEventListener('click', () => {
    divideButton.classList.add('active-operators');
});

// // Function to change sign of 'current' variable TESTING FUNCTIONALITY
// sign.addEventListener('click', function(){
//     if(display.textContent.length > 0){
//         if(display.textContent.slice(0,1) !== '-'){
//             display.textContent = '-' + display.textContent;
//         }else if(display.textContent.slice(0,1) === '-'){
//             display.textContent = display.textContent.slice(1);
//         };
//         //STOPPED HERE WITH DEBUGGING SIGN CHANGE
//         total = display.textContent;
//         current = '';
//         shouldOperate = false;
//     };
// });
// Calculator Web Application
// Developed by Yashar Zafari for The Odin Project
// github: yasharez

// Initialize variables we will need later on
let total = '';
let current = '';
let result;
let operation = '';
let screenReset = false;

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

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(`total: ${total}, current: ${current}, operator: ${operation}`)
    });
});

// Populate the display and 'current' variable with numbers inputted by user
numberButtons.forEach((button) => {
    button.addEventListener('click', function() {
        if(screenReset) resetScreen();
        if(display.textContent === '0'){
            display.textContent = '';
        }
        display.textContent += button.textContent;
    });
});

// Main Code to operate on numbers
operators.forEach((button) => {
    button.addEventListener('click', function() {
        operation = button.textContent;
        if (total === ''){
            total = display.textContent;
            screenReset = true;
        }else{
            current = display.textContent;
            total = operate(operation, total, current);
            display.textContent = total;
            console.log(operation);
            operation = '';
            screenReset = true;
        }
        console.log(operation);
    });
});

equals.addEventListener('click', function(){
    current = display.textContent;
    if(total !== '' && current !== ''){
        display.textContent = operate(operation, total, current);
        screenReset = true;
        operation = '';
    };
});

// if(total === ''){
//     total = current;
//     current = '';
//     display.textContent = total;
//     equals.addEventListener('click', function(){
//         result = operate(button.textContent, total, current);
//         display.textContent = result;
//         total = result;
//         current = '';
//     });
// }else{
//     if(operation !== button.textContent){
//         result = operate(operation, total, current);
//     }else{
//         result = operate(button.textContent, total, current);
//     };
//     display.textContent = result;
//     total = result;
//     current = '';
// };
// operation = button.textContent;

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

// Function that clears display and 'current' variable NEEDS WORK
clear.addEventListener('click', function() {
    display.textContent = '0';
    period.disabled = false;
});

// Function that adds a decimal to display/'current' variable NEEDS WORK
period.addEventListener('click', function(){
    period.disabled = true;
    current += period.textContent;
    display.textContent = current;
});

// Function that removes last display entry NEED TO CHECK
del.addEventListener('click', function(){
    let deleted = display.textContent.slice(display.textContent.length - 1);
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    if(deleted === '.'){
        period.disabled = false;
    };
});

// Function to change sign of 'current' variable NEEDS WORK
sign.addEventListener('click', function(){
    if(display.length > 0){
        if(current.slice(0,1) !== '-'){
            current = '-' + current;
            display.textContent = current;
        }else if(current.slice(0,1) === '-'){
            current = current.slice(1);
            display.textContent = current;
        };
    };
});

function resetScreen(){
    display.textContent = '0';
    screenReset = false;
}
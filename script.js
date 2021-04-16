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
        console.log(`AT TOP total: ${total}, current: ${current}, operator: ${operation}`)
    });
});

// Populate the display and 'current' variable with numbers inputted by user
numberButtons.forEach((button) => {
    button.addEventListener('click', function() {
        if(screenReset) resetScreen();
        if(display.textContent === '0'){
            display.textContent = '';
            current = '';
        }
        display.textContent += button.textContent;
    });
});

// Main Code to operate on numbers 
operators.forEach((button) => {
    button.addEventListener('click', function() {
        operation = button.textContent;
        if(screenReset) resetScreen();
        if (total === ''){
            total = display.textContent;
            screenReset = true;
        }else if(total !== '' && current === ''){
            current = display.textContent;
            total = solve();
            screenReset = true;
        };
    });
});

equals.addEventListener('click', function(){
    current = display.textContent;
    solve();
});

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

// Function that clears display and 'current' variable
clear.addEventListener('click', function() {
    total = '';
    current = '';
    period.disabled = false;
    resetScreen();
});

// Function that adds a decimal to display/'current' variable
period.addEventListener('click', function(){
    period.disabled = true;
    display.textContent += period.textContent;
});

// Function that removes last display entry
del.addEventListener('click', function(){
    let deleted = display.textContent.slice(display.textContent.length - 1);
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    if(deleted === '.'){
    };
    if(display.textContent.length === 0 || display.textContent === '-'){
        display.textContent = '0';
    };
});

// Function to change sign of 'current' variable
sign.addEventListener('click', function(){
    if(display.textContent.length > 0){
        if(display.textContent.slice(0,1) !== '-'){
            display.textContent = '-' + display.textContent;
        }else if(display.textContent.slice(0,1) === '-'){
            display.textContent = display.textContent.slice(1);
        };
    };
});

function resetScreen(){
    display.textContent = '0';
    screenReset = false;
};

function solve(){
    if(operation !== ''){
        total = operate(operation, total, current);
        display.textContent = total;
    };
    console.log('succesfully ran solve');
    operation = '';
    current = '';
    return total;
};



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(`AT BOTTOM total: ${total}, current: ${current}, operator: ${operation}`)
    });
});
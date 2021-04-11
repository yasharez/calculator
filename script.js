// Calculator Web Application
// Developed by Yashar Zafari for The Odin Project
// github: yasharez

// Initialize variables we will need later on
let total = '';
let current = '';
let result;
let previousOperator = '';

// Grab the needed DOM elements
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.numbers');
const period = document.getElementById('dot');
const del = document.getElementById('del');
const clear = document.getElementById('clear');
const sign = document.getElementById('sign');
const operators = document.querySelectorAll('.operators');
const equals = document.getElementById('equals');

// Populate the display and 'current' variable with numbers inputted by user
numberButtons.forEach((button) => {
    button.addEventListener('click', function() {
        current += button.textContent;
        display.textContent = current;
        console.log(`number button log: total: ${total}, current: ${current}`);
    });
});

// Function that clears display and 'current' variable
clear.addEventListener('click', function() {
    current = '';
    total = '';
    display.textContent = '0';
    period.disabled = false;
});

// Function that adds a decimal to display/'current' variable
period.addEventListener('click', function(){
    period.disabled = true;
    current += period.textContent;
    display.textContent = current;
});

// Function that removes last display entry
del.addEventListener('click', function(){
    let deleted = current.slice(current.length - 1);
    current = current.slice(0, current.length - 1)
    display.textContent = current;
    if(deleted === '.'){
        period.disabled = false;
    };
});

// Function to change sign of 'current' variable
sign.addEventListener('click', function(){
    if(current.length > 0){
        if(current.slice(0,1) !== '-'){
            current = '-' + current;
            display.textContent = current;
        }else if(current.slice(0,1) === '-'){
            current = current.slice(1);
            display.textContent = current;
        };
    };
});

operators.forEach((button) => {
    button.addEventListener('click', function() {
        if(total === ''){
            total = current;
            current = '';
            display.textContent = total;
            equals.addEventListener('click', function(){
                result = operate(button.textContent, total, current);
                display.textContent = result;
                total = result;
                console.log(`total: ${total}, current: ${current}  if result: ${result}`);
                current = '';
            });
        }else{
            if(previousOperator !== button.textContent){
                result = operate(previousOperator, total, current);
            }else{
                result = operate(button.textContent, total, current);
            };
            display.textContent = result;
            total = result;
            current = '';
            console.log(`total: ${total}, current: ${current} else result: ${result}`);
        };
        previousOperator = button.textContent;
    });
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
            return String(num1 / num2);
    };
};


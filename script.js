let total = '';
let current = '';
// let addResult;
// let subtractResult;
// let mulitplyResult;
// let divideResult;
let result;
let divText = '\u00F7';
let multText = '\u00D7';

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.numbers');
const period = document.getElementById('dot');
const del = document.getElementById('del');
const clear = document.getElementById('clear');
const sign = document.getElementById('sign');
const operators = document.querySelectorAll('.operators');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const equals = document.getElementById('equals');

numberButtons.forEach((button) => {
    button.addEventListener('click', function() {
        current += button.textContent;
        display.textContent = current;
        console.log(`number button log: total: ${total}, current: ${current}`);
    });
});

clear.addEventListener('click', function() {
    current = '';
    total = '';
    display.textContent = '0';
    period.disabled = false;
});

period.addEventListener('click', function(){
    period.disabled = true;
    current += period.textContent;
    display.textContent = current;
});

del.addEventListener('click', function(){
    let deleted = current.slice(current.length - 1);
    current = current.slice(0, current.length - 1)
    display.textContent = current;
    if(deleted === '.'){
        period.disabled = false;
    };
});

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
            display.textContent = '0';
            equals.addEventListener('click', function(){
                switch(button.textContent){
                    case '+':
                        result = add(total, current);
                        break;
                    case '-':
                        result = subtract(total, current);
                        break;
                    case '\u00F7':
                        result = divide(total, current);
                        break;
                    case '\u00D7':
                        result = multiply(total, current);
                        break;
                };
                display.textContent = String(result);
                total = result;
                console.log(`total: ${total}, current: ${current} result: ${result}`);
            });
        }else{
            switch(button.textContent){
                case '+':
                    result = add(total, current);
                    console.log(`total: ${total}, current: ${current} result: ${result} ${button.textContent}`);
                    break;
                case '-':
                    result = subtract(total, current);
                    console.log(`total: ${total}, current: ${current} result: ${result} ${button.textContent}`);
                    break;
                case '\u00F7':
                    result = divide(total, current);
                    console.log(`total: ${total}, current: ${current} result: ${result} ${button.textContent}`);
                    break;
                case '\u00D7':
                    result = multiply(total, current);
                    console.log(`total: ${total}, current: ${current} result: ${result} ${button.textContent}`);
                    break;
            };
            display.textContent = String(result);
            total = result;
            current = '';
            console.log(`total: ${total}, current: ${current} result: ${result}`);
        };
    });
});

function add (num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 + num2;
};

function subtract (num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 - num2;
};

function multiply (num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 * num2;
};

function divide (num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 / num2;
};

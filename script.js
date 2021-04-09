let total = '';
let current = '';
let addResult;
let subtractResult;
let mulitplyResult;
let divideResult;

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.numbers');
const period = document.getElementById('dot');
const del = document.getElementById('del');
const clear = document.getElementById('clear');
const sign = document.getElementById('sign');
const operators = document.querySelectorAll('operators');
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

addBtn.addEventListener('click', function(){
    console.log(`add1: total: ${total}, current: ${current}, addResult: ${addResult}`);
    total = current;
    current = '';
    display.textContent = '0';
    console.log(`add2: total: ${total}, current: ${current}, addResult: ${addResult}`);
    equals.addEventListener('click', function(){
        console.log(`add3: total: ${total}, current: ${current}, addResult: ${addResult}`);
        addResult = add(total, current);
        display.textContent = String(addResult);
        total = addResult;
        console.log(`add4: total: ${total}, current: ${current}, addResult: ${addResult}`);
    });
});

subtractBtn.addEventListener('click', function(){
    total = current;
    current = '';
    display.textContent = '0';
    equals.addEventListener('click', function(){
        subtractResult = subtract(total, current);
        display.textContent = String(subtractResult);
    });
});

multiplyBtn.addEventListener('click', function(){
    total = current;
    current = '';
    display.textContent = '0';
    equals.addEventListener('click', function(){
        multiplyResult = multiply(total, current);
        display.textContent = String(multiplyResult);
    });
});

divideBtn.addEventListener('click', function(){
    total = current;
    current = '';
    display.textContent = '0';
    equals.addEventListener('click', function(){
        divideResult = divide(total, current);
        display.textContent = String(divideResult);
    });
});


function add (num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 + num2;
}

function subtract (num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 - num2;
}

function multiply (num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 * num2;
}

function divide (num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 / num2;
}

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
        console.log(total, current);
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
    total = current;
    current = '';
    display.textContent = '0';
    addResult = add(total, current);
    equals.addEventListener('click', function(){
        display.textContent = String(addResult);
        console.log(total, current, addResult); //Was stuck here

    })
})

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

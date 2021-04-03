let numbers = ['', ''];

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.numbers');
const period = document.getElementById('dot');
const clear = document.getElementById('clear');

numberButtons.forEach((button) => {
    button.addEventListener('click', function() {
        numbers[0] += button.textContent;
        display.textContent = numbers[0];
        console.log(numbers[0])
    });
});

clear.addEventListener('click', function() {
    numbers[0] = '';
    display.textContent = '0';
});

period.addEventListener('click', function(){
    if(numbers[0].indexOf('.') !== -1){
        period.disabled = true;
    }
    numbers[0] += period.textContent;
    display.textContent = numbers[0];
    console.log(numbers[0]);
});
function add (array){
    num1 = Number(array[0]);
    num2 = Number(array[1]);
    return num1 + num2;
}

function subtract (array){
    num1 = Number(array[0]);
    num2 = Number(array[1]);
    return num1 - num2;
}

function multiply (array){
    num1 = Number(array[0]);
    num2 = Number(array[1]);
    return num1 * num2;
}

function divide (array){
    num1 = Number(array[0]);
    num2 = Number(array[1]);
    return num1 / num2;
}

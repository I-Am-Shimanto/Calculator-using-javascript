let display = document.querySelector('.display');
let clear = document.querySelector('.clear');
let divided = document.querySelector('.divided');
let multiply = document.querySelector('.multiply');
let minus = document.querySelector('.minus');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let plus = document.querySelector('.plus');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let equal = document.querySelector('.equal');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let zero = document.querySelector('.zero');

// ======= function =======

one.addEventListener('click', ()=>{
    display.value += 1;
})

two.addEventListener('click', ()=>{
    display.value += 2;
})
three.addEventListener('click', ()=>{
    display.value += 3;
})
four.addEventListener('click', ()=>{
    display.value += 4;
})
five.addEventListener('click', ()=>{
    display.value += 5;
})
six.addEventListener('click', ()=>{
    display.value += 6;
})
seven.addEventListener('click', ()=>{
    display.value += 7;
})
eight.addEventListener('click', ()=>{
    display.value += 8;
})
nine.addEventListener('click', ()=>{
    display.value += 9;
})
zero.addEventListener('click', ()=>{
    display.value += 0;
})
clear.addEventListener('click', ()=>{
    display.value = '';
})
plus.addEventListener('click', ()=>{
    display.value += '+';
})
minus.addEventListener('click', ()=>{
    display.value += '-';
})
multiply.addEventListener('click', ()=>{
    display.value += '*';
})
divided.addEventListener('click', ()=>{
    display.value += '/';
})
equal.addEventListener('click', ()=>{
    if(display.value === ''){
        display.value = '0';
    }else{
        display.value = eval(display.value);
    }
})
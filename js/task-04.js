const counter = document.querySelector('#counter');
const decreaseValue = document.querySelector('button[data-action="decrement"]');
const increaseValue = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

decreaseValue.addEventListener('click', decrement);
increaseValue.addEventListener('click', increment);

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const addUserName = () => {
    let name = inputName.value.trim();
    outputName.textContent = name.length > 0 ? name : 'незнакомец';
};
inputName.addEventListener('input', addUserName);
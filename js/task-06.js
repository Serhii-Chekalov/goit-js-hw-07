const input = document.querySelector('#validation-input');
const limitLength = parseInt(
    document.querySelector('#validation-input').dataset.length,
);
const getValue = () => {
    let value = input.value.length;
    if (value !== limitLength){
        input.classList.add('invalid');
        input.classList.remove('valid');
        return;
    }
    input.classList.remove('invalid');
    input.classList.add('valid');
};

input.addEventListener('input', getValue);
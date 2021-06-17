const control = document.querySelector('#controls');
const input = document.querySelector('#controls input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

const createBoxes = amount => {
    const randomRgb = () => {
        const rgbNum = () => Math.floor(Math.random() * 255);
        const r = rgbNum();
        const g = rgbNum();
        const b = rgbNum();

        return `rgb(${r},${g},${b})`;
    };

    amount = input.value;

    for (let i = 0; i < amount; i += 1) {
        const basicSize = 30;
        const biggestSize = basicSize + i * 10;
        const box = document.createElement('div');
        box.setAttribute(
            'style',
            `width: ${biggestSize}px; height: ${biggestSize}px; background-color: ${randomRgb()}`,
        );
        boxes.append(box);
    }
};

const destroyBoxes = () => {
    input.value = '';
    boxes.innerHTML = '';
};

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

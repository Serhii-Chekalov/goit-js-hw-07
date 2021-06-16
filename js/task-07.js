 const input = document.querySelector('#font-size-control');
 const spanText = document.querySelector('#text');
 
 const fontSizeControl = () => {
     spanText.setAttribute('style', `font-size: ${input.value}px`);
 };
 
 input.addEventListener('input', fontSizeControl);


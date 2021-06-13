const listEl = document.querySelectorAll('.item');
console.log(`В списке ${listEl.length} категории`);
listEl.forEach(el => console.log(`Категория - ${el.firstElementChild.textContent}, 
Количество элементов - ${el.lastElementChild.children.length}`,));
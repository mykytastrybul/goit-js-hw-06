const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(element => {
    const title = element.querySelector('h2');
    const count = element.querySelectorAll('li');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${count.length}`);
})
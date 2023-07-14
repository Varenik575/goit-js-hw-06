
const categoryListItems = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryListItems.length}`);

categoryListItems.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.children[1].children.length}`)
});




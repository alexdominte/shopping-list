const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

renderShoppingList();

function renderShoppingList() {
  let shoppingListHTML = '';

  for (let i = 0; i < shoppingList.length; i++){
    const items = shoppingList[i];
    const html = `
    <div class='list-grid'>
      <div class='list-text'>${items}</div>
      <button class='delete-button' onclick='
        shoppingList.splice(${i}, 1);
        renderShoppingList();
        saveToStorage();
      '>Delete</button>
    </div>`;
    shoppingListHTML += html;
  }
  
  document.querySelector('.js-shopping-list')
    .innerHTML = shoppingListHTML
  
}

function addToList() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value
  let capitalizedName = capitalizeFirstLetter(name);
  
  shoppingList.push(capitalizedName);
  saveToStorage();

  inputElement.value = ''
  renderShoppingList();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function saveToStorage() {
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}
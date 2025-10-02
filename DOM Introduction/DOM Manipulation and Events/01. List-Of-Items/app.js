function addItem() {
    // read input field
    // if no content -> do nothing
    // populate list item with text 
    // find list and append new list item
    // clear input fields

    const input = document.getElementById('newItemText');

    if (!input.value) {
        return;
    }

    const item = document.createElement('li');
    item.textContent = input.value;

    const list = document.getElementById('items');
    list.appendChild(item);

    input.value = '';
}
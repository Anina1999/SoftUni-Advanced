function addItem() {
    const input = document.getElementById('newItemText');

    if (!input.value) {
        return;
    }

    const item = document.createElement('li');
    item.textContent = input.value;

    // create Delete button/anchor 
    // append to item
    // add finctionallity for deletion

    //when delete is clicked -> delete current item:
    // -- from event target 
    // -- select parent element
    // -- remove from DOM

    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    item.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete);

    function onDelete(event) {
        const row = event.target.parentElement;
        row.remove();

    }

    const list = document.getElementById('items');
    list.appendChild(item);

    input.value = '';
}
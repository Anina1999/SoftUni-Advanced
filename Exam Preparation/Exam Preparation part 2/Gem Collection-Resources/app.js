window.addEventListener("load", solve);

function solve() {
    const addBtnRef = document.getElementById('add-btn');
    const previewListRef = document.getElementById('preview-list');
    const ulCollection = document.getElementById('collection');

    const nameRef = document.getElementById('gem-name');
    const colorRef = document.getElementById('color');
    const caratsRef = document.getElementById('carats');
    const priceRef = document.getElementById('price');
    const selectRef = document.getElementById('type');

    addBtnRef.addEventListener('click', onSubmit);

    function onSubmit(event) {
        const name = nameRef.value.trim();
        const color = colorRef.value.trim();
        const carats = caratsRef.value.trim();
        const price = priceRef.value.trim();
        const type = selectRef.value.trim();

        if (!name || !color || !carats || !price || !type) {
            return;
        }

        const li = document.createElement('li');
        li.classList.add('gem-info');

        const article = document.createElement('article');
        const h4 = document.createElement('h4');
        h4.textContent = name;

        const pColor = document.createElement('p');
        pColor.textContent = `Color: ${color}`;

        const pCarats = document.createElement('p');
        pCarats.textContent = `Carats: ${carats}`;

        const pPrice = document.createElement('p');
        pPrice.textContent = `Price: ${price}$`;

        const pType = document.createElement('p');
        pType.textContent = `Type: ${type}`;

        article.appendChild(h4);
        article.appendChild(pColor);
        article.appendChild(pCarats);
        article.appendChild(pPrice);
        article.appendChild(pType);
        li.appendChild(article);

        const btnSave = document.createElement('button');
        btnSave.classList.add('save-btn');
        btnSave.textContent = 'Save to collection';

        const btnEdit = document.createElement('button');
        btnEdit.classList.add('edit-btn');
        btnEdit.textContent = 'Edit information';

        const btnCancel = document.createElement('button');
        btnCancel.classList.add('cancel-btn');
        btnCancel.textContent = 'Cancel';

        li.appendChild(btnSave);
        li.appendChild(btnEdit);
        li.appendChild(btnCancel);

        previewListRef.appendChild(li);

        nameRef.value = '';
        colorRef.value = '';
        caratsRef.value = '';
        priceRef.value = '';
        selectRef.value = '';
        addBtnRef.disabled = true;

        btnEdit.addEventListener('click', onEdit);
        btnSave.addEventListener('click', onSave);
        btnCancel.addEventListener('click', onCancel);

        function onEdit() {
            nameRef.value = name;
            colorRef.value = color;
            caratsRef.value = carats;
            priceRef.value = price;
            selectRef.value = type;

            li.remove();
            addBtnRef.disabled = false;
        }

        function onSave() {
            const newLi = document.createElement('li');
            const p = document.createElement('p');
            p.textContent = `${name} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;
            newLi.appendChild(p);
            ulCollection.appendChild(newLi);

            li.remove();
            addBtnRef.disabled = false;
        }

        function onCancel() {
            li.remove();
            addBtnRef.disabled = false;
        }
    }
}

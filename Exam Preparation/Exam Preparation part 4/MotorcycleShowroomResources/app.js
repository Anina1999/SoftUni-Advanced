window.addEventListener("load", solve);

function solve() {
    const form = document.querySelector('form');
    let totalProfit = 0;

    const inputs = {
        location: document.getElementById('location'),
        area: document.getElementById('area'),
        buildYear: document.getElementById('year'),
        type: document.getElementById('type'),
        pricePerM: document.getElementById('price-per-sqm'),
        profitPercentage: document.getElementById('expected-profit'),
    };

    form.addEventListener('submit', onPublish);

    function getInputsValues(inputs) {
        return {
            location: inputs.location.value.trim(),
            area: Number(inputs.area.value),
            buildYear: inputs.buildYear.value.trim(),
            type: inputs.type.value.trim(),
            pricePerM: Number(inputs.pricePerM.value),
            profitPercentage: Number(inputs.profitPercentage.value),
        };
    }

    function calculatePrices(area, pricePerM, profitPercentage) {
        const basePrice = Number(area) * Number(pricePerM);
        const profit = basePrice * Number(profitPercentage) / 100;
        const newPrice = basePrice + profit;
        return { basePrice, newPrice };
    }

    function onPublish(event) {
        event.preventDefault();

        const values = getInputsValues(inputs);
        if (!values.location || isNaN(values.area) <= 0 || isNaN(values.pricePerM) <= 0 || isNaN(values.profitPercentage) < 0 || values.profitPercentage < 0 || !values.buildYear || !values.type) {
          return;
        }

        const prices = calculatePrices(values.area, values.pricePerM, values.profitPercentage);
        const tbody = document.getElementById('table-body');

        const tr = document.createElement('tr');
        tr.classList.add('row');

        const td1 = document.createElement('td');
        td1.textContent = values.location;

        const td2 = document.createElement('td');
        td2.textContent = values.area;

        const td3 = document.createElement('td');
        td3.textContent = values.buildYear;

        const td4 = document.createElement('td');
        td4.textContent = values.type;

        const td5 = document.createElement('td');
        td5.textContent = prices.basePrice.toFixed(2);

        const td6 = document.createElement('td');
        td6.textContent = prices.newPrice.toFixed(2);

        const td7 = document.createElement('td');

        const editBtn = document.createElement('button');
        editBtn.classList.add('action-btn', 'edit');
        editBtn.textContent = 'Edit';

        const sellBtn = document.createElement('button');
        sellBtn.classList.add('action-btn', 'sell');
        sellBtn.textContent = 'Sell';

        td7.appendChild(editBtn);
        td7.appendChild(sellBtn);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);

        tbody.appendChild(tr);

        for (let key in inputs) {
            inputs[key].value = '';
        }

        editBtn.addEventListener('click', () => {
            inputs.location.value = td1.textContent;
            inputs.area.value = td2.textContent;
            inputs.buildYear.value = td3.textContent;
            inputs.type.value = td4.textContent;

            const pricePerM_value = Number(td5.textContent) / Number(td2.textContent);
            const profitPercent_value = ((Number(td6.textContent) - Number(td5.textContent)) / Number(td5.textContent)) * 100;

            inputs.pricePerM.value = pricePerM_value.toFixed(2);
            inputs.profitPercentage.value = profitPercent_value.toFixed(2);

            tr.remove();
        });

        sellBtn.addEventListener('click', () => {
            const basePrice = Number(td5.textContent);
            const newPrice = Number(td6.textContent);
            const profit = newPrice - basePrice;
            totalProfit += profit;

            const display = document.getElementById('profit');
            display.textContent = totalProfit.toFixed(2);

            const ul = document.getElementById('property-list');
            const li = document.createElement('li');
            li.classList.add('each-list');

            const span1 = document.createElement('span');
            span1.textContent = `${td1.textContent} – ${td4.textContent}`;

            const span2 = document.createElement('span');
            span2.textContent = td3.textContent;

            const span3 = document.createElement('span');
            span3.textContent = profit.toFixed(2);

            li.appendChild(span1);
            li.appendChild(span2);
            li.appendChild(span3);
            ul.appendChild(li);

            tr.remove();
        });
    }
}
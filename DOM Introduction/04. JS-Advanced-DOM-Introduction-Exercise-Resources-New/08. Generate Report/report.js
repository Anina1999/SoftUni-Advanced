function generateReport() {
    const rows = Array.from(document.querySelectorAll('table tr'));
    const output = document.getElementById('output');
    const headers = document.querySelectorAll('thead th');

    const selectedColumns = [];

    headers.forEach((header, index) => {
        const checkbox = header.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.checked) {
            const name = checkbox.name;
            selectedColumns.push({index, name});
        }
    });

    const result = [];

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.querySelectorAll('td');

        if (cells.length === 0) continue;

        const rowData = {};

        selectedColumns.forEach(col => {
            const cell = cells[col.index];
            if (cell) {
                rowData[col.name] = cell.textContent.trim();
            }
        });

        result.push(rowData);
    }
    output.value = JSON.stringify(result, null, 2);
}

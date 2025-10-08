function search() {
    const towns = document.getElementById('towns').getElementsByTagName('li');
    const searchText = document.getElementById("searchText").value.trim().toLowerCase();
    const result = document.getElementById('result');

    let matches = 0;

    for (let town of towns) {
        const nameOfTown = town.textContent.toLowerCase();

        town.style.fontWeight = 'normal';
        town.style.textDecoration = 'none';

        if (searchText !== '' && nameOfTown.includes(searchText)) {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            matches++;
        }
    }

    result.textContent = `${matches} matches found`;
}

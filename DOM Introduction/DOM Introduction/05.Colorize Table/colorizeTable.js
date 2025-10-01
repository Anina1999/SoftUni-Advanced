function colorize() {
    const rows = Array.from(document.querySelector('table').querySelectorAll('tr')).slice(1);

    for (let i = 0; i < rows.length; i++) {
        if (i % 2 === 0) {
            rows[i].style.backgroundColor = 'teal';
        }
    }     
}
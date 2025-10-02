function extract(content) {
    const wholeText = document.getElementById(content).textContent;
    const regex = /\(([^)]+)\)/g;
    const result = document.getElementById('result');
    const btn = document.querySelector('button');

    let matches = [];
    let match;

    while ((match = regex.exec(wholeText)) !== null) {
        matches.push(match[1]);
    }

    if (result) {
        result.textContent = matches.length ? matches.join('; ') : 'No matches found.';
    }

    if (btn) {
        btn.style.display = 'none';
    }

    return matches.length ? matches.join('; ') : '';
}




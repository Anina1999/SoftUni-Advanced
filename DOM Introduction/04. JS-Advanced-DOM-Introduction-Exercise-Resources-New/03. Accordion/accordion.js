function toggle() {
    const button = document.getElementsByClassName("button")[0];
    const textOfButton = document.getElementById("extra");
    
    if (textOfButton.style.display === 'none' || textOfButton.style.display === '') {
        textOfButton.style.display = 'block';
        button.textContent = 'Less';
    } else if (textOfButton.style.display === 'block') {
        textOfButton.style.display = 'none';
        button.textContent = 'More';
    }
}
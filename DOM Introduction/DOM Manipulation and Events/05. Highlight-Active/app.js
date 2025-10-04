function focused() {
    // addEventListener to nearest common parrent
    // on focusin add.focused class to input parent
    // on focusout removeClass

    const parent = document.querySelector('div');
    parent.addEventListener('focus', onFocusIn);
    parent.addEventListener('blur', onFocusOut);

    function onFocusIn(event) {
        event.target.parentElement.className = 'focused';
    }

    function onFocusOut(event) {
        event.target.parentElement.className = '';
    }
}
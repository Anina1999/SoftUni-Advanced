function validate() {
    const input = document.querySelector('input');

    input.addEventListener('change', validateEmail);

    function validateEmail() {
        const inputValue = input.value;
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (!pattern.test(inputValue)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }
}
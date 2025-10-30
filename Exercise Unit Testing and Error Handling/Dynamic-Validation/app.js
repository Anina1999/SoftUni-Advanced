function validate() {
    const inputRef = document.getElementById("email");
    inputRef.addEventListener("change", (event)=>{
        const value = inputRef.value;
        const pattern = /^[a-z]+@[a-z]+.[a-z]+$/g;

        if (pattern.test(value)) {
            inputRef.classList.remove("error");
        } else {
            inputRef.classList.add("error");
        }
    })
}
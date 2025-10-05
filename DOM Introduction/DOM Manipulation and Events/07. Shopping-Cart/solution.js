function solve() {
    const products = Array.from(document.querySelectorAll(".product"));
    const textArea = document.querySelector('textarea');
    const checkoutBtn = document.querySelector(".checkout");

    const boughtProducts = new Set();
    let total = 0;

    products.forEach(product => {
        const name = product.querySelector(".product-title").textContent;
        const money = Number(product.querySelector(".product-line-price").textContent);
        const addBtn = product.querySelector(".add-product");

        addBtn.addEventListener('click', printResult);

        function printResult() {
            textArea.value += `Added ${name} for ${money.toFixed(2)} to the cart.\n`;
            boughtProducts.add(name);
            total += money;
        }
    });

    checkoutBtn.addEventListener('click', calculateProductsInCart);

    function calculateProductsInCart() {
        const productList = [...boughtProducts].join(', ');

        textArea.value += `You bought ${productList} for ${total.toFixed(2)}.\n`;
        
        document.querySelectorAll('button').forEach(btn => btn.disabled = true);
    }
}
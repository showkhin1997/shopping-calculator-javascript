function productQuantityPrice() {
    const inputField = document.getElementById('quantity-input-field');
    let productQuantityValue = parseInt(inputField.value);
    productQuantityValue = productQuantityValue + 1;
    inputField.value = productQuantityValue;
}

document.getElementById('quantity-add-button').addEventListener('click', function () {
    productQuantityPrice();
})
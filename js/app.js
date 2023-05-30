function productQuantityPrice(isIncrease) {
    const inputField = document.getElementById('laptop-quantity-input-field');
    let productQuantityValue = parseInt(inputField.value);
    if (isIncrease == true) {
        productQuantityValue = productQuantityValue + 1;
    }
    else if (isIncrease == false) {
        if (productQuantityValue > 0) {
            productQuantityValue = productQuantityValue - 1;
        }
    }
    inputField.value = productQuantityValue;
}

document.getElementById('laptop-quantity-add-button').addEventListener('click', function () {
    productQuantityPrice(true);
});

document.getElementById('laptop-quantity-minus-button').addEventListener('click', function () {
    productQuantityPrice(false);
})
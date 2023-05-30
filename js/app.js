function productQuantityPrice(price, isIncrease) {
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
    const productPrice = price * productQuantityValue;
    console.log(productPrice);
    document.getElementById('laptop-price').innerText = productPrice;
    inputField.value = productQuantityValue;
}

document.getElementById('laptop-quantity-add-button').addEventListener('click', function () {
    productQuantityPrice(98000, true);
});

document.getElementById('laptop-quantity-minus-button').addEventListener('click', function () {
    productQuantityPrice(98000, false);
})
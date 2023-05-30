function productQuantityPrice(product, price, isIncrease) {
    const inputField = document.getElementById(product + '-quantity-input-field');
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
    document.getElementById(product + '-price').innerText = productPrice;
    inputField.value = productQuantityValue;
}

document.getElementById('laptop-quantity-add-button').addEventListener('click', function () {
    productQuantityPrice('laptop', 98000, true);
});

document.getElementById('laptop-quantity-minus-button').addEventListener('click', function () {
    productQuantityPrice('laptop', 98000, false);
})
document.getElementById('mouse-quantity-add-button').addEventListener('click', function () {
    productQuantityPrice('mouse', 1250, true);
});

document.getElementById('mouse-quantity-minus-button').addEventListener('click', function () {
    productQuantityPrice('mouse', 1250, false);
})
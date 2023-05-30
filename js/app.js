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

    inputField.value = productQuantityValue;

    const productPrice = price * productQuantityValue;
    document.getElementById(product + '-price').innerText = productPrice;
    totalPrice();
}

function getProductQuantity(product) {
    const inputField = document.getElementById(product + '-quantity-input-field');
    const productQuantity = inputField.value;
    return productQuantity;
}

function totalPrice() {
    const laptopPrice = getProductQuantity('laptop') * 98000;
    const mousePrice = getProductQuantity('mouse') * 1250;
    const subTotal = laptopPrice + mousePrice;
    const taxAmmount = subTotal * 0.1;
    const totalPrice = subTotal + taxAmmount;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = taxAmmount;
    document.getElementById('total-price').innerText = totalPrice;
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
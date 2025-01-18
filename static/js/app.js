let cart = [];

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = event.target.getAttribute('data-product');
        const productPrice = parseInt(event.target.getAttribute('data-price'));

        // Add product to cart
        cart.push({ id: productId, price: productPrice });

        // Update the cart view
        updateCart();
    });
});

document.getElementById('cart-btn').addEventListener('click', () => {
    document.getElementById('products').style.display = 'none';
    document.getElementById('cart').style.display = 'block';
});

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Checkout successful!');
    cart = [];  // Empty cart after checkout
    updateCart();  // Reset cart view
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Product ${item.id} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById('total-price').textContent = total;
}

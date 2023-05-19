let cartItems = [];

function addToCart(productName) {
    cartItems.push(productName);
    updateCartCounter();
}

function updateCartCounter() {
    const cartCounter = document.getElementById('cart-counter');
    cartCounter.textContent = cartItems.length;
}

function showCart() {
    const cartOverlay = document.getElementById('cart-overlay');
    const cartPopup = document.getElementById('cart-popup');
    const cartItemsContainer = document.getElementById('cart-items');

    cartItemsContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        const itemRow = document.createElement('div');
        itemRow.classList.add('cart-item');
        itemRow.innerHTML =
            `<span>${item}</span>
            <img src="Pictures/remove.png" width="20" alt="Remove" onclick="removeFromCart(${index})">`;
        cartItemsContainer.appendChild(itemRow);
    });

    cartOverlay.style.display = 'block';
    cartPopup.style.display = 'block';
}

function hideCart() {
    const cartOverlay = document.getElementById('cart-overlay');
    const cartPopup = document.getElementById('cart-popup');
    cartOverlay.style.display = 'none';
    cartPopup.style.display = 'none';
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartCounter();
    showCart(); // Update the cart items display
}
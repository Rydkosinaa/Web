// script.js

// Array to store cart items
let cartItems = [];

// Function to add a product to the cart
function addToCart(productName) {
    cartItems.push(productName);
    updateCartCounter();
}

// Function to update the cart counter
function updateCartCounter() {
    const cartCounter = document.getElementById('cart-counter');
    cartCounter.textContent = cartItems.length;
}

// Function to show the cart
function showCart() {
    const cartOverlay = document.getElementById('cart-overlay');
    const cartPopup = document.getElementById('cart-popup');
    const cartItemsContainer = document.getElementById('cart-items');

    // Clear the cart items container
    cartItemsContainer.innerHTML = '';

    // Add each item to the cart items container
    cartItems.forEach((item, index) => {
        const itemRow = document.createElement('div');
        itemRow.classList.add('cart-item');
        itemRow.innerHTML =
            `<span>${item}</span>
            <img src="Pictures/remove.png" width="20" alt="Remove" onclick="removeFromCart(${index})">`;
        cartItemsContainer.appendChild(itemRow);
    });

    // Show the cart overlay and popup
    cartOverlay.style.display = 'block';
    cartPopup.style.display = 'block';
}

// Function to hide the cart
function hideCart() {
    const cartOverlay = document.getElementById('cart-overlay');
    const cartPopup = document.getElementById('cart-popup');
    cartOverlay.style.display = 'none';
    cartPopup.style.display = 'none';
}

// Function to remove a product from the cart
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartCounter();
    showCart(); // Update the cart items display
}
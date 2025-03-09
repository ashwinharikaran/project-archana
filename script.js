function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

// Select elements
const sizeSelect = document.getElementById('size');
const toppings = document.querySelectorAll('.toppings input');
const totalPriceDisplay = document.getElementById('totalPrice');

// Function to update price
function updatePrice() {
    let totalPrice
}
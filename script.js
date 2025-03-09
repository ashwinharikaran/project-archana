document.addEventListener("DOMContentLoaded", function () {
    const orderButtons = document.querySelectorAll(".order-btn");
    
    orderButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });
});
 // Shopping Cart
let cart = [];

function addToCart(name, price) {
    let product = {
        name: name,
        price: price
    };

    cart.push(product);

    document.getElementById("cart-count").innerText = cart.length;

    alert("Product added to cart successfully!");
}

// Show Cart
function showCart() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "YOUR SHOPPING CART:\n\n";
    let total = 0;

    cart.forEach(function(product, index) {
        message += (index + 1) + "- " + product.name +
        " - EGP " + product.price + "\n";

        total += product.price;
    });

    message += "\nTotal: EGP " + total;

    alert(message);
}

// Search Products
let searchInput = document.getElementById("search");

searchInput.addEventListener("input", function() {
    let searchValue = searchInput.value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {
        let productName = product.querySelector("h3")
        .innerText.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

// Contact Form
function sendMessage(event) {
    event.preventDefault();

    alert("Your message has been sent successfully!");

    event.target.reset();
}
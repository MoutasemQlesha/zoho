let currentStep = 0;
const steps = document.querySelectorAll(".step");

function nextStep() {
    steps[currentStep].classList.remove("active");
    currentStep++;
    steps[currentStep].classList.add("active");
}

function prevStep() {
    steps[currentStep].classList.remove("active");
    currentStep--;
    steps[currentStep].classList.add("active");
}

function addNewCustomer() {
    alert("Redirect to create new customer form.");
}

function submitOrder() {
    alert("Order submitted!");
}

// Simulated product load
document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById("productGrid");
    for (let i = 1; i <= 4; i++) {
        const div = document.createElement("div");
        div.innerHTML = `<p>Product ${i}</p><button onclick="addToCart('Product ${i}')">Add to Cart</button>`;
        productGrid.appendChild(div);
    }
});

function addToCart(product) {
    const cart = document.getElementById("cartSummary");
    const div = document.createElement("div");
    div.textContent = product;
    cart.appendChild(div);
}

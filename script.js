
const accessToken = "1000.0c1d1746b602aaad4648420dce46cf70.5a9ca7317104ff757ef47a79fd5b3324";

function goToStep(step) {
    document.querySelectorAll('.step').forEach((el, idx) => {
        el.style.display = (idx === step - 1) ? "block" : "none";
    });
}

function fetchCustomers() {
    fetch("https://creator.zoho.com/api/v2/hishammanager_qutteneh/sales-rep-product-catalog-and-order-management/report/Customer_Report", {
        headers: { Authorization: `Zoho-oauthtoken ${accessToken}` }
    })
    .then(response => response.json())
    .then(data => {
        const dropdown = document.getElementById("customerDropdown");
        dropdown.innerHTML = "";
        data.data.forEach(customer => {
            const opt = document.createElement("option");
            opt.value = customer.ID;
            opt.textContent = customer.Customer_Name;
            dropdown.appendChild(opt);
        });
    });
}

function fetchProducts() {
    fetch("https://creator.zoho.com/api/v2/hishammanager_qutteneh/sales-rep-product-catalog-and-order-management/report/Product_Report", {
        headers: { Authorization: `Zoho-oauthtoken ${accessToken}` }
    })
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById("productList");
        productList.innerHTML = "";
        data.data.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <p><strong>${product.Product_Name}</strong></p>
                <p>$${product.Price}</p>
                <button onclick="addToCart('${product.Product_Name}', ${product.Price})">Add to Cart</button>
            `;
            productList.appendChild(card);
        });
    });
}

let cart = [];

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);
    if (existing) existing.qty++;
    else cart.push({ name, price, qty: 1 });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const totalEl = document.getElementById("orderTotal");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const line = document.createElement("div");
        const lineTotal = (item.price * item.qty).toFixed(2);
        total += parseFloat(lineTotal);
        line.innerHTML = `${item.name} - $${item.price} x ${item.qty} = $${lineTotal}`;
        cartItems.appendChild(line);
    });
    totalEl.textContent = `$${total.toFixed(2)}`;
}

function addNewCustomer() {
    window.open("https://creator.zoho.com/appbuilder/hishammanager_qutteneh/sales-rep-product-catalog-and-order-management/form/Customer", "_blank");
}

function submitOrder() {
    alert("Order submitted. You can add actual POST logic here.");
}

window.onload = () => {
    fetchCustomers();
    fetchProducts();
};

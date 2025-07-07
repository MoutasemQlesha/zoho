
const accessToken = "1000.0c1d1746b602aaad4648420dce46cf70.5a9ca7317104ff757ef47a79fd5b3324";

function fetchCustomers() {
    fetch("https://creator.zoho.com/api/v2/hishammanager_qutteneh/sales-rep-product-catalog-and-order-management/report/Customer_Report", {
        headers: {
            "Authorization": `Zoho-oauthtoken ${accessToken}`
        }
    })
    .then(res => res.json())
    .then(data => {
        const dropdown = document.getElementById("customerDropdown");
        dropdown.innerHTML = "";
        data.data.forEach(cust => {
            const opt = document.createElement("option");
            opt.value = cust.Customer_Name;
            opt.textContent = cust.Customer_Name;
            dropdown.appendChild(opt);
        });
    })
    .catch(err => console.error("Customer API error:", err));
}

function fetchProducts() {
    fetch("https://creator.zoho.com/api/v2/hishammanager_qutteneh/sales-rep-product-catalog-and-order-management/report/Product_Report", {
        headers: {
            "Authorization": `Zoho-oauthtoken ${accessToken}`
        }
    })
    .then(res => res.json())
    .then(data => {
        const productList = document.getElementById("productList");
        productList.innerHTML = "";
        data.data.forEach(prod => {
            const div = document.createElement("div");
            div.className = "product-card";
            div.innerHTML = `
                <strong>${prod.Product_Name}</strong><br>
                $${prod.Price}<br>
                <button onclick="addToCart('${prod.Product_Name}', ${prod.Price})">Add to Cart</button>
            `;
            productList.appendChild(div);
        });
    })
    .catch(err => console.error("Product API error:", err));
}

function addNewCustomer() {
    window.open("/appbuilder/hishammanager_qutteneh/sales-rep-product-catalog-and-order-management/form/Customer_Form", "_blank");
}

function goToStep2() {
    document.getElementById("step2").style.display = "block";
    fetchProducts();
}

function addToCart(name, price) {
    alert(`Added ${name} ($${price}) to cart.`);
}

window.onload = fetchCustomers;

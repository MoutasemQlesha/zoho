document.addEventListener("DOMContentLoaded", function () {
    console.log("Injecting Script...");

    let interval = setInterval(() => {
        const productCards = document.querySelectorAll(".zc-pb-tile-container.zc-qv-custom-layout");

        if (productCards.length > 0) {
            clearInterval(interval);

            productCards.forEach((card, index) => {
                if (card.querySelector(".custom-qty-btn")) return;

                const wrapper = document.createElement("div");
                wrapper.style.textAlign = "center";
                wrapper.style.marginTop = "10px";

                const qty = document.createElement("input");
                qty.type = "number";
                qty.placeholder = "Qty";
                qty.className = "custom-qty-input";
                qty.style.padding = "4px";
                qty.style.width = "80px";
                qty.style.marginRight = "5px";

                const btn = document.createElement("button");
                btn.textContent = "Add";
                btn.className = "custom-qty-btn";
                btn.style.padding = "4px 10px";
                btn.style.cursor = "pointer";

                btn.onclick = () => {
                    const quantity = qty.value;
                    const barcode = card.querySelector("#text_1 span")?.textContent || "Unknown";
                    alert(`Barcode: ${barcode}\nQty: ${quantity}`);
                };

                wrapper.appendChild(qty);
                wrapper.appendChild(btn);
                card.appendChild(wrapper);
            });
        }
    }, 500);
});

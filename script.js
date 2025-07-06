document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll('.zcs-product-card'); // أو الكلاس الخاص بالبطاقات حسب التطبيق

    productCards.forEach(card => {
        // إنشاء input للكمية
        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.min = 1;
        quantityInput.value = 1;
        quantityInput.style.width = "60px";
        quantityInput.style.marginTop = "10px";

        // إنشاء زر الإضافة
        const addButton = document.createElement("button");
        addButton.innerText = "Add";
        addButton.style.marginLeft = "10px";

        addButton.addEventListener("click", () => {
            const quantity = quantityInput.value;
            const productName = card.querySelector("h3")?.innerText || "Unknown";
            alert(`Added ${quantity} of ${productName}`);
            // هون تقدر تستدعي أي API لإضافة المنتج للسلة
        });

        // إضافتهم للبطاقة
        const actionContainer = document.createElement("div");
        actionContainer.appendChild(quantityInput);
        actionContainer.appendChild(addButton);
        card.appendChild(actionContainer);
    });
});

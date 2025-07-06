document.addEventListener("DOMContentLoaded", function () {
    // اختيار كروت المنتجات حسب الكلاس الجديد
    const productCards = document.querySelectorAll('.zcp-col.zcp-panel-rotype-auto');

    productCards.forEach(card => {
        // إنشاء حقل إدخال للكمية
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

        // عند الضغط على الزر
        addButton.addEventListener("click", () => {
            const quantity = quantityInput.value;
            const productName = card.innerText?.split("\n")[0] || "Unknown"; // نحاول نجيب اسم المنتج
            alert(`Added ${quantity} of ${productName}`);
        });

        // تجميع العناصر في حاوية
        const actionContainer = document.createElement("div");
        actionContainer.appendChild(quantityInput);
        actionContainer.appendChild(addButton);

        // إضافة الحاوية إلى كرت المنتج
        card.appendChild(actionContainer);
    });
});

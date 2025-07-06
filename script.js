// script.js
(function() {
  // ينتظر تحمّل DOM كامل
  document.addEventListener('DOMContentLoaded', function() {
    // يختار كل “كارد” منتج
    // غيّر '.product-card' إلى السلكتور المناسب في صفحتك
    var cards = document.querySelectorAll('.product-card');
    
    cards.forEach(function(card) {
      // يمنع الإضافة المكررة لو رجعنا وحملنا الودجت مرتين
      if (card.querySelector('.custom-actions')) return;

      // إنشاء حاوية للأكشنز
      var wrapper = document.createElement('div');
      wrapper.className = 'custom-actions';
      wrapper.style.marginTop = '8px';
      
      // حقول الكمية
      var qty = document.createElement('input');
      qty.type = 'number';
      qty.min = '1';
      qty.value = '1';
      qty.className = 'quantity-input';
      qty.style.width = '60px';
      qty.style.marginRight = '6px';
      
      // زر الإضافة
      var btn = document.createElement('button');
      btn.textContent = 'Add';
      btn.className = 'add-to-cart';
      btn.style.padding = '6px 12px';
      btn.style.cursor = 'pointer';
      
      // تجميع
      wrapper.appendChild(qty);
      wrapper.appendChild(btn);
      card.appendChild(wrapper);

      // حدث الضغط
      btn.addEventListener('click', function() {
        var count = qty.value;
        // لالتقاط الـ ID أو الاسم من الـ data-attribute
        var id = card.getAttribute('data-product-id') || card.dataset.id || 'unknown';
        // هنا تحط منطق الإضافة — الآن للتجربة
        alert('Add ' + count + ' of product ' + id);
      });
    });
  });
})();


setTimeout(function () {
    alert("xxxx");
    $(".zcp-col").each(function () {
        if (!$(this).hasClass("custom-cart")) {
            $(this).addClass("custom-cart");
            $(this).append(`
                <div style="margin-top:10px">
                    <input type="number" placeholder="Qty" style="width:50px;" />
                    <button onclick="alert('Added to cart')" style="margin-left:5px;">Add</button>
                </div>
            `);
        }
    });
}, 3000);

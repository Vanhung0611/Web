$(document).ready(function() {
    for (let i = 1; i <= 65; i++) {
        $(`#expand${i}`).click(function() {
            if ($(`#tex${i}`).is(":visible")) {
                $(`#tex${i}`).hide();
            } else {
                $("[id^=tex]").hide();
                $(`#tex${i}`).show();
            }
        });
    }
});

//Phần một sản phẩm
function increment() {
    let quantity = document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) + 1;
}

function decrement() {
    let quantity = document.getElementById('quantity');
    if (quantity.value > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}

document.getElementById("addToCart").addEventListener
("click",function()
    {
        let quantityInput = document.getElementById("quantity"); // Lấy giá trị từ ô input
        let cartCount = document.getElementById("cartCount");   //Lấy giá phần tử hiển thị số lượng là CartCount (class cart-count)
        let cartItems = document.getElementById("cartItems"); // Lấy phần tủ div có id là cartItems (class là cart-noti)
        let quantity = parseInt(quantityInput.value);
        let number = parseInt(cartCount.textContent);
        let noPro = document.getElementById("No_pro");
        let Cost_all = document.getElementById("cost_all");
        yes_pro_item = document.getElementById("yes_pro_item");
        cartCount.textContent = number + quantity;
        // if (number != 0) cartItems.innerHTML ="";
        if (number + quantity > 0) 
        { 
            noPro.style.display = "none";  
            document.getElementById("yes_pro").style.display = "block"; 
            document.getElementById("giohang").style.display = "block";
            document.getElementById("cost_all").style.display = "block";
        }
        let img = '/CIB SHOP/Product/img/V88 xanh.png';
        let name = document.getElementById("name").textContent;
        let cost_item = document.getElementById("idcost").textContent;
        yes_pro_item.innerHTML += `<div class="add_cart">
                                <img class="add_cart_picture" src="${img}" alt="">
                                <div class="pro_title">
                                    <div style= "display: flex; justify-content: space-between;">
                                    <span class="text_title">${name}</span> <i class="fa-regular fa-circle-xmark remove-pro" style="font-size: 14px; padding-left: 10px"></i>
                                    </div>
                                    <div style="display: flex; justify-content: space-between">
                                        <p class="qua">Số lượng: ${quantity}</p>
                                        <p class="cost_item">${cost_item} ₫</p>
                                    </div>
                                </div>
                                </div>
                                `;
        var cost =  document.getElementById("cost");
        
        var cost_format = quantity*cost_item*1000 + parseInt(cost.textContent);
        cost.textContent = "";                
        cost.textContent += cost_format + " ₫";
    }
);


document.addEventListener('click', function(e) 
{ if (e.target && e.target.classList.contains('remove-pro')) 
{ 
    let productDiv = e.target.closest('.add_cart'); 
    let costItemElement = productDiv.querySelector('.cost_item'); 
    let costItemText = costItemElement.textContent; 
    let costItem = parseInt(costItemText.replace(/\D/g, '')); 
    let quaElement = productDiv.querySelector('.qua'); 
    let quaText = quaElement.textContent; let quantity = parseInt(quaText.replace(/\D/g, '')); 

    let cost = document.getElementById("cost");
    cost_format = parseInt(cost.textContent) - costItem*quantity;
    cost.textContent = "";                
    cost.textContent += cost_format + " ₫"; 
    productDiv.remove();
    cartCount.textContent -= quantity;
 }
 });

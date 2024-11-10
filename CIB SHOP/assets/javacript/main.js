/* Phần slide */
let list = document.querySelector('.slide .list');
let items = document.querySelectorAll('.slide .list .item');
let dots = document.querySelectorAll('.slide .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length -1;

next.onclick = function()
{
    if (active+1 > lengthItems)
        active = 0;
    else
        active += 1;
    reloadSlider();
}
prev.onclick = function()
{
    if (active -1 < 0)
        active = lengthItems;
    else
        active -= 1;
    reloadSlider();
}

let refreshSlide = setInterval(()=>{next.click()},5000);

function reloadSlider()
{
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slide .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach((li, key) =>
{
    li.addEventListener('click', function()
    {
        active = key;
        reloadSlider();
    })
})

/*Phần title của new product */

// Lấy tất cả các phần tử có class "new-title-link"
let new_title_links = document.querySelectorAll('.container_product-new .product-new-box .product-new-title .new-title-link');
// Thêm sự kiện click cho mỗi phần tử
new_title_links.forEach(function(link) {
    link.addEventListener('click', function() {
        // Xóa class "background" khỏi tất cả các phần tử
        new_title_links.forEach(function(link) {
            link.classList.remove('background');
        });
        // Thêm class "background" vào phần tử được click
        link.classList.add('background');
        
    });
});



/* Phần new product */

let box = document.querySelector('.container_product-new .product-new-content .product-new-content-box');
let new_item = document.querySelectorAll('.container_product-new .product-new-content .product-new-content-box .new-content-item');
let nextNew = document.getElementById('nextNew');
let prevNew = document.getElementById('prevNew');
let act = 0;

nextNew.onclick = function() 
{
    if (act < new_item.length - 5) 
        {
        act += 1;
        reloadNew();
    } 
    else blur(nextNew);
    
};

prevNew.onclick = function() 
{
    if (act > 0) 
    {
        act -= 1;
        reloadNew();
    } 
    else blur(prevNew);
    
};

function reloadNew() 
{
    let check = new_item[act].offsetLeft;
    box.style.left = -check + 'px';
    resetBlur(); 
}

function blur(button) 
{
    button.style.opacity = 0.5;
}

function resetBlur() 
{
    nextNew.style.opacity = 1;
    prevNew.style.opacity = 1;
}


 


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

/* Phần new product */
let box = document.querySelector('.container_product-new .product-new-content .product-new-content-box');
let new_item = document.querySelectorAll('.container_product-new .product-new-content .product-new-content-box .new-content-item');
let nextNew = document.getElementById('nextNew');
let prevNew = document.getElementById('prevNew');
let act = 0;

nextNew.onclick = function() {
    act += 1;
    if (act >= new_item.length) {
        act = 0; // Reset to first item if beyond last
    }
    reloadNew();
};

prevNew.onclick = function() {
    act -= 1;
    if (act < 0) {
        act = new_item.length - 1; // Go to last item if beyond first
    }
    reloadNew();
};

function reloadNew() {
    let check = new_item[act].offsetLeft;
    box.style.left = -check + 'px';
}


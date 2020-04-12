$(document).ready(function () {
    let toggle = document.querySelector('.toggleButton');
    let toggleContainer = document.querySelector('.toggleContainer');
    let monthly = true;
    let basic = document.querySelector('#basic .price h6');
    let professional = document.querySelector('#professional .price h6');
    let master = document.querySelector('#master .price h6');
    console.log(basic);
    $(toggle).click(function () {
        if (monthly == true) {
            monthly = false;
            $(toggleContainer).css('justify-content', 'flex-start');
            basic.innerHTML = '199.99';
            professional.innerHTML = '249.99';
            master.innerHTML = '399.99';
        } else {
            monthly = true;
            $(toggleContainer).css('justify-content', 'flex-end');
            basic.innerHTML = '19.99';
            professional.innerHTML = '24.99';
            master.innerHTML = '39.99';
        }
    });
});
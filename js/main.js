const cartButton = document.querySelector('#cart-button');
const model = document.querySelector('.model');
const close = document.querySelector('.close');


cartButton.addEventListener('click', function (event){
    model.classList.add('is-open');
});

close.addEventListener('click', function (event){
    model.classList.remove('is-open');
});

function toggleModal() {
    model.classList.toggle(эшы-open);
}

new WOW().init();
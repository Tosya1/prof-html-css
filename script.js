'use strict';

let header__burger = document.querySelector('.header__burger');
let main__black = document.querySelector('.main__black');
let main__close = document.querySelector('.main__close');

function toggleMenu() {
    main__black.classList.toggle('main__black-hidden');
}
header__burger.addEventListener('click', toggleMenu 
);
main__close.addEventListener('click', toggleMenu 
);


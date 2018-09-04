//Toggle menu for small screens

var nav = document.querySelector('.nav');

var overlay = document.querySelector('.overlay');

var toggleBtn = document.querySelector('.toggleMenu');


function showNav() {
    nav.classList.toggle('showItems');
    overlay.classList.toggle('showOverlay');
    
}



toggleBtn.addEventListener('click', showNav);




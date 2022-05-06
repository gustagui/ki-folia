const btn = document.querySelector('#menu-icon');
const showMenu = document.querySelector('.menu');
const body = document.querySelector('body');

btn.addEventListener('click', function(){
    if (showMenu.style.display == 'flex'){
        showMenu.style.display = 'none';
    } else {
        showMenu.style.display = 'flex'
    }
});
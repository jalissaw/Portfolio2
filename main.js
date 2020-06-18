const toggle = document.querySelector('.toggle');
const showMenu = document.querySelector('.shownav');
const aboutSect = document.querySelector('.about');
const titles = document.querySelectorAll('h2');


window.addEventListener('scroll', () =>{
    const position = aboutSect.getBoundingClientRect().top;
    const screen = window.innerHeight / 2.5;

    if (screen > position) {
        toggle.style.cursor = 'pointer'
    } else {
        toggle.style.cursor = 'auto'
    }
})


toggle.addEventListener('click', () => {
    console.log('clicked');
    showMenu.classList.toggle('open');
})  


function scrolled () {
    for (var i = 0; i < titles.length; i++) {
    const position = titles[i].getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;
        if (position < screenPosition) {
                   titles[i].classList.add('appear')
                }
    }
}

window.addEventListener('scroll', scrolled);

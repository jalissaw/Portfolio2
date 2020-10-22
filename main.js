const toggle = document.querySelector('.toggle');
const showMenu = document.querySelector('.shownav');
const aboutSect = document.querySelector('.about');
const titles = document.querySelectorAll('h2');
const showLink = document.querySelectorAll('.shownav a');

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
    showMenu.classList.toggle('open');
});


    
    for(var i = 0; i < showLink.length; i++) {
        
        showLink[i].addEventListener('click', () => {
            showMenu.classList.remove('open');
        });
    }




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


//filtered tabs

const tabs = document.querySelectorAll('[data-tab]')
const filteredTabs = document.querySelectorAll('[data-filter]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
       tabs.forEach(tab => {
           tab.classList.remove('active')
       })
       tab.classList.add('active')

       const tabFiltered = tab.dataset.tab;
      filteredTabs.forEach(filterTab => {
          filterTab.style.display = 'none'
         if(tabFiltered === filterTab.dataset.filter || tabFiltered === 'all') {
                filterTab.classList.add('transition');
                filterTab.style.display = 'flex';
          
         }
      })
    })
});

// filteredTabs.forEach(filteredTab => {
//     if(filteredTab === 'react') {
//         console.log('react')
//     }
// })
const toggle = document.querySelector('.toggle');
const hamburger = document.querySelector('.hamburger');
const showMenu = document.querySelector('.shownav');
const aboutSect = document.querySelector('.about');
const titles = document.querySelectorAll('h2');
const showLink = document.querySelectorAll('.shownav a');


// toggle window open and close

toggle.addEventListener('click', () => {
    showMenu.classList.toggle('open');
});

    for(var i = 0; i < showLink.length; i++) {
        
        showLink[i].addEventListener('click', () => {
            showMenu.classList.remove('open');
        });
    }



//transition titles in
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
        //get attr of li
      const tabFiltered = tab.dataset.tab;
      //display each tab on click of li
      filteredTabs.forEach(filterTab => {
          filterTab.style.display = 'none'
         if(tabFiltered === filterTab.dataset.filter || tabFiltered === 'all') {
                filterTab.classList.add('transition');
                filterTab.style.display = 'flex';
          
         }
      })
    })
});

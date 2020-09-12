const form = document.querySelector('.form')
const button = document.querySelector('.submit');
const errorMessage = document.querySelector('.errorMessage');

const xhr = new XMLHttpRequest();

xhr.onload = () => {
    form.addEventListener('submit', () => {
        const email = document.querySelector('.email').value;
        const name = document.querySelector('.formname').value;
        event.preventDefault();
        if(name === '' || email === '') {
            errorMessage.innerHTML = 'Name And Email Required';
            
        } else {
            errorMessage.innerHTML = 'Success! I will be in touch shortly.'
            setTimeout(()=>form.submit(), 1500);
        }

    });
}

xhr.open('POST', '/', true)
xhr.send()
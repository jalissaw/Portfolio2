const form = document.querySelector('.form')
const button = document.querySelector('.submit');
const errorMessage = document.querySelector('.errorMessage');

const xhr = new XMLHttpRequest();

xhr.onload = () => {
    button.addEventListener('click', () => {
        const email = document.querySelector('.email').value;
        const name = document.querySelector('.formname').value;
        if(name === '' || email === '') {
            errorMessage.innerHTML = 'Name And Email Required';
            event.preventDefault();
        } else {
            errorMessage.innerHTML = 'Success! I will be in touch shortly.'
        }

    });
}

xhr.open('POST', '/userdata', true)
xhr.send()
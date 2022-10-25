import Form from './form.js'

//switching forms
const linkSignInEl = document.querySelector('#link_sign-in')
const formSignInEl = document.querySelector('.form_sign-in')
const linkSignUpEl = document.querySelector('#link_sign-up')
const formSignUpEl = document.querySelector('.form_sign-up')
// linkSignInEl.addEventListener('click', change)
// linkSignUpEl.addEventListener('click', change)
// function change() {
//     formSignInEl.classList.toggle('not_active')
//     formSignUpEl.classList.toggle('not_active')
// }

//sign up
let regexpEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,7}$/i
let regexpPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}/
let regexpPhone = /^[\d\+][\d(\)\ -]{7,14}\d$/
let regexpCountry = /^([A-Za-zА-Яа-я\.]{3,25})$/
const modalEl = document.querySelector('.modal')
const modalContentEl = document.querySelector('.modal_content')
const modalTextEl = document.querySelector('#modal-text')
const emailSignUp = document.querySelector('#input_sign-up_email')
const passwordSignUp = document.querySelector('#input_sign-up_password')
const phoneSignUp = document.querySelector('#input_sign-up_phone')
const countrySignUp = document.querySelector('#input_sign-up_country')
document.querySelector('#button_sign-up').onclick = registration
function registration() {
    if (regexpEmail.test(emailSignUp.value) && regexpPassword.test(passwordSignUp.value) && regexpPhone.test(phoneSignUp.value) && regexpCountry.test(countrySignUp.value)) {
        window.localStorage.setItem('login', JSON.stringify(emailSignUp.value))
        window.localStorage.setItem('password', JSON.stringify(passwordSignUp.value))
        window.localStorage.setItem('phone', JSON.stringify(phoneSignUp.value))
        window.localStorage.setItem('country', JSON.stringify(countrySignUp.value))
        modalEl.style.display = 'block'
        modalTextEl.innerText = 'Are you registred!'
        console.log(true)
    } else {
        modalEl.style.display = 'block'
        modalTextEl.innerText = 'Incorrect data.\nTry again.'
        console.log(false)
    }
}

//sign in
document.querySelector('#button_sign-in').onclick = authorization
function authorization() {
    let emailStorage = window.localStorage.getItem('login')
    let passwordStorage = window.localStorage.getItem('password')
    let emailSignIn = document.querySelector('#input_sign-in_email')
    let passwordSignIn = document.querySelector('#input_sign-in_password')
        if (JSON.parse(emailStorage) === emailSignIn.value && JSON.parse(passwordStorage) === passwordSignIn.value) {
            modalEl.style.display = 'block'
            modalTextEl.innerText = 'Sign in successful!'
            console.log(true)
        } else {
            modalEl.style.display = 'block'
            modalTextEl.innerText = 'Incorrect data.\nTry again.'
            console.log(false)
        }
}

//close modal window
window.onclick = function (event) {
    if (event.target == modalEl || event.target == modalTextEl || event.target == modalContentEl) {
        modalEl.style.display = 'none'
    }
}

const form2 = new Form(linkSignInEl, linkSignUpEl, formSignInEl, formSignUpEl)
form2.start()
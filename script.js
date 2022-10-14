//переключение вход/регистрация
const linkSignInEl = document.querySelector('#link_sign-in')
const formSignInEl = document.querySelector('.form_sign-in')
const linkSignUpEl = document.querySelector('#link_sign-up')
const formSignUpEl = document.querySelector('.form_sign-up')
linkSignInEl.addEventListener('click', change)
linkSignUpEl.addEventListener('click', change)
function change() {
    formSignInEl.classList.toggle('not_active')
    formSignUpEl.classList.toggle('not_active')
}

//sign up
let regexpEmail = /^([a-zA-Z0-9_\-\.]{3,})+\@([a-zA-Z0-9_\-\.]{3,10})+\.([a-zA-Z]{2,5})$/
let regexpPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
// let regexpPhone = /^()$/
const modalEl = document.querySelector('.modal')
const modalContentEl = document.querySelector('.modal_content')
const modalTextEl = document.querySelector('#modal-text')
const emailSignUp = document.querySelector('#input_sign-up_email')
const passwordSignUp = document.querySelector('#input_sign-up_password')
const phoneSignUp = document.querySelector('#input_sign-up_phone') //PHONE
const countrySignUp = document.querySelector('#input_sign-up_country') //COUNTRY
document.querySelector('#button_sign-up').onclick = registration
function registration() {
    if (regexpEmail.test(emailSignUp.value) && regexpPassword.test(passwordSignUp.value)) {
        window.localStorage.setItem('login', JSON.stringify(emailSignUp.value))
        window.localStorage.setItem('password', JSON.stringify(passwordSignUp.value))
            console.log("true")
        } else {
            console.log("false")
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
            modalTextEl.innerText = 'Вход выполнен успешно!'
            console.log("true")
        } else {
            modalEl.style.display = 'block'
            modalTextEl.innerText = 'Не верные данные.\nПопробуйте снова.'
            console.log("false")
        }
}

//close modal window
window.onclick = function (event) {
    if (event.target == modalEl || event.target == modalTextEl || event.target == modalContentEl) {
        modalEl.style.display = 'none'
    }
}
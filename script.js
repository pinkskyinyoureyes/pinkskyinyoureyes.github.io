//переключение вход/регистрация
const linkSignInEl = document.querySelector('#link_sign-in')
const formSignInEl = document.querySelector('.form_sign-in')
const linkSignUpEl = document.querySelector('#link_sign-up')
const formSignUpEl = document.querySelector('.form_sign-up')

const modalText = document.querySelector('#modal-text')

linkSignInEl.addEventListener('click', change)
linkSignUpEl.addEventListener('click', change)

function change() {
    formSignInEl.classList.toggle('not_active')
    formSignUpEl.classList.toggle('not_active')
}

//регистрация sign up
let regexpEmail = /^([a-zA-Z0-9_\-\.]{3,})+\@([a-zA-Z0-9_\-\.]{3,10})+\.([a-zA-Z]{2,5})$/
let regexpPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
const emailSignUp = document.querySelector('#input_sign-up_email')
const passwordSignUp = document.querySelector('#input_sign-up_password')
if (regexpEmail.test(emailSignUp.value) && regexpPassword.test(passwordSignUp.value)) {
    console.log("true")
} else {
    console.log("false")
}

document.querySelector('#button_sign-up').onclick = registration
function registration() {
    window.localStorage.setItem('login', JSON.stringify(emailSignUp.value))
    window.localStorage.setItem('password', JSON.stringify(passwordSignUp.value))
}

//авторизация sign in
document.querySelector('#button_sign-in').onclick = authorization
function authorization() {
    let emailStorage = window.localStorage.getItem('login')
    let passwordStorage = window.localStorage.getItem('password')
    let emailSignIn = document.querySelector('#input_sign-in_email')
    let passwordSignIn = document.querySelector('#input_sign-in_password')
    if (JSON.parse(emailStorage) === emailSignIn.value && JSON.parse(passwordStorage) === passwordSignIn.value) {
        // console.log('Успешно')
        modal.style.display = 'block'
        modalText.innerText = 'Вход выполнен успешно!'
    } else {
        modal.style.display = 'block'
        modalText.innerText = 'Не верные данные. Попробуйте снова.'
        // console.log('Не успешно')
    }
}

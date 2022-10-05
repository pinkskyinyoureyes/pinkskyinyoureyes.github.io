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

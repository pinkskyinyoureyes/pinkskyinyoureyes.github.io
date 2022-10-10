//переключение вход/регистрация
const linkSignInEl = document.querySelector('#link_sign-in') //id
const formSignInEl = document.querySelector('.form_sign-in')
const linkSignUpEl = document.querySelector('#link_sign-up') //id
const formSignUpEl = document.querySelector('.form_sign-up')

const modalText = document.querySelector('#modal-text') //id

linkSignInEl.addEventListener('click', change)
linkSignUpEl.addEventListener('click', change)

function change() {
    formSignInEl.classList.toggle('not_active')
    formSignUpEl.classList.toggle('not_active')
}

//регистрация
document.querySelector('#button_sign-up').onclick = registration
function registration() {
    let emailSignUp = document.querySelector('#input_sign-up_email') //id
    let passwordSignUp = document.querySelector('#input_sign-up_password') //id
    window.localStorage.setItem('login', JSON.stringify(emailSignUp.value))
    window.localStorage.setItem('password', JSON.stringify(passwordSignUp.value))
}

//авторизация
document.querySelector('#button_sign-in').onclick = authorization //id
function authorization() {
    let emailStorage = window.localStorage.getItem('login')
    let passwordStorage = window.localStorage.getItem('password')
    let emailSignIn = document.querySelector('#input_sign-in_email') //id
    let passwordSignIn = document.querySelector('#input_sign-in_password') //id
    if (JSON.parse(emailStorage) === emailSignIn.value && JSON.parse(passwordStorage) === passwordSignIn.value) {
        console.log('Успешно')
        modal.style.display = 'block'
        modalText.innerText = 'Вход выполнен успешно!'
    } else {
        modal.style.display = 'block'
        modalText.innerText = 'Не верные данные. Попробуйте снова.'
        console.log('Не успешно')
    }
}

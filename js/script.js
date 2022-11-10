import Form from './form.js'



//switching forms
const linkSignInEl = document.querySelector('#link_sign-in')
const formSignInEl = document.querySelector('.form_sign-in')
const linkSignUpEl = document.querySelector('#link_sign-up')
const formSignUpEl = document.querySelector('.form_sign-up')
const usersTable = document.querySelector('#users_table') //NEW
const usersCell = document.querySelector('#cell__users') //NEW

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
        addUsersToLocalStorage() //NEW
        modalEl.style.display = 'block'
        usersTable.style.display = 'block' //NEW
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
const emailSignIn = document.querySelector('#input_sign-in_email')
const passwordSignIn = document.querySelector('#input_sign-in_password')
function authorization() {
    let emailStorage = localStorage.getItem('login')
    let passwordStorage = localStorage.getItem('password')
    let phoneStorage = localStorage.getItem('phone') //NEW
    let countryStorage = localStorage.getItem('country') //NEW
        if (JSON.parse(emailStorage) === emailSignIn.value && JSON.parse(passwordStorage) === passwordSignIn.value) {
            modalEl.style.display = 'block'
            usersTable.style.display = 'block' //NEW
            usersCell.emailStorage
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

const formOptions = {
    input: {
        signIn: { email: emailSignIn, password: passwordSignIn },
        signUp: { email: emailSignUp, password: passwordSignUp, phone: phoneSignUp, city: countrySignUp }
    },
    forms: { signIn: formSignInEl, signUp: formSignUpEl },
    regExp: { email: regexpEmail, password: regexpPassword, phone: regexpPhone, city: regexpCountry },
    modal: { container: modalEl, text: modalTextEl },
    links: { signIn: linkSignInEl, signUp: linkSignUpEl }
}

const form2 = new Form(formOptions)
form2.start()

//get and add users to local storage
function getUsersFromLocalStorage() {
    return JSON.parse(localStorage.getItem('users') || '[]')
}

function addUsersToLocalStorage() {
    const userData = {
        userEmail: emailSignUp.value,
        userPassword: passwordSignUp.value,
        userPhone: phoneSignUp.value,
        userCountry: countrySignUp.value
    }
    const allUsers = getUsersFromLocalStorage()
    allUsers.push(userData)
    localStorage.setItem('users', JSON.stringify(allUsers))
}

// let table = document.createElement('table')
// let thead = document.createElement('thead')
// let tbody = document.createElement('tbody')

// table.appendChild(thead)
// table.appendChild(tbody)

// let row_1 = document.createElement('tr')
// let heading_1 = document.createElement('th')
// heading_1.innerHTML = '№'
// let heading_2 = document.createElement('th')
// heading_2.innerHTML = 'User'
// let heading_3 = document.createElement('th')
// heading_3.innerHTML = 'Actions'

// let row_2 = document.createElement('tr')
// let row_2_data_1 = document.createElement('th')
// row_2_data_1.innerHTML = ''
// let row_2_data_2 = document.createElement('th')
// row_2_data_2.innerHTML = ''
// let row_2_data_3 = document.createElement('th')
// row_2_data_3.innerHTML = ''

// row_1.appendChild(heading_1)
// row_1.appendChild(heading_2)
// row_1.appendChild(heading_3)
// thead.appendChild(row_1)
// row_2.appendChild(row_2_data_1)
// row_2.appendChild(row_2_data_2)
// row_2.appendChild(row_2_data_3)
// tbody.appendChild(row_2)

// document.getElementById('body').appendChild(table)
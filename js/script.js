import Form from './form.js'



//switching forms
const linkSignInEl = document.querySelector('#link_sign-in')
const formSignInEl = document.querySelector('.form_sign-in')
const linkSignUpEl = document.querySelector('#link_sign-up')
const formSignUpEl = document.querySelector('.form_sign-up')
const usersTable = document.querySelector('#users_table')

let regexpEmail = /([A-Za-z\.]{2,20})+\@([A-Za-z\.]{2,20})/
    // /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,7}$/i
let regexpPassword = /([A-Za-z\.]{2,20})/
    // /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}/
let regexpPhone = /([A-Za-z\.]{2,20})/
    // /^[\d\+][\d(\)\ -]{7,14}\d$/
let regexpCountry = /([A-Za-z\.]{2,20})/
    // /^([A-Za-zА-Яа-я\.]{3,25})$/
const modalEl = document.querySelector('.modal')
const modalContentEl = document.querySelector('.modal_content')
const modalTextEl = document.querySelector('#modal_text')
const emailSignUp = document.querySelector('#input_sign-up_email')
const passwordSignUp = document.querySelector('#input_sign-up_password')
const phoneSignUp = document.querySelector('#input_sign-up_phone')
const countrySignUp = document.querySelector('#input_sign-up_country')

//sign up
document.querySelector('#button_sign-up').onclick = registration
function registration() {
    if (regexpEmail.test(emailSignUp.value) && regexpPassword.test(passwordSignUp.value) && regexpPhone.test(phoneSignUp.value) && regexpCountry.test(countrySignUp.value)) {
        addUsersToLocalStorage()
        modalEl.style.display = 'block'
        usersTable.style.display = 'block'
        modalTextEl.innerText = 'Are you registred!'
        showUsersFromLocalStorage()
        tableShell.addEventListener('click', (event) => showUsersData(event))
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
    let usersFromLocalStorage = JSON.parse(localStorage.getItem('users'))
    let findKey = usersFromLocalStorage.find(elem => elem.Email === emailSignIn.value && elem.Password === passwordSignIn.value)
        if (findKey) {
            modalEl.style.display = 'block'
            usersTable.style.display = 'block'
            modalTextEl.innerText = 'Sign in successful!'
            showUsersFromLocalStorage()
            tableShell.addEventListener('click', (event) => showUsersData(event))
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
        Email: emailSignUp.value,
        Password: passwordSignUp.value,
        Phone: phoneSignUp.value,
        Country: countrySignUp.value
    }
    const allUsers = getUsersFromLocalStorage()
    allUsers.push(userData)
    localStorage.setItem('users', JSON.stringify(allUsers))
}

// create users table
function addCell(usernumber, useremail) {
    const newCell = document.querySelector('.users_table_body')
        return newCell.insertAdjacentHTML('afterbegin', `
            <tr>
                <th class="number">${usernumber}</th>
                <th class="users" data-table-users>${useremail}</th>
                <th class="buttons">
                    <button type="button" class="table__button_view" data-table-btn-view='${useremail}'>View</button>
                    <button type="button" class="table__button_edit" data-table-btn-edit='${useremail}'>Edit</button>
                    <button type="button" class="table__button_delete" data-table-btn-delete='${useremail}'>Delete</button>
                </th>
            </tr>
        `)
}

//show user number and email
function showUsersFromLocalStorage() {
    let userNumber = 1
    const getArrayFromLocalStorage = JSON.parse(localStorage.getItem('users'))
    for (let i = 0; i < getArrayFromLocalStorage.length; i++) {
        const getUserEmail = getArrayFromLocalStorage[i].Email
        addCell(userNumber, getUserEmail)
        userNumber++
        console.log(userNumber)
    }
}

const tableShell = document.querySelector('.wrapper')
const tableNumberUser = document.querySelectorAll('.number')
const tableUsersCell = document.querySelectorAll('[data-table-users]')
const tableButtonView = document.querySelectorAll('[data-table-btn-view]')
const tableButtonEdit = document.querySelectorAll('[data-table-btn-edit]')
const tableButtonDelete = document.querySelectorAll('[data-table-btn-delete]')

function createModalUsersData(email, password, phone, country) {
    const addElementsToModal = document.querySelector('.modal_content')
        return addElementsToModal.insertAdjacentHTML('afterbegin', `
            <span id="modal-text__user-email">Email: ${email}</span>
            <span id="modal-text__user-password">Password: ${password}</span>
            <span id="modal-text__user-phone">Phone: ${phone}</span>
            <span id="modal-text__user-country">Country: ${country}</span>
        `)
}

function showUsersData(event) {
    const getArrayFromLocalStorage = JSON.parse(localStorage.getItem('users'))
    const tableUserEmail = event.target.dataset.tableBtnView
    const findItemInLocalStorage = getArrayFromLocalStorage.find(element => element.Email === tableUserEmail)
    console.log(findItemInLocalStorage)
    modalEl.style.display = 'block'
    modalTextEl.innerText = Object.entries(findItemInLocalStorage).join('\n').replaceAll(',', ': ')
}

function editUsersData(event) {
    const getArrayFromLocalStorage = JSON.parse(localStorage.getItem('users'))
    const tableUserEmail = event.target.dataset.tableBtnEdit
    
}
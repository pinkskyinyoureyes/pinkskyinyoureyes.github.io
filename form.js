import { linkSignInEl, linkSignUpEl, formSignInEl, formSignUpEl } from './script.js'

class form {
    constructor(link1, link2, form1, form2) {
        this.linkSignIn = link1
        this.linkSignUp = link2
        this.formSignIn = form1
        this.formSignUp = form2
    }
    change() {
        this.formSignIn.classList.toggle('not_active')
        this.formSignUp.classList.toggle('not_active')
    }
    start() {
        this.linkSignIn.addEventListener('click',() => this.change())
        this.linkSignUp.addEventListener('click',() => this.change())
    }
}

const form2 = new form(linkSignInEl, linkSignUpEl, formSignInEl, formSignUpEl)
form2.start()

export default form

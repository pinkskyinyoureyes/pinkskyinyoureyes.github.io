class Form {
    constructor(options) {
        this.input = options.input
        this.forms = options.forms
        this.regExp = options.regExp
        this.modal = options.modal
        this.links = options.links
    }
    change() {
        this.forms.signIn.classList.toggle('not_active')
        this.forms.signUp.classList.toggle('not_active')
    }
    start() {
        this.links.signIn.addEventListener('click',() => this.change())
        this.links.signUp.addEventListener('click',() => this.change())
    }
    registration() {
        if (this.regExp.email.test(this.input.signUp.email.value) && this.regExp.email.password.test(this.input.signUp.password.value) && this.regExp.phone.test(this.input.signUp.phone.value) && this.regExp.city.test(this.input.signUp.city.value)) {
            window.localStorage.setItem('login', JSON.stringify(this.input.signUp.email.value))
            window.localStorage.setItem('password', JSON.stringify(this.input.signUp.password.value))
            window.localStorage.setItem('phone', JSON.stringify(this.input.signUp.phone.value))
            window.localStorage.setItem('country', JSON.stringify(this.input.signUp.city.value))
            this.modal.container.style.display = 'block'
            this.modal.text.innerText = 'Are you registred!'
            console.log(true)
        } else {
            this.modal.container.style.display = 'block'
            this.modal.text.innerText = 'Incorrect data.\nTry again.'
            console.log(false)
        }
    }
    authorization() {
        let emailStorage = window.localStorage.getItem('login')
        let passwordStorage = window.localStorage.getItem('password')
            if (JSON.parse(emailStorage) === this.input.signIn.email.value && JSON.parse(passwordStorage) === this.input.signIn.password.value) {
                this.modal.container.style.display = 'block'
                this.modal.text.innerText = 'Sign in successful!'
                console.log(true)
            } else {
                this.modal.container.style.display = 'block'
                this.modal.text.innerText = 'Incorrect data.\nTry again.'
                console.log(false)
            }
    }
}

export default Form
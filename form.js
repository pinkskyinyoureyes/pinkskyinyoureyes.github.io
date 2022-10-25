class Form {
    constructor(a, b, c, d) {
        this.link1 = a
        this.link2 = b
        this.form1 = c
        this.form2 = d
    }
    change() {
        this.form1.classList.toggle('not_active')
        this.form2.classList.toggle('not_active')
    }
    start() {
        this.link1.addEventListener('click',() => this.change())
        this.link2.addEventListener('click',() => this.change())
    }
}

export default Form
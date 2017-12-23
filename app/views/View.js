class View {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }

    update(model) {
        this._element.innerHTML = this.template(model);
    }

    template() {
        throw new Error('You need to implement the template method');
    }
}
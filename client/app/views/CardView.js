class CardView {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }

    update(model) {
        this._element.innerHTML = this.template(model);
    }

    template(model) {
        
        return `
        <ul>
            ${model.paraCard().map(card =>
            `
            <li>
                <div class="card">
                    <div class="card-title">${card.title}</div>
                    <div class="card-img"><img src="${card.url}"></div>
                    <div class="card-subtitle">${card.subtitle}</div>
                </div>
            </li>
            `
            ).join('')}
        </ul>
        `;
    }
}
class CardView extends View {
    template(model) {    
        return `
        <ul>
            ${model.cards.map(card =>
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
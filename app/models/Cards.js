class Cards {
    constructor() {
        this._cards = [];
    }

    add(card) {
        this._cards.push(card);
    }

    get cards() {
        return [].concat(this._cards);
    }
}
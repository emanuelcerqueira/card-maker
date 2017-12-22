class Cards {
    constructor() {
        this._cards = [];
    }

    add(card) {
        this._cards.push(card);
    }

    array() {
        return [].concat(this._cards);
    }
}
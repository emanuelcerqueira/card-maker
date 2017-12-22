class Cards {
    constructor() {
        this._cards = [];
    }

    add(card) {
        this._cards.push(card);
    }

    paraCard() {
        return [].concat(this._cards);
    }
}
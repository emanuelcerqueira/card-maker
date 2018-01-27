class CardController {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputTitle = $('#title');
        this._inputUrl = $('#url');
        this._inputSubtitle = $('#subtitle');
        this._cards = new Cards();
        this._cardsView = new CardView('#cards');
        this._cardsView.update(this._cards);
    }

    add(event){
        event.preventDefault();
        this._cards.add(this._createCard());
        this._cardsView.update(this._cards);
        this._resetForm();
    }
    
    _createCard() {
        return new Card(
            this._inputTitle.value,
            this._inputUrl.value,
            this._inputSubtitle.value
        );
    }

    _resetForm() {
        this._inputTitle.value = '';
        this._inputUrl.value = '';
        this._inputSubtitle.value = '';
        this._inputTitle.focus();
    }
}
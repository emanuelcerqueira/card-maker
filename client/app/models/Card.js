class Card {
    constructor(title, url, subtitle) {
        this._title = title;
        this._url = url;
        this._subtitle = subtitle;
        Object.freeze();
    }

    get title(){
        return this._title;
    }

    get url(){
        return this._url;
    }

    get subtitle(){
        return this._subtitle;
    }
}
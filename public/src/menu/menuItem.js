'use strict';

class MenuItem {
    constructor(title, sref, icon) {
        this._title = title;
        this._sref = sref;
        this._icon = icon;
    }
    get title() { return this._title; }
    get sref() { return this._sref; }
    get icon() { return this._icon; }
}

export default MenuItem;
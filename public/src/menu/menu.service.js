'use strict';

class MenuService {
    constructor() {
        this._items = [];
    }

    addItem(item) {
        this._items.push(item);
    }

    get items() {
        return this._items;
    }
}

export default MenuService;


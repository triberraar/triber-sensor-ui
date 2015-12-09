'use strict';

import angular from 'angular';

class MenuService {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }
}

export default MenuService;


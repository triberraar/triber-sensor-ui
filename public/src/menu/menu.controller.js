'use strict';

export default class TriberMenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }

    getMenuItems() {
        return this.menuService.getItems();
    }
}

TriberMenuController.$inject = ['menuService'];
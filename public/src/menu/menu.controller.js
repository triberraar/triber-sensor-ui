'use strict';

export default class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }

    get menuItems() {
        return this.menuService.items;
    }
}

MenuController.$inject = ['menuService'];
'use strict';

export default class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }

    getMenuItems() {
        return this.menuService.getItems();
    }
}

MenuController.$inject = ['menuService'];
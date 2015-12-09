'use strict';

export default class TriberMenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }

    getMenuItems() {
        console.log('sdf ' + this.menuService.getItems().length);
        return this.menuService.getItems();
    }
}

TriberMenuController.$inject = ['menuService'];
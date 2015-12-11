'use strict';

import TriberMenuController from './menu.controller.js';

const MENU_ITEMS = 'menuItems';
const menuServiceSpy = {
    getItems: function() {
        return MENU_ITEMS;
    }
};

describe('menu.controller', () => {
    describe('constructor', () => {
        it('should construct correctly', function() {
            let controller = new TriberMenuController(menuServiceSpy);

            expect(controller.menuService).toEqual(menuServiceSpy);
        });
    });

    describe('getMenuItems', () => {
        it('should return all menuItems', () => {
            let controller = new TriberMenuController(menuServiceSpy);

            expect(controller.getMenuItems()).toEqual(MENU_ITEMS);
        });

    });
});
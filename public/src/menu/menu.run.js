'use strict';

import MenuItem from './menuItem.js';

function menuRun(menuService) {
    menuService.addItem(new MenuItem('Dashboard', 'fa fa-desktop fa-2x'));
    menuService.addItem(new MenuItem('Devices', 'fa fa-desktop fa-2x'));
    menuService.addItem(new MenuItem('Units'));
    menuService.addItem(new MenuItem('Types'));
}

menuRun.$inject = ['menuService'];

export default menuRun;
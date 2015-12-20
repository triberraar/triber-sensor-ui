'use strict';

import angular from 'angular';
import MenuService from './menu.service.js';
import MenuController from './menu.controller.js';
import triberMenu from './menu.directive';
import MenuItem from './menuItem.js';

var menuRun  = (menuService) =>{
    menuService.addItem(new MenuItem('Dashboard', 'dashboard', 'fa fa-tachometer fa-2x'));
    menuService.addItem(new MenuItem('Devices', 'device', 'fa fa-desktop fa-2x'));
    menuService.addItem(new MenuItem('Units', 'unit'));
    menuService.addItem(new MenuItem('Types', 'type'));
};

menuRun.$inject = ['menuService'];

export default angular.module('menu', [])
    .run(menuRun)
    .controller('MenuController', MenuController)
    .service('menuService', MenuService)
    .directive('triberMenu', triberMenu)
    .name;
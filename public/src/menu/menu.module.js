'use strict';

import angular from 'angular';
import MenuService from './menu.service.js';
import MenuController from './menu.controller.js';
import triberMenu from './menu.directive';
import MenuItem from './menuItem.js';

var menuRun  = (menuService) =>{
    menuService.addItem(new MenuItem('Dashboard', 'fa fa-tachometer fa-2x'));
    menuService.addItem(new MenuItem('Devices', 'fa fa-desktop fa-2x'));
    menuService.addItem(new MenuItem('Units'));
    menuService.addItem(new MenuItem('Types'));
};

menuRun.$inject = ['menuService'];

export default angular.module('menu', [])
    .run(menuRun)
    .controller('menuController', MenuController)
    .service('menuService', MenuService)
    .directive('triberMenu', triberMenu)
    .name;
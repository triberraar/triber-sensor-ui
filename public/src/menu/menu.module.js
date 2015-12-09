'use strict';

import angular from 'angular';
import MenuService from './menu.service.js';
import MenuController from './menu.controller.js';
import triberMenu from './menu.directive';
import menuRun from './menu.run';

export default angular.module('menu', [])
    .run(menuRun)
    .controller('menuController', MenuController)
    .service('menuService', MenuService)
    .directive('triberMenu', triberMenu)
    .name;
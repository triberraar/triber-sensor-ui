'use strict';

import template from './menu.html';
import MenuController from './menu.controller.js';

var triberMenu = () =>
{
    return {
        restrict:'E',
        template,
        controller: 'menuController',
        controllerAs: 'menuController'
    };
};

export default triberMenu;
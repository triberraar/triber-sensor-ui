'use strict';

import MenuController from './menu.controller.js';

var triberMenu = () =>
{
    return {
        restrict:'E',
        template: require('./menu.html'),
        controller: 'menuController',
        controllerAs: 'menuController'
    };
};

export default triberMenu;
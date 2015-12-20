'use strict';

import template from './menu.html';

var triberMenu = () =>
{
    return {
        restrict:'E',
        template,
        controller: 'MenuController',
        controllerAs: 'menuController'
    };
};

export default triberMenu;
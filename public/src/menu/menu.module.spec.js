'use strict';

import menuModule from './menu.module';
import MenuItem from './menuItem';
import MenuService from './menu.service';
import angular from 'angular';

describe('menu.module', () => {
    var $controller, ctrl, menuService;

    beforeEach(angular.mock.module(menuModule));

    beforeEach(angular.mock.inject(function(_$controller_, _menuService_) {
        $controller = _$controller_;
        menuService = _menuService_;
    }));

    let constructController = function() {
        return $controller('TriberMenuController', {menuService: menuService});
    };

    describe('run block', () => {
        it('should initialize menuService', () => {
            expect(menuService.getItems().length).toEqual(4);
            expect(menuService.getItems()[0]).toEqual(new MenuItem('Dashboard', 'fa fa-tachometer fa-2x'));
            expect(menuService.getItems()[1]).toEqual(new MenuItem('Devices', 'fa fa-desktop fa-2x'));
            expect(menuService.getItems()[2]).toEqual(new MenuItem('Units'));
            expect(menuService.getItems()[3]).toEqual(new MenuItem('Types'));

        });
    });
});

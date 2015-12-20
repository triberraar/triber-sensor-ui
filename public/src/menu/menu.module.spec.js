'use strict';

import menuModule from './menu.module';
import MenuItem from './menuItem';
import MenuService from './menu.service';
import angular from 'angular';
import triberMenu from './menu.directive';
import template from './menu.html';
import MenuController from './menu.controller.js';

describe('menu.module', () => {

    beforeEach(angular.mock.module(menuModule));

    describe('menuItem', function() {
        const TITLE = 'Title';
        const SREF = 'srf'
        const ICON = 'icon class';

        it('should be able to construct a menuItem', () => {
            let menuItem = new MenuItem(TITLE, SREF, ICON);

            expect(menuItem.title).toEqual(TITLE);
            expect(menuItem.icon).toEqual(ICON);
            expect(menuItem.sref).toEqual(SREF);
        });

        it('should be able to construct a menuItem without icon', () => {
            let menuItem = new MenuItem(TITLE, SREF);

            expect(menuItem.title).toEqual(TITLE);
            expect(menuItem.sref).toEqual(SREF);
            expect(menuItem.icon).toBeUndefined();
        });
    });

    describe('MenuService', () => {

        it('angular can find the service', function() {
            let injectedMenuService;
            angular.mock.inject(function(_menuService_) {
                injectedMenuService = _menuService_;
            });

            expect(injectedMenuService).toBeDefined();
        });

        describe('constructor', () => {
            it('should initialize an empty menuitems list', () =>{
                let menuService = new MenuService();

                expect(menuService.items.length).toEqual(0);
            });
        });

        describe('addItem', () => {
            it('should add an item', () => {
                const ITEM = 'item';
                let menuService = new MenuService();

                menuService.addItem(ITEM);

                expect(menuService.items.length).toEqual(1);
                expect(menuService.items[0]).toEqual(ITEM);
            });
        });

        describe('getItems', () => {
            it('should get all items', () => {
                const ITEM = 'item';
                let menuService = new MenuService();

                menuService.addItem(ITEM);

                expect(menuService.getItems()).toEqual([ITEM]);
            });
        });
    });

    describe('MenuController', () => {
        const MENU_ITEMS = 'menuItems';
        const menuServiceSpy = {
            getItems: function() {
                return MENU_ITEMS;
            }
        };

        it('angular can find the controller', function() {
            let injectedMenuController;

            angular.mock.inject(function(_$controller_, _menuService_) {
                injectedMenuController = _$controller_('menuController', {menuService: _menuService_});
            });
            expect(injectedMenuController).toBeDefined();
        });
        describe('constructor', () => {
            it('should construct correctly', function() {
                let controller = new MenuController(menuServiceSpy);

                expect(controller.menuService).toEqual(menuServiceSpy);
            });
        });

        describe('getMenuItems', () => {
            it('should return all menuItems', () => {
                let controller = new MenuController(menuServiceSpy);

                expect(controller.getMenuItems()).toEqual(MENU_ITEMS);
            });

        });
    });

    describe('triberMenu (directive)', () => {
        let $compile, $rootScope;

        beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_){
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        it('angular should be able to compile the directive', () => {
           var element = $compile('<triber-menu></triber-menu>')($rootScope);

            $rootScope.$digest();
            expect(element.html()).toBeDefined();
        });

        it('should return the directive', () => {
            let triberMenuDirective = triberMenu();

            expect(triberMenuDirective.restrict).toEqual('E');
            expect(triberMenuDirective.template).toEqual(template);
            expect(triberMenuDirective.controller).toEqual('menuController');
            expect(triberMenuDirective.controllerAs).toEqual('menuController');
        });
    });

    describe('run block', () => {
        it('should initialize menuService', () => {
            let menuService;
            angular.mock.inject(function(_menuService_){
                menuService = _menuService_;
            });

            expect(menuService.getItems().length).toEqual(4);
            expect(menuService.getItems()[0]).toEqual(new MenuItem('Dashboard', 'dashboard', 'fa fa-tachometer fa-2x'));
            expect(menuService.getItems()[1]).toEqual(new MenuItem('Devices', 'device', 'fa fa-desktop fa-2x'));
            expect(menuService.getItems()[2]).toEqual(new MenuItem('Units', 'unit'));
            expect(menuService.getItems()[3]).toEqual(new MenuItem('Types', 'type'));

        });
    });

});

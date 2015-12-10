import MenuService from './menu.service';

describe('menu.service', () => {
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
'use strict';

import MenuItem from './menuItem';

const TITLE = 'Title';
const ICON = 'icon class';

describe('menuItem', function() {
    it('should be able to construct a menuItem', () => {
        let menuItem = new MenuItem(TITLE, ICON);

        expect(menuItem.title).toEqual(TITLE);
        expect(menuItem.icon).toEqual(ICON);
    });

    it('should be able to construct a menuItem without icon', () => {
        let menuItem = new MenuItem(TITLE);

        expect(menuItem.title).toEqual(TITLE);
        expect(menuItem.icon).toBeUndefined();
    });
});
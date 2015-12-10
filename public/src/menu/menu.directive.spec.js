import triberMenu from './menu.directive';
import template from './menu.html';

describe('menu.directive', () => {
   it('should return the directive', () => {
       let triberMenuDirective = triberMenu();

       expect(triberMenuDirective.restrict).toEqual('E');
       expect(triberMenuDirective.template).toEqual(template);
       expect(triberMenuDirective.controller).toEqual('menuController');
       expect(triberMenuDirective.controllerAs).toEqual('menuController');
   })
});
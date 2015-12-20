'use strict';

import template from './type.html';

export default function routes($stateProvider) {
    $stateProvider
        .state('type', {
            url: '/type',
            template: template,
            controller: 'typeController',
            controllerAs: 'typeController'
        });
}
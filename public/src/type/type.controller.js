'use strict';


import TraversonJsonHalAdapter from 'traverson-hal';
import angular from 'angular';

export default class TypeController {
    constructor(traverson, API, $log) {
        this.traverson = traverson;
        this.API = API;

        traverson
            .registerMediaType('application/hal+json',
                TraversonJsonHalAdapter);

        traverson
            .from('api/' + API.version)
            .jsonHal()
            .follow('types')

            .getResource()
            .result
            .then(function(document) {
                $log.log(angular.toJson(document));
            }, function(err){
                $log.error('boom', angular.toJson(err));
            });
    }

}

TypeController.$inject = ['traverson','API', '$log'];
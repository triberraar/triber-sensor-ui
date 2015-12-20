'use strict';

import traversonAngular from 'traverson-angular';
import TraversonJsonHalAdapter from 'traverson-hal';

export default class TypeController {
    constructor(traverson, API) {
        this.traverson = traverson;
        this.API = API;
        console.log('test');

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
               console.log(JSON.stringify(document));
            }, function(err){
                console.error('boom', JSON.stringify(err));
            });
    }

}

TypeController.$inject = ['traverson','API'];
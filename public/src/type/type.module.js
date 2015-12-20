'use strict';

import angular from 'angular';
import angularUIRouter from 'angular-ui-router';

import TypeController from './type.controller.js';
import routing from './type.routes';

export default angular.module('type', [angularUIRouter])
    .config(routing)
    .controller('typeController', TypeController)
    .name;
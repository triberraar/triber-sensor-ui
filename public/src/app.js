'use strict';

import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';
import './app.css';

import themeConfigure from './config.js';
import routeConfigure from './config.js';

import angular from 'angular';

import angularMaterial from 'angular-material';
import angularUIRouter from 'angular-ui-router';
import traversonAngular from 'traverson-angular';

import menu from './menu/menu.module.js';
import type from './type/type.module';

import packageJson from '../../package.json';

let dependencies = [
    angularMaterial,
    angularUIRouter,
    traversonAngular.name,

    menu,
    type
];

const app = angular.module('app', dependencies)
    .constant('API', {'version' : packageJson.apiVersion})
    .config(themeConfigure)
    .config(routeConfigure);

export default app;


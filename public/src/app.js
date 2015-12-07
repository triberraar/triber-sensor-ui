'use strict';

import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';
import './app.css';

import themeConfigure from './config.js';

import angular from 'angular';

import angularMaterial from 'angular-material';
import angularUIRouter from 'angular-ui-router';

let dependencies = [
    angularMaterial,
    angularUIRouter
];

const app = angular.module('app', dependencies)
    .config(themeConfigure);

export default app;


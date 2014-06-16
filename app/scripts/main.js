/* global Ember */
'use strict';
var App = Ember.Application.create();

App.Router.map(function() {
    this.resource('events');
});

App.Router.map(function() {
    this.resource('users');
});


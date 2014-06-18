/* global Ember */
'use strict';
var App = Ember.Application.create();

App.Router.map(function() {
    this.resource('events',function(){
        this.route('new');
    });
});

App.Router.map(function() {
    this.resource('users');
});

App.EventsRoute = Ember.Route.extend({
    model: function() {
        return Ember.$.getJSON('http://local.egam.io/api/event').then(function(data) {
            data.forEach(function(element, index){
                element.img = 'http://lorempixel.com/100/100/fashion/' + (index + 1)%10;
            });
            return data;
        });
    }
});

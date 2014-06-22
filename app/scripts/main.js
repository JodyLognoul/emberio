/* global Ember */
/* jshint camelcase: false */

'use strict';
var App = Ember.Application.create({
    rootElement: 'body'
});

// ROUTES
App.Router.map(function() {
    this.resource('main', { path:'/'}, function(){
        this.route('events');
    });
    this.resource('event', { path:'/event/:event_id'}, function(){
        this.route('map');
        this.route('chat');
        this.route('members');
        this.route('join');
    });

});


App.EventRoute = Ember.Route.extend({
    model: function(params) {
        return Ember.$.getJSON('http://local.egam.io/api/event/' + params.event_id).then(function(data) {
            data.img = 'http://lorempixel.com/200/200/city/' + (data.id - 1) % 10;
            data.imghost = 'http://lorempixel.com/30/30/people/' + (data.id - 1) % 10;
            return data;
        });
    }
});

App.MainEventsRoute = Ember.Route.extend({
    model: function() {
        return Ember.$.getJSON('http://local.egam.io/api/event').then(function(data) {
            data.forEach(function(element, index){
                element.img = 'http://lorempixel.com/200/200/city/' + (index + 1)%10;
                element.imghost = 'http://lorempixel.com/30/30/people/' + (index + 1)%10;
            });
            return data;
        });
    }
});

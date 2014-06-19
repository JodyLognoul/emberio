/* global Ember */
'use strict';
var App = Ember.Application.create({
    rootElement: 'body'
});

// ROUTES
App.Router.map(function() {
    this.route('events');
    this.route('event.new', { path: '/event/new'});
    this.route('event', { path: '/event/:eventId'});
});

App.Router.map(function() {
    this.resource('users');
});

App.EventRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('post', params.eventId);
    }
});

App.EventsRoute = Ember.Route.extend({
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

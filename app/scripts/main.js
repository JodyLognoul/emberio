/* global Ember */
'use strict';
var App = Ember.Application.create({
    rootElement: 'body'
});

// ROUTES

App.Router.map(function() {
    this.route('home', { path: '/events'});
    this.route('events', { path: '/'});
    this.route('event.new', { path: '/event/new'});
    this.route('event', { path: '/event/:eventId'});
    this.resource('users');
});

App.HomeRoute = Ember.Route.extend({
    beforeModel: function() {
        this.transitionTo('events');
    }
});

App.EventRoute = Ember.Route.extend({
    model: function(params) {
        return Ember.$.getJSON('http://local.egam.io/api/event/' + params.eventId).then(function(data) {
            data.img = 'http://lorempixel.com/200/200/city/' + (data.id - 1) % 10;
            data.imghost = 'http://lorempixel.com/30/30/people/' + (data.id - 1) % 10;
            return data;
        });
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

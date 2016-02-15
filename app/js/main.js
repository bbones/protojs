requirejs
		.config({
			paths : {
				'jquery' : '../lib/jquery/dist/jquery',
				'underscore' : '../lib/underscore/underscore',
				'backbone' : '../lib/backbone/backbone',
				'backbone.babysitter' : '../lib/backbone.babysitter/lib/backbone.babysitter',
				'backbone.wreqr' : '../lib/backbone.wreqr/lib/backbone.wreqr',
				'backbone.marionette' : '../lib/marionette/lib/core/backbone.marionette',
				'bootstrap' : '../lib/bootstrap/dist/js/bootstrap.js'
			},
			shim : {
				underscore : {
					exports : '_'
				},
				backbone : {
					exports : 'Backbone',
					deps : [ 'jquery', 'underscore' ]
				},
				'backbone.marionette' : {
					exports : 'Backbone.Marionette',
					deps : [ 'backbone', 'backbone.babysitter',
							'backbone.wreqr' ]
				}
			},
			deps : [ 'jquery', 'underscore' ]
		});

require([ 'jquery', 'backbone', 'backbone.marionette' ], function($, Backbone,
		Marionette) {
	"use strict";

	$(document).ready(function() {
		console.log('Document is ready.');
		console.log('jQuery: ', $);
		console.log('Backbone: ', Backbone);
		console.log('Marionette: ', Marionette);
		var ContactManager = new Marionette.Application();

		ContactManager.addRegions({
			mainRegion: "#main-region"
		});
		
		ContactManager.Contact = Backbone.Model.extend({});
		
		ContactManager.ContactView = Marionette.ItemView.extend({
			template: "#contact-template",
			events: {
				"click p": "alertPhoneNumber"
			},

			alertPhoneNumber: function(){
				alert(this.model.escape("phoneNumber"));
			}
		});

		ContactManager.on("start", function(){
			var alice = new ContactManager.Contact({
				firstName: "Alice",
				lastName: "Arten",
				phoneNumber: "555-0184"
			});

			var aliceView = new ContactManager.ContactView({
				model: alice
			});

			ContactManager.mainRegion.show(aliceView);
		});

		ContactManager.start();

	});

});
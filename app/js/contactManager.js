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

// Main Page
window.MainPage = Backbone.View.extend({
    initialize: function () {
	     this.template = _.template(html.get('main'));
	},

	events:{
		"keyup #Next":"next"
	},

	next:function(event){
		this.ChangePage(new CmvaPage());
	}
});

// CMVA Page
window.CmvaPage = Backbone.View.extend({
    initialize:function(){
	     this.template = _.template(html.get('cmva'));
	},

	events:{
		"keyup #Next":"next"
	},

	next:function(event){
		this.ChangePage(new ClubPage());
	}
});

// Club Music Page
window.ClubPage = Backbone.View.extend({
        initialize:function(){
	     this.template = _.template(html.get('clubmusic'));
	},

	events:{
		"keyup #Next":"next"
	},

	next:function(event){
		this.ChangePage(new EasyPage());
	}
});

// Easy drinking page
window.EasyPage = Backbone.View.extend({
        initialize:function(){
	     this.template = _.template(html.get('easydrinking'));
	},

	events:{
		"keyup #Next":"next"
	},

	next:function(event){
		this.ChangePage(new CheckinPage());
	}
});

// Check In Page
window.CheckinPage = Backbone.View.extend({
        initialize:function(){
	     this.template = _.template(html.get('checkin'));
	},

	events:{
		"keyup #Next":"next"
	},

	next:function(event){
		this.ChangePage(new MainPage());
	}
});

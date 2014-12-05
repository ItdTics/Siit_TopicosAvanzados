Coordinacion.Views.User = Backbone.View.extend({
	template: _.template($("#user").html()),
	el: ".profile",

	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this;
	}
});
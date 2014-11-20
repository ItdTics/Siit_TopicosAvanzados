RF.Views.ade = Backbone.View.extend({
	template: Handlebars.compile($("#ade-template").html()),
	el: "#contenido",

	render: function(modelo){
		this.$el.html( this.template(modelo.toJSON()));
		return this;
	}
});
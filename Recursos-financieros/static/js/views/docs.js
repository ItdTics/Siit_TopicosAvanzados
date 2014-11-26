RF.Views.Docs = Backbone.View.extend({
	template: Handlebars.compile($("#docs-template").html()), /* cambiar template*/
	    el: $("#contenido"),

	render: function(modelo){
		this.$el.html( this.template());
		return this;
	}
});
Docentes.Views.Index = Backbone.View.extend({
	template: _.template($("#datos_index").html()),
	el: ".contenido",
	
	initialize: function(){

	},

	render: function(modelo){
		this.$el.html( this.template(modelo.toJSON()));
		return this;
	}
});
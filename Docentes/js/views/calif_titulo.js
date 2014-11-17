Docentes.Views.Calif_titulo = Backbone.View.extend({
	template: _.template($("#calif_tpl").html()),
	el: ".contenido",
	initialize: function(){
		
	},

	render: function(){
		this.$el.html(this.template());
		return this; 
	},
});
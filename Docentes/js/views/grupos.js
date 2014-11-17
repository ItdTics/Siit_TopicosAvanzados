Docentes.Views.Grupos = Backbone.View.extend({
	template: _.template($("#grupos_tpl").html()),
	el: ".contenido",
	initialize: function(){
		
	},

	render: function(){
		this.$el.html(this.template());
		return this; 
	},
});
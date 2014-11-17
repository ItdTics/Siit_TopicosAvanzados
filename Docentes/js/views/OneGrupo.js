Docentes.Views.VistaGrupo = Backbone.View.extend({
	template: _.template($('#view_grupo').html()),
	initialize: function(){
		
	},

	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this;
	},
});
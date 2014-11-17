Docentes.Views.AlumnoLista = Backbone.View.extend({
	template: _.template($("#alumnos_lista").html()),
	el: "<tr>",
	initialize: function(){

	},

	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this; 
	},
});
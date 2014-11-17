Docentes.Views.AlumnoCaptura = Backbone.View.extend({
	template: _.template($("#tpl_alumnos_captura").html()),
	el: "<tr>",
	initialize: function(){

	},

	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this; 
	},
});
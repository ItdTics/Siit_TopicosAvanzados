Coordinacion.Views.Horarios = Backbone.View.extend({
	template: _.template($("#horarios_tpl").html()),
	el: ".contenido",
	initialize: function(){
		
	},

	render: function(){
		this.$el.html(this.template());
		return this; 
	},
});
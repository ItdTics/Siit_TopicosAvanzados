Docentes.Views.infoGrupo = Backbone.View.extend({
	template: _.template($("#tpl_a_grupo").html()),
	el: ".contenido",
	
	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this;
	}

});

Coordinacion.Views.Tabla_docs = Backbone.View.extend({
	template: _.template($("#tpl_tabla_doc").html()),
	el : ".contenido",

	render: function(){
		this.$el.html(this.template());
		return this; 
	},
});

Coordinacion.Views.Content_docs = Backbone.View.extend({
	template: _.template($("#tpl_content_docs").html()),
	className: "tpl_campo_doc",

	render: function(modelo){
		this.$el.html( this.template(modelo.toJSON()));
		return this;
	}
});
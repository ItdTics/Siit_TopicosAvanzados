Docentes.Views.Tabla_calif = Backbone.View.extend({
	template: _.template($('#tabla_grupos').html()),
	className: "tpl_seccion_tabla",
	initialize: function(){
		
	},

	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this;
	},

	events:{
		"click .tpl_seccion_tabla" : "_click",
	},

	_click: function(e){
		e.preventDefault();
		var _id = $(e.target).data("id");
		var item = allgrupos.at(_id);
		this.navigate(item.get("id_grupo"));
	},
	navigate: function(id){
		Docentes.application.navigate("calificaciones/"+id,{trigger:true});
	}
});
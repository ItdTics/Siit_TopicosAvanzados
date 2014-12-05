Coordinacion.Views.Tabla_horarios = Backbone.View.extend({
	template: _.template($('#tabla_horarios').html()),
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
		var item = allhorarios.at(_id);
		this.navigate(item.get("id_horario"));
	},
	navigate: function(id){
		Coordinacion.application.navigate("horarios/"+id,{trigger:true});
	}
});
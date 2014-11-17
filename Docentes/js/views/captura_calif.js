Docentes.Views.CapturaView = Backbone.View.extend({
	template: _.template($("#tpl_captura").html()),
	el: ".contenido",
	initialize: function(){
		
	},
	
	events:{
		"click #enviar" : "validar",
	},

	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this; 
	},

	validar: function(e){
		var error = 0;
		$(".verificar").each(function(i,elem){
			var valor = $(elem).val();
			if(valor<=100 && valor>0){
				$(elem).css("border-color","green");
			}
			else{
				 if(valor==0){
				 	$(elem).css("border-color","initial");
				 }
				 else{
					$(elem).css("border-color","red");
					error=1;
				}	
			}
		});
		if(error==1){
			alert("Valores no valados");
			return false
		}
	}
});
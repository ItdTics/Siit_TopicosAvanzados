Docentes.Views.Perfil = Backbone.View.extend({
	template: _.template($("#tpl_perfil").html()),
	el: ".contenido",
	initialize: function(){
		
	},

	render: function(){
		this.$el.html(this.template());
		return this; 
	},

	events:{
		"click #btn_confirmar" : "validar",
	},

	validar: function(e){
		var error = 0;
		var pass = $("#pass").val();
		var c_pass = $("#confirm_pass").val();
		if(pass=="" || c_pass==""){
			$(".error_pass").text("Algún campo se encuentra vacio");
			error=1;
			if(pass=="")
				$("#pass").css("border-color", "red");
			else
				$("#pass").css("border-color", "initial");
			if(c_pass=="")
				$("#confirm_pass").css("border-color", "red");
			else
				$("#confirm_pass").css("border-color", "initial");
		}else{
			if(pass != c_pass){
				$(".error_pass").text("Las contraseñas no coniciden");
				$("#pass").css("border-color", "red");
				$("#confirm_pass").css("boder-color", "red");
				error=1;
			}
		}
		if(error !=0){
			return false;
		}
	}
});
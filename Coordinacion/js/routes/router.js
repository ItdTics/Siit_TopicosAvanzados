Coordinacion.CoordinacionRouter = Backbone.Router.extend({
	
	initialize: function(){   
		this.jsonData = {},   
		allgrupos = new Coordinacion.Collections.Horarios();
		allDocs = new Coordinacion.Collections.Docs();
		Backbone.history.start();
		//Cargar los datos del usuario
		var user = new Coordinacion.Views.User();
		$(".profile").append(user.render(datos).el);	
	},
	  
	routes:{
		""						:"index",
		"horarios"				:"allHorarios",
		"horarios/:id"			:"horario",
		"perfil"				:"perfil",
		"documentos"			:"docs",
	},
	

	index: function(){
		$(".contenido").html("");
		var info = new Coordinacion.Views.Index(); 
		$(".contenido").append(info.render(datos).el);
	},

	allHorarios: function(){
		$(".contenido").html("");
		var horariosView = new Coordinacion.Views.Horarios();
		$(".contenido").append(horariosView.render().el);
		allhorarios.forEach(function(modelo){
			var allhorariosView = new Coordinacion.Views.Tabla_horarios();
				if(modelo.get("id_horarios")==2)
				$(".table_horarios_tpl").append(allhorariosView.render(modelo).el);
		});
	},
	

	horario: function(id){
		$(".contenido").html("");
		var viewHorario = new Coordinacion.Views.VistaHorario();
		var horario = allhorarios.at(id);
		$(".contenido").append(viewHorario.render(horario).el);
		lista.forEach(function(modelo){
			var grupo = new Coordinacion.ViewsGrupoLista();
			$("#tpl_tabla_lista").append(grupo.render(modelo).el);
		});
	},

	
	perfil: function(){
		$(".contenido").html("");
		var viewPerfil = new Coordinacion.Views.Perfil();
		$(".contenido").append(viewPerfil.render().el);
	},

	docs: function(){
		$(".contenido").html("");
		var tabla_docs = new Coordinacion.Views.Tabla_docs();
		$(".contenido").append(tabla_docs.render().el);
		allDocs.forEach(function(modelo){
			var doc_contenido = new Coordinacion.Views.Content_docs();
			$("#docs").append(doc_contenido.render(modelo).el);
		});

	}
});

var datos = new Coordinacion.Models.Datos();
Coordinacion.application = new Coordinacion.CoordinacionRouter();

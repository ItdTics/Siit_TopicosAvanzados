Docentes.DocentesRouter = Backbone.Router.extend({
	
	initialize: function(){   
		this.jsonData = {},   
		allgrupos = new Docentes.Collections.Grupos();
		lista = new Docentes.Collections.Lista();
		allDocs = new Docentes.Collections.Docs();
		Backbone.history.start();
		//Cargar los datos del usuario
		var user = new Docentes.Views.User();
		$(".profile").append(user.render(datos).el);	
	},
	  
	routes:{
		""						:"index",
		"grupos"				:"allGrupos",
		"grupos/:id"			:"grupo",
		"calificaciones"		:"calif", 
		"calificaciones/:id"	:"OneCalif",
		"perfil"				:"perfil",
		"documentos"			:"docs",
	},
	

	index: function(){
		$(".contenido").html("");
		var info = new Docentes.Views.Index();
		$(".contenido").append(info.render(datos).el);
	},

	allGrupos: function(){
		$(".contenido").html("");
		var gruposView = new Docentes.Views.Grupos();
		$(".contenido").append(gruposView.render().el);
		allgrupos.forEach(function(modelo){
			var allgruposView = new Docentes.Views.Tabla_grupos();
				if(modelo.get("id_profesor")==2)
				$(".table_grupos_tpl").append(allgruposView.render(modelo).el);
		});
	},
	

	grupo: function(id){
		$(".contenido").html("");
		var viewGrupo = new Docentes.Views.VistaGrupo();
		var grupo = allgrupos.at(id);
		$(".contenido").append(viewGrupo.render(grupo).el);
		lista.forEach(function(modelo){
			var alumno = new Docentes.Views.AlumnoLista();
			$("#tpl_tabla_lista").append(alumno.render(modelo).el);
		});
	},

	calif: function(){
		$(".contenido").html("");
		var CalifView = new Docentes.Views.Calif_titulo();
		$(".contenido").append(CalifView.render().el);
		allgrupos.forEach(function(modelo){
			var allgruposView = new Docentes.Views.Tabla_calif();
				if(modelo.get("id_profesor")==2)
				$(".table_grupos_tpl").append(allgruposView.render(modelo).el);
		});
	},

	OneCalif: function(id){
		$(".contenido").html("");
		var viewGrupo = new Docentes.Views.CapturaView();
		var grupo = allgrupos.at(id);
		$(".contenido").append(viewGrupo.render(grupo).el);
		lista.forEach(function(modelo){
			var alumno = new Docentes.Views.AlumnoCaptura();
			$("#tpl_capturaTabla").append(alumno.render(modelo).el);
		});

	},

	perfil: function(){
		$(".contenido").html("");
		var viewPerfil = new Docentes.Views.Perfil();
		$(".contenido").append(viewPerfil.render().el);
	},

	docs: function(){
		$(".contenido").html("");
		var tabla_docs = new Docentes.Views.Tabla_docs();
		$(".contenido").append(tabla_docs.render().el);
		allDocs.forEach(function(modelo){
			var doc_contenido = new Docentes.Views.Content_docs();
			$("#docs").append(doc_contenido.render(modelo).el);
		});

	}
});

var datos = new Docentes.Models.Datos();
Docentes.application = new Docentes.DocentesRouter();

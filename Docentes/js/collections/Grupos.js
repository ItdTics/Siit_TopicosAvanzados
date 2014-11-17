Docentes.Collections.Grupos = Backbone.Collection.extend({
	model: Docentes.Models.Grupo,
	initialize: function(){
		this.loadGrupos();
	},
	loadGrupos: function (){
		
		var self = this;
		return $.getJSON("formatos/grupos.json").then(function(data){
			self.jsonData = data;
			for (var id in data){
				if(data.hasOwnProperty([id])){
					self.addGrupo(id,data[id]);
				}
			}
		});
	},
	addGrupo: function(id, grupo){
		allgrupos.add(new Docentes.Models.Grupo({
			id_grupo: id,
			grupo: grupo.grupo,
			horario: grupo.horario,
			id_profesor:grupo.id_profesor,
			salon: grupo.salon,
			id_lista: grupo.id_lista,
			materia:grupo.materia
		}));
	},

});

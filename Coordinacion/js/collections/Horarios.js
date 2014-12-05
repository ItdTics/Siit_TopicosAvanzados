Coordinacion.Collections.Horarios = Backbone.Collection.extend({
	model: Coordinacion.Models.Horario,
	initialize: function(){
		this.loadHorarios();
	},
	loadHorarios: function (){
		
		var self = this;
		return $.getJSON("formatos/horarios.json").then(function(data){
			self.jsonData = data;
			for (var id in data){
				if(data.hasOwnProperty([id])){
					self.addHorario(id,data[id]);
				}
			}
		});
	},
	addHorario: function(id, horario){
		allhorarios.add(new Coordinacion.Models.Horario({
			id_grupo: id,
			grupo: grupo.grupo,
			horario: grupo.horario,
			salon: grupo.salon,
			id_materia: id,
			materia:grupo.materia
		}));
	},

});

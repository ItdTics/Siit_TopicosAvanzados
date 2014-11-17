Docentes.Collections.Lista = Backbone.Collection.extend({

	initialize: function(){
		this.loadAlumnos();
	},

	loadAlumnos: function (){
		var self = this;
		return $.getJSON("formatos/alumnos.json").then(function(data){
			self.jsonData = data;
			for (var id in data){
				if(data.hasOwnProperty([id])){
					self.addAlumno(id,data[id],self);
				}
			}
		});
	},
	addAlumno: function(id, alumnos,lista){
		lista.add(new Docentes.Models.Alumno({
			id_alumno:id,
			nombre:alumnos.nombre,
			no_control: alumnos.no_control,
			carrera: alumnos.carrera,
		}));
	},
});
Docentes.Collections.Docs = Backbone.Collection.extend({
	model: Docentes.Models.Docs,

	initialize: function(){
		this.loadDocs();
	},
	
	loadDocs: function (){
		
		var self = this;
		return $.getJSON("formatos/documentos.json").then(function(data){
			self.jsonData = data;
			for (var id in data){
				if(data.hasOwnProperty([id])){
					self.addDoc(id,data[id]);
				}
			}
		});
	},

	addDoc: function(id, documentos){
		allDocs.add(new Docentes.Models.Doc({
			id_doc: id,
			nombre: documentos.nombre,
			ruta: documentos.ruta
		}));
	},
});
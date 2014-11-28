Alumnos.AluRouter = Backbone.Router.extend({
    routes:{
        ""             	: "incioR",
        "Kardex"  		: "kardexR", 
        "Horario"		: "horarioR",
        "Grupos"    	: "gruposR",
        "Materias"      : "materiasR",
        "Extraescolar"	: "extraescolarR",
    },

    initialize: function(){
        
        var carga = new Alumnos.Views.inicio();  
        $("#contenido").append(carga.render().el);
        Backbone.history.start();
        console.log("cargo inicio");
    },

    incioR: function(){
        $("#contenido").html("");
        var inicioRu = new Alumnos.Views.inicio();
        $("#contenido").append(inicioRu.render().el);
        console.log("cargo home");
    },
    kardexR: function(){
        $("#contenido").html("");
        var kardexRu = new Alumnos.Views.kardex();
        $("#contenido").append(kardexRu.render().el);
        console.log("cargo kardex");
    },
    horarioR: function(){
        $("#contenido").html("");
        var horarioRu = new Alumnos.Views.horario();
        $("#contenido").append(horarioRu.render().el);
        console.log("cargo horario");
    },
    gruposR: function(){
        $("#contenido").html("");
        var gruposRu = new Alumnos.Views.grupos();
        $("#contenido").append(gruposRu.render().el);
        console.log("cargo grupos");
    },
    materiasR: function(){
        $("#contenido").html("");
        var materiasRu = new Alumnos.Views.materias();
        $("#contenido").append(materiasRu.render().el);
        console.log("cargo materias");
    },
    extraescolarR: function(){
        $("#contenido").html("");
        var extraescolarRu = new Alumnos.Views.extraescolar();
        $("#contenido").append(extraescolarRu.render().el);
        console.log("cargo ex");
    }
});


Alumnos.application = new Alumnos.AluRouter();

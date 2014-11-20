RF.RFRouter = Backbone.Router.extend({
    routes:{
        ""             : "HOME",
        "Documentos"   : "documentoss", 
        "Inscripciones": "inscripcioness",
        "Consultas"    : "consultarr",
        "Adeudos"      : "adeudoss",
    },

    initialize: function(){
        this.jsonData = {},
        var docs_index = new RF.Views.Index();  
        $("#contenido").append(docs_index.render(datos).el);
        Backbone.history.start();
    },

    HOME: function(){
        $("#contenido").html();
        var inx = new RF.Views.Index();
        $("#contenido").append(inx.render(datos).el);
    },

    documentoss: function(){
        $("#contenido").html();
        var doss = new RF.Views.docs();
        $("#contenido").append(doss.render(datos).el);
        },
    },

    inscripcioness: function(){
        $("#contenido").html();
        var inss = new RF.Views.insc();
        $("#contenido").append(inss.render(datos).el);
            },

    adeudoss: function(){
        $("#contenido").html();
        var adss = new RF.Views.ade();
        $("#contenido").append(adss.render(datos).el);
            },

    consultarr: function(){
        $("#contenido").html();
        var corr = new RF.Views.cons();
        $("#contenido").append(corr.render(datos).el);
            },
    });

/*
    consultarr: function(){
        $("#contenido").empty();
        console.log("Estoy en la sección de Consultar");
        cons.render();
            $("#contenido").append(cons.el);
            },

*/

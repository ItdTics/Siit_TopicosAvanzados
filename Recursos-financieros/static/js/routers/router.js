RF.RFRouter = Backbone.Router.extend({
    routes:{
        ""             : "HOME",
        "Documentos"   : "documentoss", 
        "Inscripciones": "inscripcioness",
        "Consultas"    : "consultarr",
        "Adeudos"      : "adeudoss",
    },

    initialize: function(){
        this.jsonData = {};
        var docs_index = new RF.Views.Index();  
        $("#contenido").append(docs_index.render().el);
        Backbone.history.start();
        console.log("cargo lo primero");
    },

    HOME: function(){
        $("#contenido").html("");
        var inx = new RF.Views.Index();
        $("#contenido").append(inx.render().el);
        console.log("cargo home");
    },

    documentoss: function(){
        $("#contenido").html("");
        var doss = new RF.Views.docs();
        $("#contenido").append(doss.render().el);
        console.log("cargo los documentoss");
        },
    

    inscripcioness: function(){
        $("#contenido").html("");
        var inss = new RF.Views.insc();
        $("#contenido").append(inss.render().el);
            },

    adeudoss: function(){
        $("#contenido").html("");
        var adss = new RF.Views.ade();
        $("#contenido").append(adss.render().el);
            },

    consultarr: function(){
        $("#contenido").html("");
        var corr = new RF.Views.cons();
        $("#contenido").append(corr.render().el);
            },
    });

// var datos = new RF.Models.modelo;
RF.application = new RF.RFRouter();

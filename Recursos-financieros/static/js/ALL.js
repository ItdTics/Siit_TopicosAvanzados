var RECFIN_MASTER_VIEW = Backbone.View.extend({
        el:'.contenido',
         render: function(){
           var that = this;
           var users = new RECFIN_COLLECTION();
           var template = Handlebars.compile($("#content_template").html());
           that.$el.html(template);
  }
      });

      var RECFIN_INSC_VIEW = Backbone.View.extend({
        el:'.contenido',
         render: function(){
           var that = this;
           var users = new RECFIN_COLLECTION();
               var template = Handlebars.compile($("#cons_template").html());
               that.$el.html(template);
     } });

      var RECFIN_CONS_VIEW = Backbone.View.extend({
        el:'.contenido',
         render: function(){
           var that = this;
           var users = new RECFIN_COLLECTION();
               var template = Handlebars.compile($("#insc_template").html());
               that.$el.html(template);
      }});

      var RECFIN_MASTER_ROUTER = Backbone.Router.extend({
        routes:{
                  '':'home',
                  '':'Inscripciones',
                  '':'Adeudos',
                  '':'Documentos'
                  '':'Consultar'
                }

                Backbone.history.start();
      });

      var RECFIN_COLLECTION = Backbone.Collection.extend({
        url:'/users'
      });

      var MASVIEW = new RECFIN_MASTER_VIEW();
      var INSCVIEW = new RECFIN_INSC_VIEW();
      var CONSVIEW = new RECFIN_CONS_VIEW();

      var router = new RECFIN_MASTER_ROUTER()

      router.on(
        'route:home',function(){
          $(".contenido").empty();
          MASVIEW.render()},

        'route:Inscripciones',function(){
          $(".contenido").empty();
          INSCVIEW.render()},

        'route:Consultar',function(){
          $(".contenido").empty();
          CONSVIEW.render()};

      );

      Backbone.history.start();

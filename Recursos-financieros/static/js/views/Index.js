RF.Views.Index=Backbone.View.extend({
    el: $("#contenido"),
    template: Handlebars.compile($("#index-template").html()),

    render:function(modelo){
        this.$el.html(this.template());
        return this;
    }
});
 /*descargar putty winscp*/
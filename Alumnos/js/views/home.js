Alumnos.Views.inicio=Backbone.View.extend({
    el: $("#contenido"),
    template: Handlebars.compile($("#index-view").html()),

    render:function(modelo){
        this.$el.html(this.template());
        return this;
    }
});
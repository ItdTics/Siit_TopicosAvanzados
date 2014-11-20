RF.Views.cons=Backbone.View.extend({
    el: $("#contenido");
    template: Handlebars.compile($("#cons-template").html()),

    render:function(modelo){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
   

});
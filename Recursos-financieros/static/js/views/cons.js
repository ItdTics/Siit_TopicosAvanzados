RF.Views.Cons=Backbone.View.extend({
    el: $("#contenido"),
    template: Handlebars.compile($("#cons-template").html()),

    render:function(modelo){
        this.$el.html(this.template());
        return this;
    }
});

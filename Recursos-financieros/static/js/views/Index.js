RF.Views.Index = Backbone.View.extend({
    el: $("#contenido"),
    template: Handlebars.compile($("#index-template").html()),

    render:function(modelo){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
   
/*
como hacerle para:
-que al darle click a una opción renderize una vista y oculte la otra

*/
    )};
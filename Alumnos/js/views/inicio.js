Alumnos.Views.inicio = Backbone.View.extend({
    el: $("#contenido"),
    template: Handlebars.compile($("#indexView").html()),
    initialize: function () {
          this.render();
    },
    render: function(modelo){
        this.$el.html(this.template());
        return this;
    }
});
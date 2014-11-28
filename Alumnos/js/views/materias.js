Alumnos.Views.materias = Backbone.View.extend({
    el: $("#contenido"),
    template: Handlebars.compile($("#materiasView").html()),
    initialize: function () {
          this.render();
    },
    render: function(modelo){
        this.$el.html(this.template());
        return this;
    }
});
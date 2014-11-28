Alumnos.Views.horario = Backbone.View.extend({
    el: $("#contenido"),
    template: Handlebars.compile($("#horarioView").html()),
    initialize: function () {
          this.render();
    },
    render: function(modelo){
        this.$el.html(this.template());
        return this;
    }
});
Alumnos.Views.kardex = Backbone.View.extend({
    el: $("#contenido"),
    template: Handlebars.compile($("#kardexView").html()),
    initialize: function () {
          this.render();
    },
    render: function(modelo){
        this.$el.html(this.template());
        return this;
    }
});
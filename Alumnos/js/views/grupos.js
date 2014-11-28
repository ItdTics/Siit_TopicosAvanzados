Alumnos.Views.grupos = Backbone.View.extend({
    el: $("#contenido"),
    template: Handlebars.compile($("#gruposView").html()),
    initialize: function () {
          this.render();
    },
    render: function(modelo){
        this.$el.html(this.template());
        return this;
    }
});
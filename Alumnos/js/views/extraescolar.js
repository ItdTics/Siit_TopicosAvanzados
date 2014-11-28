Alumnos.Views.extraescolar = Backbone.View.extend({
    el: $("#contenido"),
    template: Handlebars.compile($("#extraescolarView").html()),
    initialize: function () {
          this.render();
    },
    render: function(modelo){
        this.$el.html(this.template());
        return this;
    }
});
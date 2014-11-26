RF.Views.Insc=Backbone.View.extend({
    el: $("#contenido"),
	template: Handlebars.compile($("#insc-template").html()),

	render:function(modelo){
        this.$el.html(this.template());
        return this;
    }

});
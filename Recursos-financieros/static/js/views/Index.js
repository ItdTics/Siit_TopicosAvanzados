RF.Views.Index=Backbone.View.extend({
    el: $("#contenido"),
    template: Handlebars.compile($("#index-template").html()),

    initialize: function(){

	},	

    render:function(modelo){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
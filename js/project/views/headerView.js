APP.HeaderView = Backbone.View.extend({   

  className: 'jumbotron',

  template: _.template($('#headerTpl').html()),

  render: function () { 
    this.$el.html(this.template());
    return this;
  }     

});
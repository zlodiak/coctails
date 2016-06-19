APP.HeaderView = Backbone.View.extend({   

  className: 'jumbotron',

  template: _.template($('#headerTpl').html()),

  render: function () {  console.log('l t c ');
    this.$el.html(this.template());
    return this;
  }     

});
APP.NavigationView = Backbone.View.extend({   

  initialize: function() { 
    this.render();
  },

  id: 'navigation',

  className: 'navigation',

  template: _.template($('#navigationTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  },  

  setActivePunkt: function (activeId) {  
    this.$el.find('#navigationBox .navLink').removeClass('active');
    this.$el.find(activeId).addClass('active');
  }

});
APP.PageDescView = Backbone.View.extend({   

  initialize: function() { 
    
  },

  id: 'pageDesc',

  className: 'page_desc',

  template: _.template($('#pageDescTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  },

  show: function () {  
    this.$el.removeClass('hide');
    return this;
  }  


});


APP.PageIngridientsView = Backbone.View.extend({   

  initialize: function() { 
    
  },

  id: 'pageIngridients',

  className: 'page_ingridients',

  template: _.template($('#pageIngridientsTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  },

  show: function () {  
    this.$el.removeClass('hide');
    return this;
  }  


});



APP.PageProcessView = Backbone.View.extend({   

  initialize: function() { 
    
  },

  id: 'pageProcess',

  className: 'page_process',

  template: _.template($('#pageProcessTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  },

  show: function () {  
    this.$el.removeClass('hide');
    return this;
  }  


});


APP.PageStemwareView = Backbone.View.extend({   

  initialize: function() { 
    
  },

  id: 'pageStemware',

  className: 'page_stemware',

  template: _.template($('#pageStemwareTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  },

  show: function () {  
    this.$el.removeClass('hide');
    return this;
  }  

});


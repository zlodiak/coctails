APP.CoctailFormView = Backbone.View.extend({  

  initialize: function() { 
    this.pagesViews = [];

    this.pagesViews.push(new APP.PageDescView());
    this.pagesViews.push(new APP.PageIngridientsView());
    this.pagesViews.push(new APP.PageProcessView());
    this.pagesViews.push(new APP.PageStemwareView());  

    this.render();  
  },

  render: function () {  
      var self = this;

    _.each(this.pagesViews, function(view){ 
      $(self.el).append(view.render().el);
    });

    return this;
  }

});

APP.PageDescView = Backbone.View.extend({   

  initialize: function() { 
    
  },

  className: 'page_desc',

  template: _.template("$('#pageDescTpl').html()"),

  render: function () {  
    this.$el.html(this.template());
    return this;
  }

});


APP.PageIngridientsView = Backbone.View.extend({   

  initialize: function() { 
    
  },

  className: 'page_ingridients',

  template: _.template("$('#pageIngridientsTpl').html()"),

  render: function () {  
    this.$el.html(this.template());
    return this;
  }

});



APP.PageProcessView = Backbone.View.extend({   

  initialize: function() { 
    
  },

  className: 'page_process',

  template: _.template("$('#pageProcessTpl').html()"),

  render: function () {  
    this.$el.html(this.template());
    return this;
  }

});


APP.PageStemwareView = Backbone.View.extend({   

  initialize: function() { 
    
  },

  className: 'page_stemware',

  template: _.template("$('#pageStemwareTpl').html()"),

  render: function () {  
    this.$el.html(this.template());
    return this;
  }

});


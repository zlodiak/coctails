APP.PageProcessView = Backbone.View.extend({   

  initialize: function() { 

  },

  id: 'pageProcess',

  className: 'page_process',

  template: _.template($('#pageProcessTpl').html()),

  render: function () {  
    var self = this;

    this.$el.html(this.template());

    _.each(APP.CONFIG.tagsProcess, function(title, key){ 
      var tag = new APP.TagView(title).render().el;
      self.$el.find('#tagsProcessUnits').append(tag);
    });    

    return this;
  },

  show: function () {  
    this.$el.removeClass('hide');
    return this;
  }  

});


APP.TagView = Backbone.View.extend({   

  initialize: function(title) { 
    this.title = title;
  },

  className: 'tag_process col-xs-4 process_cell',

  template: _.template($('#tagProcessTpl').html()),

  render: function () {  
    this.$el.html(this.template({title: this.title}));
    return this;
  }   

});
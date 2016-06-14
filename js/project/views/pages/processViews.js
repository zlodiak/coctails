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

    this.renderUnits(APP.CONFIG.timeUnits, APP.TimeUnitView, '#timeUnits');         
    this.renderUnits(APP.CONFIG.complexityUnits, APP.ComplexityUnitView, '#complexityUnits');         

    return this;
  },

  show: function () {  
    this.$el.removeClass('hide');
    return this;
  },

  renderUnits: function (unitsArr, unitViewName, unitWrapId) {   
    var self = this;

    _.each(unitsArr, function(unit){ 
      var unitView = new unitViewName().render(unit).el;
      self.$el.find(unitWrapId).append(unitView);
    });    
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


APP.TimeUnitView = Backbone.View.extend({   

  tagName: 'option',

  render: function (timeUnit) {  
    this.$el.html(timeUnit);
    return this;
  }   

});


APP.ComplexityUnitView = Backbone.View.extend({   

  tagName: 'option',

  render: function (complexityUnit) {  
    this.$el.html(complexityUnit);
    return this;
  }   

});
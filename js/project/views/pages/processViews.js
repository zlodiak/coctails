APP.PageProcessView = Backbone.View.extend({   

  initialize: function() { 

  },

  id: 'pageProcess',

  className: 'page_process',

  template: _.template($('#pageProcessTpl').html()),

  render: function () {  
    this.$el.html(this.template());

    this.renderTags();

    this.renderUnits(APP.CONFIG.timeUnits, APP.TimeUnitView, '#timeUnits');         
    this.renderUnits(APP.CONFIG.complexityUnits, APP.ComplexityUnitView, '#complexityUnits');         
    this.renderUnits(APP.CONFIG.methodUnits, APP.MethodUnitView, '#methodUnits');         
    this.renderUnits(APP.CONFIG.sturdinessUnits, APP.SturdinessUnitView, '#sturdinessUnits');         
    this.renderUnits(APP.CONFIG.basicUnits, APP.BasicUnitView, '#basicUnits');         
    this.renderUnits(APP.CONFIG.typeUnits, APP.TypeUnitView, '#typeUnits');         

    return this;
  },

  show: function () {  
    this.$el.removeClass('hide');
    return this;
  },

  renderTags: function () { 
    var self = this;

    _.each(APP.CONFIG.tagsProcess, function(title, key){ 
      var tag = new APP.TagView(title).render().el;
      self.$el.find('#tagsProcessUnits').append(tag);
    });
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

  render: function (unit) {  
    this.$el.html(unit);
    return this;
  }   

});


APP.ComplexityUnitView = Backbone.View.extend({   

  tagName: 'option',

  render: function (unit) {  
    this.$el.html(unit);
    return this;
  }   

});


APP.MethodUnitView = Backbone.View.extend({   

  tagName: 'option',

  render: function (unit) {  
    this.$el.html(unit);
    return this;
  }   

});


APP.SturdinessUnitView = Backbone.View.extend({   

  tagName: 'option',

  render: function (unit) {  
    this.$el.html(unit);
    return this;
  }   

});


APP.BasicUnitView = Backbone.View.extend({   

  tagName: 'option',

  render: function (unit) {  
    this.$el.html(unit);
    return this;
  }   

});


APP.TypeUnitView = Backbone.View.extend({   

  tagName: 'option',

  render: function (unit) {  
    this.$el.html(unit);
    return this;
  }   

});
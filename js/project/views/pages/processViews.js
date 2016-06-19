APP.PageProcessView = Backbone.View.extend({   

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

    _.each(APP.CONFIG.tagsProcess, function(title, num){ 
      var tag = new APP.TagView(title, num).render().el;
      self.$el.find('#tagsProcessUnits').append(tag);
    });
  },

  renderUnits: function (unitsArr, unitViewName, unitWrapId) {   
    var self = this;

    _.each(unitsArr, function(unit, num){ 
      var unitView = new unitViewName().render(unit, num).el;
      self.$el.find(unitWrapId).append(unitView);
    });

    this.$el.find("option:selected").attr('selected', true);    
  },

  getProcessValuesArr: function() {  
    var processValuesArr = [],
        checkedTagsArr = [],
        dozeUnitValue =       this.$el.find('#doseUnit').val(),
        timeUnitValue =       this.$el.find('#timeUnits option:selected').val(),
        complexityUnitValue = this.$el.find('#complexityUnits option:selected').val(), 
        methodUnitValue =     this.$el.find('#methodUnits option:selected').val(), 
        sturdinessUnitValue = this.$el.find('#sturdinessUnits option:selected').val(), 
        basicUnitValue =      this.$el.find('#basicUnits option:selected').val(), 
        typeValue =           this.$el.find('#typeUnits option:selected').val(),
        tagsElems =           this.$el.find('#tagsProcessUnits input:checked');

    _.each(tagsElems, function(elem){ 
      checkedTagsArr.push($(elem).attr('data-num'))
    });

    processValuesArr = [
      {'dozeUnitValue': dozeUnitValue},
      {'timeUnitValue': timeUnitValue},
      {'complexityUnitValue': complexityUnitValue},
      {'methodUnitValue': methodUnitValue},
      {'sturdinessUnitValue': sturdinessUnitValue},
      {'basicUnitValue': basicUnitValue},
      {'typeValue': typeValue},
      {'typeValue': typeValue},
      {'tagsElems': tagsElems},
      {'checkedTagsArr': checkedTagsArr}
    ];

    return processValuesArr;
  }, 

  clearFields: function() {  
    this.render();
  }        

});


APP.TimeUnitView = Backbone.View.extend({   

  tagName: 'option',

  render: function (unit, num) { 
    this.$el.html(unit);
    this.$el.attr('value', num);

    return this;
  }   

});


APP.ComplexityUnitView = Backbone.View.extend({   

  tagName: 'option',

  render: function (unit, num) { 
    this.$el.html(unit);
    this.$el.attr('value', num);

    return this;
  }   

});


APP.MethodUnitView = Backbone.View.extend({   

  tagName: 'option',

  render: function (unit, num) { 
    this.$el.html(unit);
    this.$el.attr('value', num);

    return this;
  }    

});


APP.SturdinessUnitView = Backbone.View.extend({   

  tagName: 'option',

  render: function (unit, num) { 
    this.$el.html(unit);
    this.$el.attr('value', num);

    return this;
  }     

});


APP.BasicUnitView = Backbone.View.extend({   

  tagName: 'option',

  render: function (unit, num) { 
    this.$el.html(unit);
    this.$el.attr('value', num);

    return this;
  }     

});


APP.TypeUnitView = Backbone.View.extend({   

  tagName: 'option',

  render: function (unit, num) { 
    this.$el.html(unit);
    this.$el.attr('value', num);

    return this;
  }   
});


APP.TagView = Backbone.View.extend({   

  initialize: function(title, num) { 
    this.title = title;
    this.num = num;
  },

  className: 'tag_process col-xs-4 process_cell',

  template: _.template($('#tagProcessTpl').html()),

  render: function () {  
    this.$el.html(this.template({
      title: this.title,
      num: this.num
    }));

    return this;
  }   

});
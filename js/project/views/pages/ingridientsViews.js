APP.PageIngridientsView = Backbone.View.extend({  

  id: 'pageIngridients',

  className: 'page_ingridients',

  template: _.template($('#pageIngridientsTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    this.addIngridientRow();
    return this;
  },

  show: function () {  
    this.$el.removeClass('hide');
    return this;
  }, 

  events:{
    'click #addIngridientBtn' : 'addIngridientRow'
  },  

  addIngridientRow: function () {  
    var ingridientElem =  new APP.PageIngridientRowView().render().el;
    this.$el.find('#ingridientsRows').append(ingridientElem);
  }   

});


APP.PageIngridientRowView = Backbone.View.extend({   

  initialize: function() { 
    this.model = new APP.IngridientModel();
  },

  className: 'row',

  template: _.template($('#ingridientRowTpl').html()),

  render: function () {  
    var title = this.model.get('title');

    this.$el.html(this.template(this.model.toJSON()));

    this.renderUnits(APP.CONFIG.ingridientsUnits, APP.IngridientsUnitView, '#ingridientsUnit');  
    this.renderUnits(APP.CONFIG.measuresUnits, APP.MeasuresUnitView, '#measuresUnit');  

    return this;
  },

  renderUnits: function (unitsArr, unitViewName, unitWrapId) {   
    var self = this;

    _.each(unitsArr, function(unit, num){ 
      var unitView = new unitViewName().render(unit, num).el;
      self.$el.find(unitWrapId).append(unitView);
    });   

    this.$el.find("option:selected").attr('selected', true);
  } 

});


APP.IngridientsUnitView = Backbone.View.extend({   

  tagName: 'option',

  render: function (unit, num) { 
    this.$el.html(unit);
    this.$el.attr('value', num);

    return this;
  }   

});


APP.MeasuresUnitView = Backbone.View.extend({   

  tagName: 'option',

  render: function (unit, num) {  
    this.$el.html(unit);
    this.$el.attr('value', num);

    return this;
  }   

});

APP.PageIngridientsView = Backbone.View.extend({  

  initialize: function() { 
    //this.renderUnits(APP.CONFIG.timeUnits, APP.TimeUnitView, '#timeUnits');  
  }, 

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
  },

  renderUnits: function (unitsArr, unitViewName, unitWrapId) {   
    var self = this;

    _.each(unitsArr, function(unit){ 
      var unitView = new unitViewName().render(unit).el;
      self.$el.find(unitWrapId).append(unitView);
    });    
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
    return this;
  }

});
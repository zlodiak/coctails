APP.PageIngridientsView = Backbone.View.extend({   

  id: 'pageIngridients',

  className: 'page_ingridients',

  template: _.template($('#pageIngridientsTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    this.addIngridient();
    return this;
  },

  show: function () {  
    this.$el.removeClass('hide');
    return this;
  }, 

  events:{
    'click #addIngridientBtn' : 'addIngridient'
  },  

  addIngridient: function () {  
    var ingridientElem =  new APP.PageIngridientUnitView().render().el;
    this.$el.find('#ingridientsUnits').append(ingridientElem);
  }

});


APP.PageIngridientUnitView = Backbone.View.extend({   

  initialize: function() { 
    this.model = new APP.IngridientModel();
  },

  className: 'row',

  template: _.template($('#ingridientUnitTpl').html()),

  render: function () {  
    var title = this.model.get('title');

    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});
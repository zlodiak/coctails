APP.PageStemwareView = Backbone.View.extend({   

  initialize: function() { 
    APP.stemwareCollection = new APP.StemwareCollection();

    _.each(APP.CONFIG.stemwareImages, function(img, key){ 
      var stemwareModel = new APP.StemwareModel({
        idSremware: key,
        img: img
      });

      APP.stemwareCollection.add(stemwareModel);
    });    
  },

  id: 'pageStemware',

  className: 'page_stemware',

  template: _.template($('#pageStemwareTpl').html()),

  render: function() {  
    this.$el.html(this.template());

    APP.stemwareCollection.each(function(model) {  
      var unit = new APP.PageStemwareUnitView(model).render().el;
      this.$el.find('#stemwareUnits').append(unit);
    }, this) 

    return this;
  },

  show: function() {  
    this.$el.removeClass('hide');
    return this;
  },

  getstemwareValuesArr: function() {  
    var stemwareSelectedItems = APP.stemwareCollection.where({selected: true}),
        stemwareValuesArr = [];

    _.each(stemwareSelectedItems, function(model) { 
      var idSremware = model.get('idSremware');
      stemwareValuesArr.push(idSremware)
    });    

    return stemwareValuesArr;
  }, 

  clearFields: function() {  
    this.initialize();
    this.render();
  }    

});


APP.PageStemwareUnitView = Backbone.View.extend({  

  initialize: function(model) { 
    this.model = model;

    this.listenTo(this.model, 'change', this.toggleAppearance);
  }, 

  className: 'col-xs-3',

  template: _.template($('#stemwareUnitTpl').html()),

  render: function () {  
    this.$el.html(this.template({
        id: this.model.get('idSremware'),
        img: this.model.get('img')
      }));
    return this;
  },

  events:{
    'click .label' : 'toggleSelect'
  },   

  toggleAppearance: function() {  
    var selected = this.model.get('selected'),
        labelElem = this.$el.find('.label');

    if(selected == true) {
      labelElem.addClass('selected');
      labelElem.text('Выбрано');
    } 
    else if(selected == false) {
      labelElem.removeClass('selected');
      labelElem.text('Выбрать');
    };
  },

  toggleSelect: function() {  
    var selected = this.model.get('selected'),
        newSelected = !selected;

    this.model.set({selected: newSelected});
  }   

});
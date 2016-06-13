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

  render: function () {  
    this.$el.html(this.template());

    APP.stemwareCollection.each(function(model) {  
      var unit = new APP.PageStemwareUnitView().render(model).el;
      this.$el.find('#stemwareUnits').append(unit);
    }, this) 

    return this;
  },

  show: function () {  
    this.$el.removeClass('hide');
    return this;
  }  

});


APP.PageStemwareUnitView = Backbone.View.extend({   

  className: 'col-xs-3',

  template: _.template($('#stemwareUnitTpl').html()),

  render: function (model) {  
    this.$el.html(this.template({
        id: model.get('idSremware'),
        img: model.get('img')
      }));
    return this;
  }

});
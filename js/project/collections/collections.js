APP.StemwareCollection = Backbone.Collection.extend({

  model: APP.StemwareModel

});


APP.TagsProcessCollection = Backbone.Collection.extend({

  model: APP.TagsProcessModel

});


APP.CoctailsCollection = Backbone.Collection.extend({

  model: APP.CoctailModel,

  localStorage: new Backbone.LocalStorage('CoctailsList'),

  getNewIdCoctail: function() {
    var idCoctailMax = 0, 
        idCoctailCurrent;

    APP.coctailCollection.each(function(model) { 
      idCoctailCurrent = parseInt(model.attributes.idCoctail);
      if(idCoctailCurrent >= idCoctailMax) { idCoctailMax = idCoctailCurrent + 1 };
    }, this ); 

    return idCoctailMax;

  }
});
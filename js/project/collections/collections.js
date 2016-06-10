APP.ServicesModelsCollection = Backbone.Collection.extend({

  model: APP.ServiceModel,

  getNewIdService: function() {
    var idServiceMax = 0, 
        idServiceCurrent;

    APP.ServicesModelsCollection.each(function(model) { 
      idServiceCurrent = parseInt(model.get('idService'));
      if(idServiceCurrent >= idServiceMax) { idServiceMax = idServiceCurrent + 1 };
    }, this ); 

    return idServiceMax;
  }

});
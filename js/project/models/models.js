APP.StemwareModel = Backbone.Model.extend({

  defaults: {
    idSremware: undefined,
    img: undefined,
    selected: false       
  }    

});


APP.IngridientModel = Backbone.Model.extend({

  defaults: {
    idIngridient: undefined,
    title: 'undefined',
    cnt: 1,
    measure: 'undefined',       
    decoration: false       
  }    

});





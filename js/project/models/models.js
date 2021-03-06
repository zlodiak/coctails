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


APP.TagsProcessModel = Backbone.Model.extend({

  defaults: {
    idTag: undefined,
    title: undefined,
    checked: false       
  }    

});


APP.CoctailModel = Backbone.Model.extend({

  defaults: {
    idsStemwareArr: [],
    processArr: [
      {dose: undefined},
      {time: undefined},
      {complexity: undefined},
      {method: undefined},
      {sturdiness: undefined},
      {basic: undefined},
      {tagsArr: []}
    ]   
  },

  localStorage: new Backbone.LocalStorage('CoctailsList')      

});





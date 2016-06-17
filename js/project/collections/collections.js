APP.StemwareCollection = Backbone.Collection.extend({

  model: APP.StemwareModel

});


APP.TagsProcessCollection = Backbone.Collection.extend({

  model: APP.TagsProcessModel

});


APP.CoctailsCollection = Backbone.Collection.extend({

  model: APP.CoctailModel,

  localStorage: new Backbone.LocalStorage('CoctailsList')
});
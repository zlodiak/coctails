
APP.NavigationRouter = Backbone.Router.extend({
  routes: {
    "": "page_desc",  
    "page_desc": "page_desc", 
    "page_ingridients": "page_ingridients", 
    "page_process": "page_process", 
    "page_stemware": "page_stemware"
  },

  initialize: function() { 
    Backbone.history.start();  
  },   

  page_desc: function () {    
    this._showView(APP.pageDescView);
  },

  page_ingridients: function () {  
    this._showView(APP.pageIngridientsView);
  },  

  page_process: function () {  
    this._showView(APP.pageProcessView);
  },     

  page_stemware: function () {  
    this._showView(APP.pageStemwareView);
  }, 

  page_error404: function () {  
    // todo
  },

  _showView: function (view) {  
    APP.coctailFormView.hideAllVews();
    view.show();
  }                
});


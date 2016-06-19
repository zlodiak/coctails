
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

  page_desc: function() {    
    this._showView(APP.pageDescView);
    APP.navigationView.setActivePunkt('#navDesc');
  },

  page_ingridients: function() {  
    this._showView(APP.pageIngridientsView);
    APP.navigationView.setActivePunkt('#navIngridients');
  },  

  page_process: function() {  
    this._showView(APP.pageProcessView);
    APP.navigationView.setActivePunkt('#navProcess');
  },     

  page_stemware: function() {  
    this._showView(APP.pageStemwareView);
    APP.navigationView.setActivePunkt('#navStemware');
  }, 

  page_error404: function() {  
    // todo
  },

  _showView: function(view) {  
    APP.coctailFormView.hideAllVews();
    view.show();
  }                
});


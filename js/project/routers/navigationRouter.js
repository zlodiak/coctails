
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
    APP.coctailFormView.hideAllVews();
    APP.pageDescView.show();
  },

  page_ingridients: function () {  console.log('i')
    app._hideAllVews();
  },  

  page_process: function () {  
    app._hideAllVews();
  },     

  page_stemware: function () {  
    app._hideAllVews();
  }, 

  page_error404: function () {  
    // todo
  }           
});


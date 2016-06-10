
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


  },

  page_ingridients: function () {  

  },  

  page_process: function () {  

  },     

  page_stemware: function (id_graph) {  

  }, 

  page_error404: function () {  
    // todo
  }


           
        
});
APP.CoctailFormView = Backbone.View.extend({  

  initialize: function() { 
    this.pagesViews = [];

    APP.pageDescView = new APP.PageDescView(),
    APP.pageIngridientsView = new APP.PageIngridientsView(),
    APP.pageProcessView = new APP.PageProcessView(),
    APP.pageStemwareView = new APP.PageStemwareView();  

    this.pagesViews.push(APP.pageDescView);
    this.pagesViews.push(APP.pageIngridientsView);
    this.pagesViews.push(APP.pageProcessView);
    this.pagesViews.push(APP.pageStemwareView);

    this.render();  

    
  },

  render: function () {  
    var self = this;

    _.each(this.pagesViews, function(view){ 
      $(self.el).append(view.render().el);
    });

    //APP.navigationView = new APP.NavigationView();
    //console.log(APP.navigationView)
    //this.$el.prepend(APP.navigationView.render().el);

    return this;
  },

  hideAllVews: function () {  console.log('hav')
    _.each(this.pagesViews, function(view){ 
      view.$el.addClass('hide');
    });
  } 

});
APP.CoctailFormView = Backbone.View.extend({  

  initialize: function() { 
    this.pagesViews = [];
    APP.coctailsCollection = new APP.CoctailsCollection();
    APP.coctailsCollection.fetch();

    APP.headerView = new APP.HeaderView();

    this._initPagesViews();
    this.render();  
  },

  render: function () {  
    var self = this;

    this.$el.before(APP.headerView.render().el);

    _.each(this.pagesViews, function(view){ 
      $(self.el).append(view.render().el);
    });

    return this;
  },

  events:{
    'click #submit' : 'trySubmit'
  },  

  trySubmit: function () {  
    var modalFill = this._constructModalFill();

    if(this._constructModalFill() == APP.CONFIG.successAddCoctailMsg + '<br>') {
      var coctail = new APP.CoctailModel();

      coctail.set({
        idsStemwareArr: APP.pageStemwareView.getstemwareValuesArr(),
        processArr: APP.pageProcessView.getProcessValuesArr(), 
        ingridientsArr: APP.pageIngridientsView.getIngridientsValuesArr(),
        descArr: APP.pageDescView.getDescValuesArr()
      });

      coctail.save();
      APP.coctailsCollection.add(coctail);

      console.log('model cre', coctail, APP.coctailsCollection)
    } else {
      console.log('model not cre')
    };

    this._constructModal(modalFill);
  },

  hideAllVews: function () {  
    _.each(this.pagesViews, function(view){ 
      view.$el.addClass('hide');
    });
  }, 

  _constructModalFill: function () {  
    var coctailName1 = $.trim($('#coctailName1').val()),
        stemwareSelectCnt = APP.stemwareCollection.findWhere({selected: true}),
        modalFill = '';

    if(coctailName1.length == 0 || !stemwareSelectCnt) {  
      if(coctailName1.length == 0) { modalFill += APP.CONFIG.errorMsgCoctailName1 + '<br>' };  
      if(!stemwareSelectCnt) { modalFill += APP.CONFIG.errorMsgStemwareSelect + '<br>' };      
    } else {  
      modalFill = APP.CONFIG.successAddCoctailMsg + '<br>';      
    };

    return modalFill;
  },

  _constructModal: function (modalFill) {  
    var modal = new APP.CoctailModalView(modalFill);
    this.$el.find('#coctailModalBox').html(modal.el);   

    $('#coctailModal').modal('show');
  },

  _initPagesViews: function () {  
    APP.pageDescView = new APP.PageDescView(),
    APP.pageIngridientsView = new APP.PageIngridientsView(),
    APP.pageProcessView = new APP.PageProcessView(),
    APP.pageStemwareView = new APP.PageStemwareView();  

    this.pagesViews.push(APP.pageDescView);
    this.pagesViews.push(APP.pageIngridientsView);
    this.pagesViews.push(APP.pageProcessView);
    this.pagesViews.push(APP.pageStemwareView);
  }

});
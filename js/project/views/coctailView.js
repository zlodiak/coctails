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
    'click #submit' : 'submit'
  },  

  submit: function () {  
    var modalFill = this._constructModalFill();

    if(modalFill == APP.CONFIG.successAddCoctailMsg + '<br>') {
      this._createCoctail();
      this.clearAllVews();

      console.log('coctail create', APP.coctailsCollection)
    } else {
      console.log('coctail not create')
    };

    this._constructModal(modalFill);
  },

  hideAllVews: function () {  
    _.each(this.pagesViews, function(view){ 
      view.$el.addClass('hide');
    });
  }, 

  clearAllVews: function () {  
    _.each(this.pagesViews, function(view){ 
      view.clearFields();
    });
  },   

  _createCoctail: function () {  
    var coctail = new APP.CoctailModel();

    coctail.set({
      idsStemwareArr: APP.pageStemwareView.getstemwareValuesArr(),
      processArr: APP.pageProcessView.getProcessValuesArr(), 
      ingridientsArr: APP.pageIngridientsView.getIngridientsValuesArr(),
      descArr: APP.pageDescView.getDescValuesArr()
    });

    coctail.save();
    APP.coctailsCollection.add(coctail);
  },

  _constructModalFill: function () {  
    var modalFill = '',
        checkLengthCoctailName1 = APP.pageDescView.getValidationResultArr().checkCoctailName1,
        checkLargeIloadImgSize = APP.pageDescView.getValidationResultArr().checkLargeIloadImgSize,
        checkStemwareSelectCnt = APP.pageStemwareView.getValidationResultArr().checkStemwareSelectCnt;

    if(!checkLengthCoctailName1 || !checkStemwareSelectCnt) {  
      if(!checkLengthCoctailName1) { 
        modalFill += APP.CONFIG.errorMsgCoctailName1 + '<br>' 
      }  

      if(!checkStemwareSelectCnt) { 
        modalFill += APP.CONFIG.errorMsgStemwareSelect + '<br>' 
      };    

      if(!checkLargeIloadImgSize) { 
        modalFill += APP.CONFIG.errorMsgloadfileLarge + '<br>' 
      };           
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
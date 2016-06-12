APP.PageDescView = Backbone.View.extend({   

  initialize: function() { 
    
  },

  id: 'pageDesc',

  className: 'page_desc',

  template: _.template($('#pageDescTpl').html()),

  render: function () {  
    this.$el.html(this.template({defaultLoadImg: APP.CONFIG.defaultLoadImg}));
    return this;
  },

  show: function () {  
    this.$el.removeClass('hide');
    return this;
  },

  events: {
    'click #loadImgLabel': 'openLoadFileMaster',
    'change input[type="file"]': 'closeLoadFileMaster'
  },

  openLoadFileMaster: function () {  
    this.$el.find('#pageDescLoadImg').click();
  },

  closeLoadFileMaster: function () {  
    var fileInfo = document.getElementById('pageDescLoadImg').files[0];

    console.log(fileInfo)

    var reader = new FileReader();

    reader.onload = function(e) { 
      var elem = $("#loadImg"),
          src,
          width,
          height;

      if(fileInfo.size == 0) {
        elem.attr('src', 'images/' + APP.CONFIG.defaultLoadImg);
        elem.removeClass('load_img_loaded');
      } else {
        elem.attr('src', e.target.result);
        elem.addClass('load_img_loaded');
      };
    };

    reader.readAsDataURL(fileInfo);

    // read the image file as a data URL.
    //reader.readAsDataURL(this.files[0]);


  }    

});


APP.PageIngridientsView = Backbone.View.extend({   

  initialize: function() { 
    
  },

  id: 'pageIngridients',

  className: 'page_ingridients',

  template: _.template($('#pageIngridientsTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  },

  show: function () {  
    this.$el.removeClass('hide');
    return this;
  }  


});



APP.PageProcessView = Backbone.View.extend({   

  initialize: function() { 
    
  },

  id: 'pageProcess',

  className: 'page_process',

  template: _.template($('#pageProcessTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  },

  show: function () {  
    this.$el.removeClass('hide');
    return this;
  }  


});


APP.PageStemwareView = Backbone.View.extend({   

  initialize: function() { 
    
  },

  id: 'pageStemware',

  className: 'page_stemware',

  template: _.template($('#pageStemwareTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  },

  show: function () {  
    this.$el.removeClass('hide');
    return this;
  }  

});


APP.PageDescView = Backbone.View.extend({   

  initialize: function() { 
    
  },

  id: 'pageDesc',

  className: 'page_desc',

  template: _.template($('#pageDescTpl').html()),

  render: function () {  
    this.$el.html(this.template());
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
      var elem = document.getElementById("loadImg"),
          src,
          width,
          height;

      if(fileInfo.size == 0) {
        src = 'http://funkyimg.com/i/TZds.png';
        width = '74px';
        height = '131px';
      } else {
        src = e.target.result;
        width = '100%';
        height = 'auto';
      };

      elem.src = src;
      elem.style.width = width;
      elem.style.height = height;
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


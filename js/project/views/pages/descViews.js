APP.PageDescView = Backbone.View.extend({   

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
    var fileInfo = document.getElementById('pageDescLoadImg').files[0],
        self = this;

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

    if(fileInfo) { reader.readAsDataURL(fileInfo) };    
  },

  getDescValuesArr: function() {  
    var descValuesArr = [],
        coctailName1Value =     this.$el.find('#coctailName1').val(),
        coctailName2Value =     this.$el.find('#coctailName2').val(),
        smallInstructionValue = this.$el.find('#smallInstruction').val(), 
        largeInstructionValue = this.$el.find('#largeInstruction').val(), 
        loadImgElem =           this.$el.find('#loadImg')
        srcLoadFileValue =      loadImgElem.attr('src'),
        blobLoadFileValue =     loadImgElem.hasClass('load_img_loaded') ? srcLoadFileValue : undefined;

    descValuesArr = [
      {'coctailName1Value': coctailName1Value},
      {'coctailName2Value': coctailName2Value},
      {'smallInstructionValue': smallInstructionValue},
      {'largeInstructionValue': largeInstructionValue},
      {'blobLoadFileValue': blobLoadFileValue}
    ];

    return descValuesArr;
  }, 

  clearFields: function() {  
    this.render();
  }       

});
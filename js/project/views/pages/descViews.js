APP.PageDescView = Backbone.View.extend({  

  initialize: function() {  
    this.loadImgType = undefined;
    this.loadImgSize = undefined;

    this.MAX_LOADFILE_SIZE_BT = 100000;
    this.MIN_COCTAILNAME1_LENGTH = 1;
    this.PERMITTED_FILE_TYPES_ARR = [
      'image/png', 
      'image/jpg', 
      'image/jpeg'
    ];
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
    var fileInfo = document.getElementById('pageDescLoadImg').files[0],
        self = this;

    console.log(fileInfo)

    this.loadImgType = fileInfo.type;
    this.loadImgSize = fileInfo.size;   

    console.log(this.loadImgType) 
    console.log(this.loadImgSize) 

    var reader = new FileReader();

    reader.onload = function(e) { 
      var elem = $("#loadImg");

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

  getValidationResultArr: function() {  
    var self = this;

    var coctailName1 = $.trim(this.$el.find('#coctailName1').val()), 
        checkCoctailName1 = coctailName1.length < this.MIN_COCTAILNAME1_LENGTH ? false : true,
        checkloadImgSize = this.loadImgSize > this.MAX_LOADFILE_SIZE_BT ? false : true,
        checkloadImgType = false, 
        loadFileIsExist = this.loadImgSize > 0 ? true : false;

    _.each(this.PERMITTED_FILE_TYPES_ARR, function(type){ 
      if(type == self.loadImgType) {  checkloadImgType = true };
    });

    return {
      'checkCoctailName1': checkCoctailName1,
      'checkloadImgSize': checkloadImgSize,
      'checkloadImgType': checkloadImgType,
      'loadFileIsExist': loadFileIsExist
    }
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
    this.initialize();
    this.render();
  }       

});
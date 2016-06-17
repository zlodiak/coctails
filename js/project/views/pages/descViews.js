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
        srcLoadFileValue =      this.$el.find('#loadImg').attr('src'),
        blobLoadFileValue =     this.$el.find('#loadImg').hasClass('load_img_loaded') ? srcLoadFileValue : undefined;

/*    console.log(this.$el.find('#loadImg').hasClass('load_img_loaded'), 'has class')
    console.log(this.$el.find('#loadImg').attr('src'), 'src')
    console.log(this.blobLoadFile, 'get')*/

    descValuesArr = [
      {'coctailName1Value': coctailName1Value},
      {'coctailName2Value': coctailName2Value},
      {'smallInstructionValue': smallInstructionValue},
      {'largeInstructionValue': largeInstructionValue},
      {'blobLoadFileValue': blobLoadFileValue}
    ];

    return descValuesArr;
  }          

});
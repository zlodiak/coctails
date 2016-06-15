APP.CoctailModalView = Backbone.View.extend({     

  initialize: function(modalFill) { 
    this.modalFill = modalFill;
    this.render();
  },     

  className: 'coctail_modal_box',

  template: _.template($('#coctailModalTpl').html()),

  render: function () {  
    this.$el.html(this.template({modalFill: this.modalFill}));  
    $('#coctailModalBox').html(this.$el);

    return this;
  }

});






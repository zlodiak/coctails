APP.ServiceModel = Backbone.Model.extend({

  defaults: {
    nameService: undefined,
    cnt: ''       
  },
     
  validation: {
    cnt:  [ 
            { required: true, msg: 'Поле не может быть пустым' },
            { pattern: 'number', msg: 'Введите число' },
            { pattern: /^[0-9]\d*(\.\d+)?$/, msg: 'Введите положительное число' },
            { pattern: /^[1-9]\d*(\.\d+)?$/, msg: 'Число не может быть нулём' }
          ]                                                                        
  }, 

  getValidCondition: function() { console.log('in m', this.isValid('cnt'))
    return this.isValid('cnt') ? true : false;
  },    

});


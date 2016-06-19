APP.initCoctails = function (elem) {
  APP.coctailFormView = new APP.CoctailFormView({el: elem});

  APP.navigationView = new APP.NavigationView();
  $('#coctailForm').prepend(APP.navigationView.el);

  APP.navigationRouter = new APP.NavigationRouter();  
};

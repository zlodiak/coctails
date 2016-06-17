<script src="js/libs/jquery/jquery.2.min.js"></script>    
<script src="js/libs/bootstrap-3/js/bootstrap.min.js"></script> 
<script src="js/libs/underscore-min.js"></script>
<script src="js/libs/backbone-min.js"></script>
<script src="js/libs/backbone-validation.min.js"></script>
<script src="js/libs/backbone.localStorage-min.js"></script>

<script>
  window.APP = window.APP || {};
</script>

<script src="js/project/config.js"></script> 
<script src="js/project/misc.js"></script> 

<script src="js/project/routers/navigationRouter.js"></script> 
<script src="js/project/models/models.js"></script> 
<script src="js/project/collections/collections.js"></script> 

<script src="js/project/views/navigationView.js"></script> 
<script src="js/project/views/modalViews.js"></script> 
<script src="js/project/views/coctailView.js"></script> 

<script src="js/project/views/pages/descViews.js"></script> 
<script src="js/project/views/pages/ingridientsViews.js"></script> 
<script src="js/project/views/pages/processViews.js"></script> 
<script src="js/project/views/pages/stemwareViews.js"></script> 




<script>
  APP.coctailFormView = new APP.CoctailFormView({el: '#coctailForm'});

  APP.navigationView = new APP.NavigationView();
  $('#coctailForm').prepend(APP.navigationView.el);

  APP.navigationRouter = new APP.NavigationRouter();
</script>


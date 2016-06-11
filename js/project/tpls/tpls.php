<script type="text/template" id="navigationTpl">
  <div class="row navigation_box" id="navigationBox">
    <a class="col-xs-3 navLink" id="navDesc"        href="#page_desc">Описание</a>
    <a class="col-xs-3 navLink" id="navIngridients" href="#page_ingridients">Ингридиенты</a>
    <a class="col-xs-3 navLink" id="navProcess"     href="#page_process">Процесс</a>
    <a class="col-xs-3 navLink" id="navStemware"    href="#page_stemware">Бокалы</a>
  </div>                
</script>


<script type="text/template" id="pageDescTpl">
  <div class="row">
    <div class="col-xs-4">
      <input class="form-control"  type="file" id="pageDescLoadImg" name="img" accept="image/jpeg,image/png,image/gif">
    </div>

    <div class="col-xs-8">
      <input class="form-control" type="text" maxlength="45" id="coctailName1" placeholder="Название коктейля">
      <input class="form-control" type="text" maxlength="45" id="coctailName2" placeholder="Альтернативное название через запятую">
      <textarea class="form-control" maxlength="225" id="smallText" placeholder="Краткое описание"></textarea>        
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12">
      <textarea class="form-control" id="largeTextarea" maxlength="339" name="largeText" placeholder="Инструкция для приготовления"></textarea>
    </div>
  </div>             

  <div class="row navBox" >
    <div class="col-xs-6">
      <!--<a class="btn btn-default prev">Рассчитать</a>-->
    </div>

    <div class="col-xs-6">
      <a class="btn btn-default pull-right next to_ingridients" href="#page_ingridients">Ингридиенты</a>
    </div>      
  </div>   
</script>


<script type="text/template" id="pageIngridientsTpl">
  <div class="row">
    <div class="col-xs-12">
        qwerty
    </div>
  </div>             

  <div class="row navBox" >
    <div class="col-xs-6">
      <a class="btn btn-default prev to_desc" href="#page_desc">Описание</a>
    </div>

    <div class="col-xs-6">
      <a class="btn btn-default pull-right next to_process" href="#page_process">Процесс</a>
    </div>      
  </div>    
</script>


<script type="text/template" id="pageProcessTpl">
  <div class="row">
    <div class="col-xs-12">
        pro
    </div>
  </div>             

  <div class="row navBox" >
    <div class="col-xs-6">
      <a class="btn btn-default prev to_ingridients" href="#page_ingridients">Ингридиенты</a>
    </div>

    <div class="col-xs-6">
      <a class="btn btn-default pull-right next to_stemware" href="#page_stemware">Бокалы</a>
    </div>      
  </div>    
</script>


<script type="text/template" id="pageStemwareTpl">
  <div class="row">
    <div class="col-xs-12">
        pro
    </div>
  </div>             

  <div class="row navBox" >
    <div class="col-xs-6">
      <a class="btn btn-default prev to_process" href="#page_process">Процесс</a>
    </div>

    <div class="col-xs-6">
      <a class="btn btn-primary pull-right next to_submit">Отправить</a>
    </div>      
  </div>    
</script>


<script type="text/template" id="paymentModalTpl">
  <!-- Modal payment -->
  <div class="modal fade payment_modal" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="paymentLabel">
    <div class="modal-dialog" role="document">     
      <div class="modal-content">
        <form class="" id="paymentForm" method="get" action="#" onSubmit="return false;">
          <fieldset>         
            <div class="modal-header">
              <btn type="btn" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></btn>
              <h4 class="modal-title" id="paymentLabel">Итого</h4>
            </div>

            <div class="modal-body" id="modalPositions"></div>

            <div class="modal-footer">
              <btn type="btn" class="btn btn-default" data-dismiss="modal">Понятно</btn>
            </div>
          </fieldset>
        </form>          
      </div>
    </div>
  </div>  
</script>
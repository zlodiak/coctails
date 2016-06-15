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
    <div class="col-xs-3 load_img_box">
      <div class="load_img_frame">
        <img class="load_img" id="loadImg" src="images/<%= defaultLoadImg %>" alt="">
      </div>

      <div class="load_img_button_outer">
        <div class="load_img_label" id="loadImgLabel">Загрузить</div>
        <input class="form-control load_img_button"  type="file" id="pageDescLoadImg" name="img" accept="image/jpeg,image/png,image/gif">
      </div>
    </div>

    <div class="col-xs-9">
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


<script type="text/template" id="ingridientRowTpl">
  <div class="col-xs-4 ingridient_cell">
    <select>
      <option>Пункт 4</option>
      <option>Пункт 2</option>
      <option>Пункт 3</option>
    </select>
  </div>

  <div class="col-xs-4 ingridient_cell">
    <input type="number">
  </div>

  <div class="col-xs-3 ingridient_cell">
    <select>
      <option>Пункт 1</option>
      <option>Пункт 2</option>
      <option>Пункт 3</option>
    </select>
  </div>

  <div class="col-xs-1 ingridient_cell">
    <input type="checkbox">
  </div>    
</script>


<script type="text/template" id="pageIngridientsTpl">
  <div class="row">
    <div class="col-xs-4"><h4>Порций</h4></div>
    <div class="col-xs-4"><h4>Время</h4></div>  
    <div class="col-xs-3"><h4>Сложность</h4></div>  
    <div class="col-xs-1"><h4>Метод</h4></div>          
  </div>  

  <div class=" ingridients_units" id="ingridientsRows">

  </div>   

  <div class="row">
    <div class="btn btn-xs btn-default pull-right" id="addIngridientBtn">Ещё</div>
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


<script type="text/template" id="tagProcessTpl">
  <input type="checkbox" class="" id="">
  <label class="tag_label" for=""><%= title %></label>
</script>


<script type="text/template" id="pageProcessTpl">
  <div class="row">
    <div class="col-xs-12"><h3>Параметры приготовления</h3></div>
  </div>

  <div class="row">
    <div class="col-xs-3"><h4>Порций</h4></div>
    <div class="col-xs-3"><h4>Время</h4></div>  
    <div class="col-xs-3"><h4>Сложность</h4></div>  
    <div class="col-xs-3"><h4>Метод</h4></div>          
  </div>   

  <div class="row">
    <div class="col-xs-3 process_cell">
      <input class="form-control" type="number" >
    </div>

    <div class="col-xs-3 process_cell">
      <select class="form-control" id="timeUnits"></select>
    </div>  
    
    <div class="col-xs-3 process_cell">
      <select class="form-control" id="complexityUnits"></select>
    </div>  

    <div class="col-xs-3 process_cell">
      <select class="form-control" id="methodUnits"></select>
    </div>          
  </div>      

  <div class="row">
    <div class="col-xs-12"><h3>Тип коктейля</h3></div>
  </div>

  <div class="row">
    <div class="col-xs-4"><h4>По крепкости</h4></div>
    <div class="col-xs-4"><h4>На соснове</h4></div>  
    <div class="col-xs-4"><h4>По типу</h4></div>          
  </div>  

  <div class="row">
    <div class="col-xs-4 process_cell">
      <select class="form-control" id="sturdinessUnits"></select>
    </div>  
    
    <div class="col-xs-4 process_cell">
      <select class="form-control" id="basicUnits"></select>
    </div>  

    <div class="col-xs-4 process_cell">
      <select class="form-control" id="typeUnits"></select>
    </div>          
  </div> 

  <div class="row">
    <div class="col-xs-12"><h3>Теги</h3></div>
  </div>     

  <div class="row" id="tagsProcessUnits"></div>          

  <div class="row navBox" >
    <div class="col-xs-6">
      <a class="btn btn-default prev to_ingridients" href="#page_ingridients">Ингридиенты</a>
    </div>

    <div class="col-xs-6">
      <a class="btn btn-default pull-right next to_stemware" href="#page_stemware">Бокалы</a>
    </div>      
  </div>    
</script>


<script type="text/template" id="stemwareUnitTpl">
  <div class="stemware_unit">
    <img src="images/stemware/<%= img %>" alt="">
    <div class="label">Выбрать</div>
  </div>
</script>

<script type="text/template" id="pageStemwareTpl">
  <div class="row" id="stemwareUnits"></div>             

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
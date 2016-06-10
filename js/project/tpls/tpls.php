<script type="text/template" id="calcTpl">
  <form class="container" id="shippForm">
    <div class="row">
      <div class="col-xs-12"><h1>Доставка</h1></div>
    </div>

    <div class="services_area" id="servicesArea"></div>              

    <div class="row" id="submitBox">
      <div class="col-xs-12">
        <div class="btn btn-primary" id="submitBtn">Рассчитать</div>
      </div>
    </div>   

    <div id="modalsBox"></div> 
  </form>
</script>


<script type="text/template" id="serviceTpl">
  <div class="row">
    <div class="col-xs-1 form-group">
      <input type="checkbox" name="" id="">
    </div>

    <div class="col-xs-4 label_service"></div>   

    <div class="col-xs-1 info_service"></div>       

    <div class="col-xs-6 field_service">
      <div class="field_box"></div>
    </div>   
  </div>   
</script>


<script type="text/template" id="fieldTpl">
  <input class="field hide" type="text" name="" id="">
</script>


<script type="text/template" id="infoTpl">
  <div class="glyphicon glyphicon-info-sign"></div>
  <div class="hint_unit hide"><%= info %></div>
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
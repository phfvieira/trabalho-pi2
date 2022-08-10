function getUrlVar(key) {
  const urlParams = new URLSearchParams(window.location.search);
  const searchText = urlParams.get(key);
  if (!searchText) {
    return '';
  }
  return searchText;
};
$(function () {
  const id = getUrlVar("id");
  $.ajax({
    url: `http://localhost:3333/shirts/${id}`,
    cache: false,
    contentType: false,
    processData: false,
    method: 'GET',
    success: function (data) {
      $('#shirt_picture').append(`<img id="shirt_picture" src="${data.url}" data-zoom-image="../imagem/CamisaDoFlamengoAdidas7550681.png" alt=""></img>`);
  
      $('#shirt_attributes').append(`
        <div class="name_shirt">
          <h2>${data.name}</h2>
        </div>
        <div class="shirt_price">
          <span>A partir de</span>
          <p>${data.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        </div>
        <button id="buy" value="COMPRAR">COMPRAR</button>`
      );
    
      $('#wrapper_details').append(`
        <div class="txt_info" id="txt_description">
          <h3>Descrição:</h3>
          <p>${data.description}</p>
        </div>
        <div class="txt_info" id="txt_composition">
          <h3>Composição:</h3>
          <p>${data.composition}</p>
        </div>`
      );

      console.log(data);
    }
  });
  
});
$(function(){
  
  $("#shirt_picture").mouseover(function(){
    $(this).css("-webkit-transform", "scale(1.2)");
    $(this).css("transform", "scale(1.2)");
  });
  $("#shirt_picture").mouseleave(function(){
    $(this).css("-webkit-transform", "scale(1.0)");
    $(this).css("transform", "scale(1.0)");
  });
  $(function () {
    $('#search_button_main').click(function () {
      const query = $('#search').val();
      if (!query) {
        return;
      }
      window.location.href = `http://127.0.0.1:5500/trabalho-pi2-master/frontend/shirts.html?query=${query.trim()}`;
    });
  });
});

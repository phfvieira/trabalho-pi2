function getUrlVar(key){
  const urlParams = new URLSearchParams(window.location.search);
  const searchText = urlParams.get(key);
  if(!searchText ){
    return '';
  }
  return searchText;
};

function fetchData(inputValue = '') {
  $.get(`http://localhost:3333/shirts?search=${inputValue}`, response => {
    $('#shirts_list').empty();
    
    if(response.length === 0) {
      $('#shirts_list').append('<div> Não encontrado </div>');
      return;
    }

    let html = '';

    response.forEach(shirt => {
      html += `
       <div class="shirt" data-id="${shirt.id}">
         <img src="${shirt.url}" alt="" />
         <p class="name_shirt">
           ${shirt.name}
         </p>
         <p class="value_shirt">
           ${shirt.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
         </p>
       </div>
    `
    })
    $('#shirts_list').append(html);
    $('.shirt').click(function () {
      const id = $(this).data("id");
      console.log(id);
      if (!id) {
        return;
      }
      window.location.href = `http://127.0.0.1:5500/trabalho-pi2-master/frontend/shirt.html?id=${id}`;
    });
  })
};

$(function () {
  const search = getUrlVar('query');
  fetchData(search);
  console.log(search);
  $('#search_button').click(function() {
    const inputValue = $('#search_input').val();
    fetchData(inputValue);
  });
});

$(function(){
  
});
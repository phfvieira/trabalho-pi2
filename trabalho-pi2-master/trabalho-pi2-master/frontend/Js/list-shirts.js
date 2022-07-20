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
       <div class="shirt">
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
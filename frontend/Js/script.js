$(function() {

  // $('#form_shirts').submit(function(ev) {
  //   ev.preventDefault();
  //   const formData = new FormData(ev.target);
  //   const values = [];
  //   formData.forEach((value, key) => values[key] = value);
  //   $.ajax({
  //     url: "http://localhost:3333/shirts",
  //     type: "POST",
  //     data: values,
  //     dataType: 'json',
  //     success: function(response){
  //       console.log(response);        
  //     }
  //   });
  // });
  $( '#form_shirts' )
  .submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:3333/shirts',
      type: 'POST',
      data: new FormData(this),
      processData: false,
      contentType: 'multipart/form-data'
    });
  });
});
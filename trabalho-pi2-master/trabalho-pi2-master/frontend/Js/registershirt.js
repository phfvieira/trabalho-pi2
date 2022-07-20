$(function () {
  $('#form_shirts')
  .submit(function (e) {
    e.preventDefault();
    const data = new FormData(this);
    $.ajax({
      url: 'http://localhost:3333/shirts',
      data: data,
      cache: false,
      contentType: false,
      processData: false,
      method: 'POST',
      success: function (data) {
        console.log(data);
      }
    });
  });
});

let html = '';
$(function () {
  $(".input_config").blur(function () {
    if ($(this).val() == "") {
      $(this).css({
        "border-color": "#F00",
        "width": "100%",
        "padding": "12px",
        "border-radius": "4px",
        "box-sizing": "border-box",
        "margin-bottom": "20px"
      });
    }
    else {
      $(this).css({
        "border-color": "green",
        "width": "100%",
        "padding": "12px",
        "border-radius": "4px",
        "box-sizing": "border-box",
        "margin-bottom": "20px"
      });
    }
  });
  $(".input_login").blur(function () {
    if ($(this).val() == "") {
      $(this).css({
        "border-color": "#F00",
        "width": "70%",
        "padding": "8px",
        "border-radius": "4px",
        "box-sizing": "border-box",
        "margin-bottom": "40px"
      });
    }
    else {
      $(this).css({
        "border-color": "green",
        "width": "70%",
        "padding": "8px",
        "border-radius": "4px",
        "box-sizing": "border-box",
        "margin-bottom": "40px"
      });
    }
  });
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
$(function () {
  $('#btn_register').click(function () {
    const query = $('#input_email').val();
    if (!query) {
      return;
    }
    window.location.href = `http://127.0.0.1:5500/trabalho-pi2-master/frontend/registeruser.html?email=${query.trim()}`;
  });
});
$(function () {
  $('.empty_file').hide();
  $('#btn_sub').click(function () {
    if ($("#input_price").val() == "") {
      $('#input_price').css("margin-bottom", "3px");
      $('#empty_file_price').show();
    }
    if ($("#input_name").val() == "") {
      $('#empty_file_name').show();
      $('#input_name').css("margin-bottom", "3px");
    }
    if ($("#input_composition").val() == "") {
      $('#empty_file_composition').show();
      $('#input_composition').css("margin-bottom", "3px");
    }
    if ($("#input_team").val() == "") {
      $('#empty_file_team').show();
      $('#input_team').css("margin-bottom", "3px");
    }
    if ($("#input_description").val() == "") {
      $('#empty_file_description').show();
      $('#input_description').css("margin-bottom", "3px");
    }
    if ($("#input_img").files.length() === 0) {
      $('#empty_file_img').show();
    }
  });
});


function getUrlVar(key) {
  const urlParams = new URLSearchParams(window.location.search);
  const searchText = urlParams.get(key);
  if (!searchText) {
    return '';
  }
  return searchText;
};

$(document).ready(function () { 
  const $seuCampoCpf = $("#cpf");
  $seuCampoCpf.mask('000.000.000-00', {reverse: true});
});

$(function () {
  const email = getUrlVar("email");
  $('#email').val(email);
  $('#form_user')
    .submit(function (e) {
      e.preventDefault();
      const data = new FormData(this);
      const password = data.get("password");
      const confirmPassword = data.get("confirm_password");
      const cpf = data.get("cpf");
      if(cpf.length < 14){
        $("#check_cpf").html("Tamanho de CPF inválido!");
        return;
      }
      else if (password !== confirmPassword) {
        $("#check_password").html("Senhas devem ser iguais!");
        return;
      }
      else if(password.length < 8){
        $("#check_password").html("O campo Senha deve ter pelo menos 8 caracteres.");
        return;
      }
      else {$.ajax({
        url: 'http://localhost:3333/users',
        data: JSON.stringify(Object.fromEntries(data)),
        cache: false,
        contentType: "application/json",
        processData: false,
        method: 'POST',

        success: function (data) {
          console.log("docin")
          console.log(data);
          window.location.href = `http://127.0.0.1:5500/trabalho-pi2-master/frontend/register.html`;
        },

        error: function (error){
          $.toast({
            heading: 'Error',
            text: error.responseJSON.error,
            showHideTransition: 'fade',
            icon: 'error'
        });
        },
      }).done(function (data) {
        console.log("docin")
        console.log(data);
        window.location.href = `http://127.0.0.1:5500/trabalho-pi2-master/frontend/register.html`;
      },);
      }
    });

});

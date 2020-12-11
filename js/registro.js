$("#registro").on("submit", function(event) {
    event.preventDefault();

    var nombreCompleto = $("input[name=nombreCompleto]").val();
    var username = $("input[name=username]").val();
    var password = $("input[name=passwords]").val();
    var tipoUsuario = $("select[name=tipoUsuario]").val();

    var data = {
        peticion: 'create',
        nombreCompleto: nombreCompleto,
        username: username,
        password: password,
        tipoUsuario: tipoUsuario
    };

    $.ajax({
        type: "post",
        url: 'http://localhost/Backend/usuario.php',
        data: data,
        success: function(response) {
            window.location.href = "login.html";
        }

    });

});
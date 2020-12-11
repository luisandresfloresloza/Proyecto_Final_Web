$("#login").on("submit", function(event) {
    event.preventDefault();

    var username = $("input[name=username]").val();
    var password = $("input[name=passwords]").val();

    var data = {
        peticion: 'verificar',
        username: username,
        password: password
    };

    $.ajax({
        type: "post",
        url: 'http://localhost/Backend/usuario.php',
        data: data,
        success: function(response) {
            window.location = "pagina_principal.html";
        }

    });

});
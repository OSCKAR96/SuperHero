$(document).ready(function() {

    // Manejar el evento de submit del formulario
    $('form').on('submit', function(event) {
        event.preventDefault(); // Prevenir la recarga de la página

        // Obtener el ID ingresado por el usuario
        const heroId = $('input[type="text"]').val();

        // Llamada AJAX para obtener los datos del superhéroe
        $.ajax({
            url: `https://www.superheroapi.com/api.php/4905856019427443/${heroId}`,
            type: "GET",
            dataType: "json",
            success: function(dataHero) {
                console.log(dataHero);

                // Limpiar la lista antes de agregar nuevos datos
                $("#dataHeroe").empty();

                // Mostrar los datos del superhéroe
                const li = $("<li>").text(`Nombre: ${dataHero.name}`);
                $("#dataHeroe").append(li);

                const img = $("<img>").attr("src", dataHero.image.url).attr("alt", `${dataHero.name}`).css("width", "200px");
                $("#dataHeroe").append(img);
            },
            error: function(xhr, status, error) {
                console.error("Error en la solicitud:", status, error);
            }
        });
    });
});

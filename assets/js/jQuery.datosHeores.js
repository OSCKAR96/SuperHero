jQuery.fn.datosHeroes = function (heroId) {
    var element = this;
    $.ajax({
        url: `https://www.superheroapi.com/api.php/4905856019427443/${heroId}`,
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            
            $("#heroName").text(data.name);
            $("#heroImage").attr("src", data.image.url);
            $("#heroPublisher").text(data.biography.publisher);
            $("#heroOccupation").text(data.work.occupation);
            $("#heroFirstAppearance").text(data.biography['first-appearance']);
            $("#heroHeight").text(data.appearance.height.join(", "));
            $("#heroWeight").text(data.appearance.weight.join(", "));
            $("#heroAliases").text(data.biography.aliases.join(", "));

           
            $("#dataHeroe").show();

            
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true, 
                title: {
                    text: "Habilidades de " + data.name
                },
                data: [{
                    type: "pie",
                    startAngle: 240, 
                    dataPoints: [
                        { label: "Inteligencia", y: parseInt(data.powerstats.intelligence) },
                        { label: "Fuerza", y: parseInt(data.powerstats.strength) },
                        { label: "Velocidad", y: parseInt(data.powerstats.speed) },
                        { label: "Durabilidad", y: parseInt(data.powerstats.durability) },
                        { label: "Poder", y: parseInt(data.powerstats.power) },
                        { label: "Combate", y: parseInt(data.powerstats.combat) }
                    ]
                }]
            });
            chart.render();
        },
        error: function () {
            alert("No se pudo encontrar el superhéroe. Asegúrate de que el número ingresado sea correcto.");
        }
    });
}

$(document).ready(function () {
 
    $("#heroForm").on("submit", function (event) {
        event.preventDefault(); 
        var heroId = $("#heroIdInput").val(); 
        $("#dataHeroe").datosHeroes(heroId); 
    });
});

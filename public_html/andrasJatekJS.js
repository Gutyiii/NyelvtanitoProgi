
var randomSzam2 = Math.floor(Math.random() * 100);  //0-99, 100db
var szam = Math.floor(Math.random() * 4);
var egy = 0;
var kerdesSzam = 0;
var szovegObjectum = [];

$(function () {
    $.ajax(
            {
                url: "andrasSzotar.json",
                success: function (result) {
                    console.log(result);
                    szovegObjectum = result;
                    $("#negyKepEgySzo").click(feladatkiiras);
                }
            }
    );


});

function feladatkiiras() {
    $("article").empty();
    $("article").append("<div></div>");


    $("article div").append("<img src=" + szovegObjectum[egy].kep1 + ">");       //nincs kep1-2-3-4 atributuma a szotárnak
    $("article div").append("<img src=" + szovegObjectum[egy].kep2 + "><br>");
    $("article div").append("<img src=" + szovegObjectum[egy].kep3 + ">");
    $("article div").append("<img src=" + szovegObjectum[egy].kep4 + ">");

    $("article").append("<label>Válasz: </label><br>");
    $("article").append("<input type='text' id='valasz' name='valasz' placeholder='valasz'>");
    $("article").append("<input type='button' id='OK' name='OK' value='OK'>");

    $("#OK").click(megoldas);

}

function megoldas() {
    if ($("#valasz").val() === szovegObjectum[egy].magyar || $("#valasz").val() === szovegObjectum[egy].angol || $("#valasz").val() === szovegObjectum[egy].nemet) {
        alert("Jó válasz");
        $("article").empty();
        $("article").append("<div></div>");
        $("article div").append("<input type='button' id='kovetkezo' name='kovetkezo' value='Következő'>");
        kerdesSzam += 1;
        egy++;
        $("#kovetkezo").click(feladatkiiras);
    } else {
        alert("Rossz válasz");
    }
    if (kerdesSzam === 4) {
        $("article").empty();
        $("article").append("<h1>Játék vége</h1>");
        $("article").append("<div></div>");
        $("article div").append("<input type='button' id='ujjatek' name='ujjatek' value='Új játék'>");
        $("#ujjatek").click(feladatkiiras);
    }
}

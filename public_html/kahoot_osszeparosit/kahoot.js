var allatok = [];
var sport = [];
var nyelv = localStorage.getItem("nyelv");

$(function () {
    beolvas();

});

function beolvas() {
    $.ajax(
            {
                url: "allatok.json",
                success: function (result) {
                    console.log(result);
                    allatok = result;
                    kiir();
                    console.log(allatok[0]);
                }
            }
    );
    $.ajax(
            {
                url: "sport.json",
                success: function (result) {
                    console.log(result);
                    sport = result;
                    kiir();
                    console.log(sport[0]);
                }
            }
    );
}

var index = [];

function kiir() {
    $("main").empty();
    $("main").append("<h2>Melyik a kakuktojás?</h2></br>");
    $("main").append("<section></section>");


    allatok.sort(function () {
        return 0.5 - Math.random();
    });
    sport.sort(function () {
        return 0.5 - Math.random();
    });
    if (nyelv==="angol") {
        var kiirTomb = ["<div class=\"allat\">" + allatok[0].angol + "</div>", "<div class=\"allat\">" + allatok[1].angol + "</div>", "<div class=\"sport\">" + sport[1].angol + "</div>"];
    }else if(nyelv==="nemet"){
        var kiirTomb = ["<div class=\"allat\">" + allatok[0].nemet + "</div>", "<div class=\"allat\">" + allatok[1].nemet + "</div>", "<div class=\"sport\">" + sport[1].nemet + "</div>"];
    }else if(nyelv==="magyar"){
        var kiirTomb = ["<div class=\"allat\">" + allatok[0].magyar + "</div>", "<div class=\"allat\">" + allatok[1].magyar + "</div>", "<div class=\"sport\">" + sport[1].magyar + "</div>"];
    }

    kiirTomb.sort(function () {
        return 0.5 - Math.random();
    });

    for (var item in kiirTomb) {
        $("section").append(kiirTomb[item]);
    }


    $("section div").click(ellenoriz);
}
function alapSzin() {
    $("section div").css("background-color", "white");
}

var pont = 0;

function ellenoriz() {
    var i = $(this).attr("class");
    if (pont === 5) {
        $("main").empty();
        $("main").append("<h1>Nyertéll!!</h1></br>").css("font-size", "40px");
        $("main").append("<form><input type=\"button\" name=\"uj\" id=\"uj\" value=\"Új Játék\"></form><br>").css("font-size", "40px");
        } else {
        if (i !== "allat") {
            $(this).css("background-color", "green");
            $(this).css("color", "white");
            $("main").append("<h1>Talált!! :)</h1>").css("font-size", "40px");
            setTimeout(kiir, 2000);
            pont += 1;
        } else {
            $(this).css("background-color", "red");
            setTimeout(alapSzin, 1000);
        }
    }
}

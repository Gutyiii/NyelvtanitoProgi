var sport = [];
var allatok=[];
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
                    parokTombKiir();
                    
                    //console.log(allatok[0]);
                }
            }
    );
    
}

var index = [];
var parokTomb = [];
function parokTombKiir() {
    sport.sort(function () {
        return 0.5 - Math.random();
    });
    allatok.sort(function () {
        return 0.5 - Math.random();
    });
    if (nyelv === "angol") {
        parokTomb = ["<div class=\"0\">" + sport[0].angol + "</div>", "<div class=\"0\">" + sport[0].kep + "</div>", "<div class=\"1\">" + sport[1].angol + "</div>", "<div class=\"1\">" + sport[1].kep + "</div>", "<div class=\"2\">" + sport[2].angol + "</div>", "<div class=\"2\">" + sport[2].kep + "</div>", "<div class=\"3\">" + allatok[3].angol + "</div>", "<div class=\"3\">" + allatok[3].kep + "</div>", "<div class=\"4\">" + allatok[4].angol + "</div>", "<div class=\"4\">" + allatok[4].kep + "</div>", "<div class=\"5\">" + allatok[5].angol + "</div>", "<div class=\"5\">" + allatok[5].kep + "</div>"];
    } else if (nyelv === "nemet") {
        parokTomb = ["<div class=\"0\">" + sport[0].nemet + "</div>", "<div class=\"0\">" + sport[0].kep + "</div>", "<div class=\"1\">" + sport[1].nemet + "</div>", "<div class=\"1\">" + sport[1].kep + "</div>", "<div class=\"2\">" + sport[2].nemet + "</div>", "<div class=\"2\">" + sport[2].kep + "</div>", "<div class=\"3\">" + allatok[3].nemet + "</div>", "<div class=\"3\">" + allatok[3].kep + "</div>", "<div class=\"4\">" + allatok[4].nemet + "</div>", "<div class=\"4\">" + allatok[4].kep + "</div>", "<div class=\"5\">" + allatok[5].nemet + "</div>", "<div class=\"5\">" + allatok[5].kep + "</div>"];
    } else if (nyelv === "magyar") {
        parokTomb = ["<div class=\"0\">" + sport[0].magyar + "</div>", "<div class=\"0\">" + sport[0].kep + "</div>", "<div class=\"1\">" + sport[1].magyar + "</div>", "<div class=\"1\">" + sport[1].kep + "</div>", "<div class=\"2\">" + sport[2].magyar + "</div>", "<div class=\"2\">" + sport[2].kep + "</div>", "<div class=\"3\">" + allatok[3].magyar + "</div>", "<div class=\"3\">" + allatok[3].kep + "</div>", "<div class=\"4\">" + allatok[4].magyar + "</div>", "<div class=\"4\">" + allatok[4].kep + "</div>", "<div class=\"5\">" + allatok[5].magyar + "</div>", "<div class=\"5\">" + allatok[5].kep + "</div>"];
    }
    
    parokTomb.sort(function () {
        return 0.5 - Math.random();
    });
    kiir();
}

function kiir() {
    $("main").empty();
    $("main").append("<h2>Összepárosítós feladat</h2></br>");
    $("main").append("<section></section>");
//    for (var i = 0; i < 6; i++) {
//        parokTomb.push(sport[i].angol);
//        var kep = sport[i].kep;
//        kep += "alt=\"" + sport[i].angol + "\">";
//        parokTomb.push(kep);
//    }

    console.log(parokTomb);
    for (var item in parokTomb) {

        $("section").append(parokTomb[item]);
    }

    $("section div").click(ellenoriz);
}

var lepes = 0;
var i1;
var i2;
var pont =0;
function ellenoriz() {
    $(this).css("border", "5px solid green");
    lepes++;

    if (lepes % 2 === 0) {
        i2 = $(this).attr("class");
        console.log(i2, i1);
        if (i1 === i2) {
            $(this).css("background-color", "green");
            $(this).css("color", "white");
            pont+=1;
            
        } else {
            $("section div").css("background-color", "red");
            $("section div").css("border", "5px solid red");
            setTimeout(kiir, 2000);
            pont=0;
        }
    } else {
        i1 = $(this).attr("class");
        $(this).css("background-color", "green");
        $(this).css("color", "white");
    }
    if (pont===6) {
        $("main").empty();
        $("main").append("<h1>Nyertél!!</h1></br>").css("font-size", "40px");
        $("main").append("<form><input type=\"button\" name=\"uj\" id=\"uj\" value=\"Új Játék\"></form><br>").css("font-size", "40px");
        pont=0;
    }
    $("#uj").click(parokTombKiir);
    

}

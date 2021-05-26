
var tomb = [];
var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var adatObjektum = [];
var jo = 0;
var akasztas = 0;
var talalt = false;
$(function () {
    beolvas();
    akaszto();
    betu();
    $(".betuk").click(ellenoriz);
});

function beolvas() {
    $.ajax(
            {
                url: "nyelvek.json",
                success: function (result) {
//                    console.log(result);
                    adatObjektum = result;
//                  kiir();
                    kivalaszt();

                }
            }
    );
}
function akaszto() {
    $("section").empty();
    $("section").append('<img src="képekAkaszto/akaszto' + akasztas + '.PNG" alt="" width="500" height="300" />');

}
function  kivalaszt() {
    var szo = Math.floor(Math.random() * adatObjektum.length);
    console.log("ez az" + szo);

    var nyelv = 0;
    var i = 1;
    for (var index in adatObjektum) {
        if (szo === i) {

            for (var item in adatObjektum[index]) {
                if (nyelv === 2) {
                    console.log("belso " + adatObjektum[index][item]);
                    tomb = adatObjektum[index][item];

                }

                nyelv++;

            }

        }

        i++;
    }
    console.log(tomb.length);
    for (var i = 0; i < tomb.length; i++) {
        $("article #palya").append('<label id="palya' + i + '">-</label>');
        console.log(tomb.length);
    }
}
function betu() {
    for (var i = 0; i < abc.length; i++) {
        $("article").append('<input type="button" class="betuk" id="' + i + '" name="' + abc[i] + '" value="' + abc[i] + '">');
    }
}
function ellenoriz() {
    var i = $(this).attr("id");
    var csere;
    console.log(abc[i]);
    var keres = abc[i];
    torol(i);
    for (var item in tomb) {
        if (keres === tomb[item]) {
            console.log("tőkéletes");
            csere = item;
            kicserel(csere);
            jo++;
            talalt = true;
        }


    }
    if (talalt === false) {

        akasztas++;
        akaszto();

    } else {
        talalt = false;
    }
    if (jo === tomb.length || akasztas === 12) {
        for (var i = 0; i < abc.length; i++) {
            torol(i);
        }
        $("article").append('<input type="button" id="újra" name="újra" value="újra">');
        $("#újra").click(ujJatek);
    }


}
function ujJatek() {
    jo = 0;
    akasztas = 0;
    $("article").empty();
    $("article").append('<div id="palya"></div>');
    kivalaszt();
    akaszto();
    betu();
    $(".betuk").click(ellenoriz);

}
function torol(i) {

    $("#" + i + "").remove();
}
function kicserel(csere) {

    $("#palya" + csere + "").text(tomb[csere]);
}
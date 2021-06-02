var elozo=[];
var tomb=[];
var adatObjektum = [];
var elso;
$(function () {
    beolvas();
   
});

function beolvas() {
    $.ajax(
            {
                url: "nyelvek.json",
                success: function (result) {
//                  
                    adatObjektum = result;
                 kivalaszt();
randomSorend();
kiiras();
                }
            }
    );
}

function  kivalaszt() {
    var szo = Math.floor(Math.random() * adatObjektum.length);
    console.log("ez az " + szo);
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
}
function randomSorend(){
    
    
    var randSzo=[];
    elozo=[];
    var szo = Math.floor(Math.random() * tomb.length);
    for (var i = 0; i < tomb.length; i++) {
        elozo[i]=i;
    }
    elozo.sort(function(a, b){return 0.5 - Math.random()});
    for (var i = 0; i < elozo.length; i++) {
        console.log(elozo[i]);
    }
//    for (var i = 0; i < elozo.length; i++) {
//        console.log(tomb[elozo[i]]);
//    }     
}
function kiiras(){
    for (var i = 0; i < tomb.length; i++) {
         $("article #palya").append('<label id="palya' + i + '">'+tomb[elozo[i]]+'</label>');
    }
     $("article").append('<input type="text" id="bevitel" name="bevitel">');
     $("article").append('<input type="button" id="ellenoriz" name="ellenoriz" value="ellenoriz">');
     $("#ellenoriz").click(ellenoriz);
      elso=true;
}

function ellenoriz(){
   var ertek= $("#bevitel").val();
    console.log(ertek);
    if (ertek===tomb){
        console.log("működik");
        $("#visszaJelzes").empty();
        $("#visszaJelzes").append('<p>gratulálok eltaláltad</p>');
        if(elso===true){
            $("article").append('<input type="button" id="ujra" name="ujra" value="újra">');
        elso=false;
        }
        $("#ujra").click(ujra);
    }
    else{
        console.log("haszna vehetettlen barom");
        $("#visszaJelzes").empty();
        $("#visszaJelzes").append('<p>hát ez nem sikerült probáld újra</p>');
    }
}
function ujra(){
    $("article").empty();
    $("article").append('<div id="palya"></div>');
    $("article").append('<div id="visszaJelzes"></div>');
    kivalaszt();
randomSorend();
kiiras();
}

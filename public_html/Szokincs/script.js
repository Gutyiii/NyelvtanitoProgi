var json = '[{"magyar":"krumpli","angol": "potato","nemet": "kartoffel"},{"magyar":"alma","angol":"apple","nemet":"apfel"},{"magyar":"torta","angol": "cake","nemet": "kuchen"},{"magyar":"hús","angol": "meat","nemet": "fleisch"},{"magyar":"szendvics","angol": "sandwich","nemet": "sandwich"},{"magyar":"leves","angol": "soup","nemet": "suppe"},{"magyar":"zöldség","angol": "vegetable","nemet": "gemüse"},{"magyar":"sajt","angol": "cheese","nemet": "käse"},{"magyar":"paradicsom","angol": "tomato","nemet": "tomate"},{"magyar":"eper","angol": "strawberry","nemet": "erdbeere"},{"magyar":"mogyoró","angol": "hazelnuts","nemet": "haselnüsse"},{"magyar":"csokoládé","angol": "chocolate","nemet": "schokolade"},{"magyar":"zab","angol": "oat","nemet": "hafer"},{"magyar":"csirke","angol": "chicken","nemet": "hähnchen"}]';
var tomb = JSON.parse(json);
var seged = [];
var hianyzik = [];

$(function () {
    $("article").append("<table></table>");
    $("table").append("<tr><th>Magyar</th><th>Angol</th><th>Német</th>");
    for (var i = 0; i < tomb.length; i++) {
        random = Math.floor(Math.random() * 3);

        if (random === 0) {
            $("article table").append("<tr><td>" + tomb[i].magyar + "</td>" + '<td><input type="text" value="" id="' + i + '"></td>' + "<td>" + tomb[i].nemet + "</td></tr>");
            hianyzik.push(1);
        }
        if (random === 1) {
            $("article table").append('<tr><td><input type="text" value="" id="' + i + '"></td>' + "<td>" + tomb[i].angol + "</td>" + "<td>" + tomb[i].nemet + "</td></tr>");
            hianyzik.push(0);
        }
        if (random === 2) {
            $("article table").append("<tr><td>" + tomb[i].magyar + "</td>" + "<td>" + tomb[i].angol + "</td>" + '<td><input type="text" value="" id="' + i + '"></td>');
            hianyzik.push(2);
        }

    }
    console.log(hianyzik);

    $("#ok").click(ellenorzes);
    $("#reset").click(ujraindit);
});

function ellenorzes() {
    var helyesvalasz = 0;
    var rosszvalasz = 0;
    for (var i = 0; i < $("table tr").length; i++) {
        if (seged[i] !== $("table input").eq(i).val()) {
            seged.push($("table input").eq(i).val());
        }


        if (hianyzik[i] === 0 && seged[i] === tomb[i].magyar) {

            helyesvalasz++;
            $("table input").eq(i).closest("td").css("background-color", "green");
            $("table input").eq(i).attr("disabled", "disabled");
        }
        if (hianyzik[i] === 0 && seged[i] !== tomb[i].magyar) {
            $("table input").eq(i).closest("td").css("background-color", "red");
               $("table input").eq(i).attr("value", tomb[i].magyar);
            $("table input").eq(i).attr("disabled", "disabled");
            rosszvalasz++;
        }



        if (hianyzik[i] === 1 && seged[i] === tomb[i].angol) {
            helyesvalasz++;
            $("table input").eq(i).closest("td").css("background-color", "green");
            $("table input").eq(i).attr("disabled", "disabled");
        }
        if (hianyzik[i] === 1 && seged[i] !== tomb[i].angol) {
            $("table input").eq(i).closest("td").css("background-color", "red");
               $("table input").eq(i).attr("value", tomb[i].angol);
            $("table input").eq(i).attr("disabled", "disabled");
            rosszvalasz++;
        }



        if (hianyzik[i] === 2 && seged[i] === tomb[i].nemet) {
            helyesvalasz++;
            $("table input").eq(i).closest("td").css("background-color", "green");
            $("table input").eq(i).attr("disabled", "disabled");
        }
        if (hianyzik[i] === 2 && seged[i] !== tomb[i].nemet) {
            $("table input").eq(i).closest("td").css("background-color", "red");
            $("table input").eq(i).attr("value", tomb[i].nemet);
            $("table input").eq(i).attr("disabled", "disabled");
            rosszvalasz++;
        }

    }


    alert("Helyes válaszaid száma: "+helyesvalasz+ "\n"+"Rossz válaszaid száma: "+rosszvalasz);
}
function ujraindit() {
    window.location.reload();
}


$(function () {
    $(".multi-button button").click(nyelv);
    
});

function nyelv(){
    id=$(this).attr("id");
    localStorage.setItem("nyelv", id);
    var koszontes="";
    if (id==="magyar") {
        koszontes="Üdvözlünk";
    }
    if (id==="angol"){
        koszontes="Welcome";
    }
    if (id==="nemet"){
        koszontes="Herzlich wilkommen";        
    }
    if ($("#nev").val() !== "") {
        $("h1").eq(0).html(koszontes+" "+$("#nev").val()+"!");
    }else{
        $("h1").eq(0).html(koszontes+"!");
    }
    setTimeout(lapValtas, 2000);
}
function lapValtas(){
    window.location.href = "menu/menu.html";
}
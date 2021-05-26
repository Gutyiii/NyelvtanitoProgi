$(function () {
    $(".multi-button").click(nyelv);

});

function nyelv(){
    id=$(this).attr("id");
    localStorage.setItem("nyelv", id);
}
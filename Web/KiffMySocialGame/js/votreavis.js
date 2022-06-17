var contenue="";
contenue=document.location.search;
function avis() {
    var Genre="";
    contenue.split("&");
    for (var i = 0; i < contenue.length; i++) {
        if (contenue[i] == getElementsByName('gender')) {
        Genre=contenue[i];
        console.log(Genre);
        }
    }
    document.body.innerHTML = contenue;
}
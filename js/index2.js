/*$('#check').click(function input(){
    var placeName = $('input[name = "place name"]:checked').val();
    var genreName = $('input[name = "genre name"]:checked').val();

    //window.location.href='../html/store_rating_list.html';

    $("#test").html(placeName + genreName)
    return {placeName:placeName, genreName:genreName}
}) */


function getUrlParam(param){
    var pageUrl = window.location.search.substring(1);
    var urlVar = pageUrl.split('&');
    for (var i = 0; i < urlVar.length; i++){
        var paramName = urlVar[i].split('=');
        if (paramName[0] == param) {
            return decodeURI(paramName[1]);
        }
    }
}

var placeName = getUrlParam("place+name");
var genreName = getUrlParam("genre+name");
$("#test2").html(placeName + "周辺の" + genreName + "ランキング")


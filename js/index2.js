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

/*function getJsonData(){
    $.getJSON("../json/testData.json",function(shopData){
        alert("rating:" + shopData[0].rating);
        //var len = shopData.length;
        //var list = $("#shopList");

        //for(var i = 0; i < len; i++) {
        //    list.append($("<li>").attr({"順位":shopData[i].ranking}));
        //  }

    })
};*/

$.getJSON("../json/testData.json") // json読み込み開始
  .done(function(json){ // jsonの読み込みに成功した時
    alert("rating:"+json[1].rating);
  })
  .fail(function(){ // jsonの読み込みに失敗した時
    alert('失敗');
  });

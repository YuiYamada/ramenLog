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
$("#test2").html(placeName + "人気" + genreName +"ラーメン店！")

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

$.getJSON("../json/shopData.json") // json読み込み開始
  .done(function(json){ // jsonの読み込みに成功した時
    makeList(json,getUrlParam("place+name"),getUrlParam("genre+name"));
  })
  .fail(function(){ // jsonの読み込みに失敗した時
    alert('失敗');
  });

function makeList(json,placeName,genreName){
    var resultHTML = "<ul>";
    var imgWidth = "300";
    var imgHeight = "150";
    for (var i = 0; i < json.length; i++) {
        
        //ratingがないのものは「---」に表示変更
        var rating = json[i].rating;
        var shopName = json[i].shopName;
        var genre = json[i].genre;
        var place = json[i].place;
        var imgURL = json[i].img[1].imgURL;
        var detailUrl = "../html/store_detail.html" + "?" + "shopName" + "=" +shopName;
        //if(rating == undefined) rating = "---";
        
        if((placeName === place || placeName === "") && (genreName === genre || genreName === "")){
            //表示内容（評価＋名称）
            var content =  "<img src=" + imgURL + " " + "width=" + imgWidth + "height=" + imgHeight + ">"
             + "  店舗名：" + shopName.link(detailUrl) + "  ★" +rating ;
            
            resultHTML += "<li>";
            resultHTML += content;
            resultHTML += "</li>";
        }
    }
    resultHTML += "</ul>";
    //結果表示
    document.getElementById("shopList").innerHTML = resultHTML;
}

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
    if(urlVar == ''){
        return "";
    }else{
        for (var i = 0; i < urlVar.length; i++){
            var paramName = urlVar[i].split('=');
            if (paramName[0] == param) {
                return decodeURI(paramName[1]);
            }
        }
    }
    
}

var placeName = getUrlParam("place+name");
var genreName = getUrlParam("genre+name");
var selectPlace = $('input:radio[name = "place name"]:checked').val();
var selectGenre = $('input:radio[name = "genre name"]:checked').val();
$("#test2").html(selectPlace + "人気" + selectGenre +"ラーメン店！")

//初期化ボタン
$('#delete').click(function(){
    $.getJSON("../json/shopData3.json").done(function(json){
        let json_data = JSON.stringify(json);
        localStorage.setItem('data', json_data);
        makeList(json,placeName,genreName)
    })
});

//読み込み時リスト作成
$(function(){

    $('[name *= "name"]').click(function() {
		var selectPlace = $('input:radio[name = "place name"]:checked').val();
        var selectGenre = $('input:radio[name = "genre name"]:checked').val();
        var selectFav = $('input:radio[name = "fav name"]:checked').val();
        $("#test2").html(selectPlace + "人気" + selectGenre +"ラーメン店！")
        if(selectFav == 0){
            makeList(loadLocal(),selectPlace,selectGenre);
        }else{
            makeFavList(loadLocal(),selectPlace,selectGenre);
        }
	});
    makeList(loadLocal(),placeName,genreName);
    
})

//リスト作成関数
function makeList(json,placeName,genreName){
    $("#shopList").empty();
    var resultHTML = '<ul class="allList">';
    var imgWidth = "200";
    var imgHeight = "100";
    for (var i = 0; i < json.length; i++) {
        
        var rating = json[i].rating;
        var shopName = json[i].shopName;
        var genre = json[i].genre;
        var place = json[i].place;
        var imgURL = json[i].shopImgURL;
        var id = json[i].id;
        var check = json[i].checked;
        var detailUrl = "../html/store_detail.html" + "?" + "shopName" + "=" +shopName;

        //if(rating == undefined) rating = "---";
        
        if((placeName === place || placeName === "") && (genreName === genre || genreName === "")){
            //表示内容（評価＋名称）
            var content =  "<img src=" + imgURL + " " + "width=" + imgWidth + " " + "height=" + imgHeight + " class=img" + ">"
             + "<br>"
             + shopName +"<br>"+ "  ★" + rating +"<br>";

            if(check==0){
                var bookMark = "<input type=" + "checkbox" + " " +"id=" + id + " name=shop class=checkbox>" 
            }else{
                var bookMark = "<input type=" + "checkbox" + " " +"id=" + id + " name=shop class=checkbox checked>"
            }
            
            resultHTML += '<li class="list">' + '<a href=' +detailUrl +'>';
            resultHTML += content;
            resultHTML += "<label>" + bookMark + "おきにいり" + "</label>" + '</a>';
            resultHTML += "</li>";
        }
    }
    resultHTML += "</ul>";
    //結果表示
    document.getElementById("shopList").innerHTML = resultHTML;
}

//お気に入りリスト作成
function makeFavList(json,placeName,genreName){
    $("#shopList").empty();
    var resultHTML = "<ul>";
    var imgWidth = "300";
    var imgHeight = "150";
    for (var i = 0; i < json.length; i++) {
        
        var rating = json[i].rating;
        var shopName = json[i].shopName;
        var genre = json[i].genre;
        var place = json[i].place;
        var imgURL = json[i].shopImgURL;
        var id = json[i].id;
        var check = json[i].checked;
        var detailUrl = "../html/store_detail.html" + "?" + "shopName" + "=" +shopName;
        //if(rating == undefined) rating = "---";
        
        if((placeName === place || placeName === "") && (genreName === genre || genreName === "") && check == 1){
            //表示内容（評価＋名称）
            var content =  "<img src=" + imgURL + " " + "width=" + imgWidth + "height=" + imgHeight + ">"
             + "  店舗名：" + shopName.link(detailUrl) + "  ★" + rating ;

            if(check==0){
                var bookMark = "<input type=" + "checkbox" + " " +"id=" + id + " name=shop>"
            }else{
                var bookMark = "<input type=" + "checkbox" + " " +"id=" + id + " name=shop checked>"
            }
            
            
            resultHTML += "<li>"
            resultHTML += content;
            resultHTML += bookMark;
            resultHTML += "</li>";
        }
    }
    resultHTML += "</ul>";
    //結果表示
    document.getElementById("shopList").innerHTML = resultHTML;
}

//ローカルストレージにデータあればロード　無ければアップする
function loadLocal(){
    var data = localStorage.getItem("data");
    if(data){
            console.log(data);
            return JSON.parse(data);
    }else{
        $.getJSON("../json/shopData3.json").done(function(json){
            let json_data = JSON.stringify(json);
            localStorage.setItem('data', json_data);
            return json;
        })
    }
}


$(function(){
    $('input[name="shop"]').change(function(){
        var json = loadLocal();
            $('input[name="shop"]:checked').each(function() {
                var r = $(this).attr("id");
                json[r].checked = 1;
            })
            $('input[name="shop"]:not(:checked)').each(function() {
                var r = $(this).attr("id");
                json[r].checked = 0;
            })
        
        let json_data = JSON.stringify(json);
        console.log(json_data);
        localStorage.setItem('data', json_data);
        
    });
});
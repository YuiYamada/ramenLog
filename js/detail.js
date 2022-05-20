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

var shopName = getUrlParam("shopName");
$("#shopName").html(shopName);


$.getJSON("../json/shopData.json") // json読み込み開始
  .done(function(json){ // jsonの読み込みに成功した時
    makeList(json);
  })
  .fail(function(){ // jsonの読み込みに失敗した時
    alert('失敗');
  });

function makeList(json){
  var imgWidth = "300";
  var imgHeight = "150";
    for (var i = 0; i < json.length; i++) {
      if(getUrlParam("shopName")==json[i].shopName){
          
          //jsonファイルの情報を取得
          var rating = json[i].rating;
          var shopName = json[i].shopName;
          var genre = json[i].genre;
          var place = json[i].place;
          var tenpoImg = json[i].img[0].imgURL;
          var img1 = json[i].img[1].imgURL;
          var img2 = json[i].img[2].imgURL;

          var info = json[i].info.shopInfo;
          var shopURL = json[i].info.shopURL;

          var mapURL = json[i].map.mapURL;
          var address = json[i].map.address;

          var mapWidth = "600";
          var mapHeight = "450";
          var mapStyle = "border:0;";
          var mapAllow = "";
          var mapLoad = "lazy";
          var mapRe = "no-referrer-when-downgrade";

          var mou = json[i].mou;
          
          //トップ画面表示内容作成
          var topContents = "<img src=" + tenpoImg + " " + "width=" + imgWidth + "height=" + imgHeight + ">" +
          "<img src=" + img1 + " " + "width=" + imgWidth + "height=" + imgHeight + ">" +
          "<img src=" + img2 + " " + "width=" + imgWidth + "height=" + imgHeight + ">" +
          "<li>" + "評価：　" + rating + "</li>" +
          "<li>" +"店舗説明：　" + info + "</li>";

          //口コミ表示内容作成
          var mouContents = "";
          for(var k = 0; k < mou.length; k++){
            var mouInfo = mou[k].mouInfo;
            var star = mou[k].mouRating;
            var content = "<li>" + "評価：　" + star + "<br>" + "内容：　" + mouInfo +"</li>";
            mouContents += content;
          }

          //マップ表示内容作成
          var iframeHtml = "<iframe src =" + mapURL + "width=" + mapWidth + "height=" + mapHeight + "style=" + mapStyle + "allowfullscreen=" + mapAllow +
          "loading=" + mapLoad + "referrerpolicy=" + mapRe + "></iframe>"
          var mapContents = "住所：　" + address + "<br>" + "マップ：　" + iframeHtml;
          
      }
      //結果表示
      document.getElementById("topList").innerHTML = "<ul>" + topContents + "</ul>";
      document.getElementById("mouList").innerHTML = "<ul>" + mouContents + "</ul>";
      document.getElementById("mapList").innerHTML = mapContents;
      }
      
}

//URLから値を取得する関数
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


$.getJSON("../json/shopData3.json") // json読み込み開始
  .done(function(json){ // jsonの読み込みに成功した時
    makeList(json);
  })
  .fail(function(){ // jsonの読み込みに失敗した時
    alert('失敗');
  });

//☆作
function makeStar(rating){
  var Srating = "";
  if(4.6<=rating){
      Srating="★★★★★　";
  }else if(3.6<=rating&&rating<=4.5){
      Srating="★★★★☆　";
  }else if(2.6<=rating&&rating<=3.5){
      Srating="★★★☆☆　";
  }else if(1.6<=rating&&rating<=2.5){
      Srating="★★☆☆☆　";
  }else if(0.6<=rating&&rating<=1.5){
      Srating="★☆☆☆☆　";
  }else if(0<=rating&&rating<=0.5){
      Srating="☆☆☆☆☆　";
  }
  return Srating;
}

function makeList(json){
  var imgWidth = "300";
  var imgHeight = "150";
    for (var i = 0; i < json.length; i++) {
      if(getUrlParam("shopName")==json[i].shopName){
          
          //jsonファイルの情報を取得
          var rating = json[i].rating;
          var star5 = makeStar(rating);
          var shopName = json[i].shopName;
          var genre = json[i].genre;
          var place = json[i].place;
          var tenpoImg = json[i].shopImgURL;
          var img1 = json[i].img[0].imgURL;
          var img2 = json[i].img[1].imgURL;

          var menuName1 = json[i].img[0].menuName;
          var menuName2 = json[i].img[1].menuName;
          
          var menuPrice1 = json[i].img[0].menuPrice;
          var menuPrice2 = json[i].img[1].menuPrice;
          
          var menuInfo1 = json[i].img[0].menuInfo;
          var menuInfo2 = json[i].img[1].menuInfo;

          var info = json[i].info.shopInfo;
          var shopURL = json[i].info.shopURL;

          var mapURL = json[i].map.mapURL;
          var address = json[i].map.address;

          var mapWidth = "600";
          var mapHeight = "400";
          var mapStyle = "border:0;";
          var mapAllow = "";
          var mapLoad = "lazy";
          var mapRe = "no-referrer-when-downgrade";

          var mou = json[i].mou;
          
          //トップ画面表示内容作成
          var topContents = "<img src=" + tenpoImg + " " + " width=" + imgWidth + " height=" + imgHeight + ' class="img1"' +">" +
          "<img src=" + img1 + " " + " width=" + imgWidth + " height=" + imgHeight + ' class="img2"' + ">" +
          "<img src=" + img2 + " " + " width=" + imgWidth + " height=" + imgHeight + ' class="img3"' + ">" +
          "<li class='rating'>" + "<div class='starRating'>" + "<div class='star'>" + star5 + "</div>" + rating + "</div>" +"</li>" +
          "<li class='shopInfo'>" + info + "</li>" ;

          var menuContents =  "<li class='menuInfo1'>" + "<h3>" + menuName1 + "</h3>" + "<br>" + "値段:  " + menuPrice1  + "<br>" + menuInfo1 + "</li>";
          menuContents +=  "<li class='menuInfo2'>" + "<h3>" + menuName2 + "</h3>" + "<br>" + "値段:  " + menuPrice2 + "<br>" + menuInfo2 + "</li>";
          menuContents +=  "<img src='../image/menu_chumon_family.png' class='menuImg'>";

          topContents = '<div class="topContents">' + topContents + menuContents + '</div>';

          //口コミ表示内容作成
          var mouContents = "<img src='../image/gourmet_writer_woman.png' class='reviewr1'>";
          mouContents += "<img src='../image/gourmet_writer_man.png' class='reviewr2'>";
          for(var k = 0; k < mou.length; k++){
            var mouInfo = mou[k].mouInfo;
            var star = mou[k].mouRating;
            var mouStar = makeStar(star);
            var mouName = mou[k].mouName;
            var content = "<li class=mou" + k + ">" + "<div class='mou-rating'>" + "<div class='star-color'>" + mouStar + "</div>" + "<div class='Rating'>" + star + "</div>" + "<div class='mou-name'>" + "投稿者：　" + mouName + "さん" + "</div>" + "</div>" + "<p>" + "内容：　" + mouInfo + "</p>" + "</li>";
            mouContents += content;
          }

          //マップ表示内容作成
          var iframeHtml = "<iframe class='map'  src =" + mapURL + " width=" + mapWidth + " height=" + mapHeight +  "allowfullscreen=" + mapAllow +
          "loading=" + mapLoad + "referrerpolicy=" + mapRe + "></iframe>"
          var mapContents = "<div class='address'>" + "<div class='address-img'>" + "<h3>" + address + "</h3>" + "<img src = '../image/smartphone_map_app_man.png' class = 'mapIllsut'>" +  "</div>" + "</div>" + "<br>" + " " + iframeHtml;
          
          
      }
      //結果表示
      document.getElementById("topList").innerHTML = "<ul>" + topContents + "</ul>";
      document.getElementById("mouList").innerHTML = "<ul>" + mouContents + "</ul>";
      document.getElementById("mapList").innerHTML = mapContents;
      }
      
}

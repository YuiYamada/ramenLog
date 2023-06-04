//URLから値を取得する関数
function getUrlParam(param) {
  var pageUrl = window.location.search.substring(1);
  var urlVar = pageUrl.split("&");
  if (urlVar == "") {
    return "";
  } else {
    for (var i = 0; i < urlVar.length; i++) {
      var paramName = urlVar[i].split("=");
      if (paramName[0] == param) {
        return decodeURI(paramName[1]);
      }
    }
  }
}

//変数へ場所とジャンルの名前をいれる
var placeName = getUrlParam("place+name");
var genreName = getUrlParam("genre+name");

//絞り込みメニューを選択したとき値を取得　HTMLへ入力
var selectPlace = $('input:radio[name = "place name"]:checked').val();
var selectGenre = $('input:radio[name = "genre name"]:checked').val();
$("#test2").html(selectPlace + "人気" + selectGenre + "ラーメン店！");

//お気に入りしたものの初期化ボタン
$("#delete").click(function () {
  $.getJSON("../json/shopData3.json").done(function (json) {
    let json_data = JSON.stringify(json);
    localStorage.setItem("data", json_data);
    makeList(json, placeName, genreName);
  });
});

//絞り込みメニュークリック時リスト作成
$(function () {
  $('[name *= "name"]').click(function () {
    var selectPlace = $('input:radio[name = "place name"]:checked').val();
    var selectGenre = $('input:radio[name = "genre name"]:checked').val();
    var selectFav = $('input:radio[name = "fav name"]:checked').val();
    $("#test2").html(selectPlace + "人気" + selectGenre + "ラーメン店！");
    if (selectFav == 0) {
      makeList(loadLocal(), selectPlace, selectGenre);
    } else {
      makeFavList(loadLocal(), selectPlace, selectGenre);
    }
  });
  makeList(loadLocal(), placeName, genreName);
});

//☆作
function makeStar(rating) {
  var Srating = "";
  if (4.6 <= rating) {
    Srating = "★★★★★　";
  } else if (3.6 <= rating && rating <= 4.5) {
    Srating = "★★★★☆　";
  } else if (2.6 <= rating && rating <= 3.5) {
    Srating = "★★★☆☆　";
  } else if (1.6 <= rating && rating <= 2.5) {
    Srating = "★★☆☆☆　";
  } else if (0.6 <= rating && rating <= 1.5) {
    Srating = "★☆☆☆☆　";
  } else if (0 <= rating && rating <= 0.5) {
    Srating = "☆☆☆☆☆　";
  }
  return Srating;
}

//リスト作成関数
function makeList(json, placeName, genreName) {
  //リスト初期化
  $("#shopList").empty();
  var resultHTML = '<ul class="allList">';
  var imgWidth = "200";
  var imgHeight = "100";
  for (var i = 0; i < json.length; i++) {
    var rating = json[i].rating;
    var shopName = json[i].shopName;
    var genre = json[i].genre;
    var place = json[i].place;
    var imgURL = json[i].topShopImgURL;
    var id = json[i].id;
    var check = json[i].checked;
    var detailUrl =
      "html/store_detail.html" + "?" + "shopName" + "=" + shopName;
    var star = makeStar(rating);

    if (
      (placeName === place || placeName === "") &&
      (genreName === genre || genreName === "")
    ) {
      //表示内容（評価＋名称）
      var content =
        "<img src=" +
        imgURL +
        " " +
        "width=" +
        imgWidth +
        " " +
        "height=" +
        imgHeight +
        " class=img" +
        ">" +
        "<br>" +
        "<h3 class='shopName'>" +
        shopName +
        "</h3>" +
        "<div class='rate'>" +
        "<div class='star'>" +
        star +
        "</div>" +
        rating +
        "</div>" +
        "<br>";

      if (check == 0) {
        var bookMark =
          "<input type=" +
          "checkbox" +
          " " +
          "id=" +
          id +
          " name=shop class=checkbox>";
      } else {
        var bookMark =
          "<input type=" +
          "checkbox" +
          " " +
          "id=" +
          id +
          " name=shop class=checkbox checked>";
      }

      resultHTML += '<li class="list">' + "<a href=" + detailUrl + ">";
      resultHTML += content;
      resultHTML +=
        "<label class='check-box' for= " +
        id +
        ">" +
        bookMark +
        "<span class='check-text'>" +
        "</span>" +
        "</label>" +
        "</a>";
      resultHTML += "</li>";
    }
  }
  resultHTML += "</ul>";
  //結果表示
  document.getElementById("shopList").innerHTML = resultHTML;
}

//お気に入りリスト作成
function makeFavList(json, placeName, genreName) {
  $("#shopList").empty();
  var resultHTML = "<ul>";
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
    var detailUrl =
      "../html/store_detail.html" + "?" + "shopName" + "=" + shopName;
    var star = makeStar(rating);

    if (
      (placeName === place || placeName === "") &&
      (genreName === genre || genreName === "") &&
      check == 1
    ) {
      //表示内容（評価＋名称）
      var content =
        "<img src=" +
        imgURL +
        " " +
        "width=" +
        imgWidth +
        " " +
        "height=" +
        imgHeight +
        " class=img" +
        ">" +
        "<br>" +
        "<h3 class='shopName'>" +
        shopName +
        "</h3>" +
        "<div class='rate'>" +
        "<div class='star'>" +
        star +
        "</div>" +
        rating +
        "</div>" +
        "<br>";

      if (check == 0) {
        var bookMark =
          "<input type=" +
          "checkbox" +
          " " +
          "id=" +
          id +
          " name=shop class=checkbox>";
      } else {
        var bookMark =
          "<input type=" +
          "checkbox" +
          " " +
          "id=" +
          id +
          " name=shop class=checkbox checked>";
      }

      resultHTML += '<li class="list">' + "<a href=" + detailUrl + ">";
      resultHTML += content;
      resultHTML +=
        "<label class='check-box' for= " +
        id +
        ">" +
        bookMark +
        "<span class='check-text'>" +
        "</span>" +
        "</label>" +
        "</a>";
      resultHTML += "</li>";
    }
  }
  resultHTML += "</ul>";
  //結果表示
  document.getElementById("shopList").innerHTML = resultHTML;
}

//ローカルストレージにデータあればロード　無ければアップする
//JSONデータを返す
function loadLocal() {
  var data = localStorage.getItem("data");
  if (data) {
    // console.log(data);
    return JSON.parse(data);
  } else {
    $.getJSON("json/shopData3.json").done(function (json) {
      let json_data = JSON.stringify(json);
      localStorage.setItem("data", json_data);
      return json;
    });
  }
}

//お気に入りボタンを押したときJSONデータを変更し、ローカルストレージへアップロード
$(function () {
  $('input[name="shop"]').change(function () {
    var json = loadLocal();
    $('input[name="shop"]:checked').each(function () {
      var r = $(this).attr("id");
      json[r].checked = 1;
    });
    $('input[name="shop"]:not(:checked)').each(function () {
      var r = $(this).attr("id");
      json[r].checked = 0;
    });
    let json_data = JSON.stringify(json);
    // console.log(json_data);
    localStorage.setItem("data", json_data);
  });
});

//window.onload = function main() {
    //let table = document.getElementById('storeList');

     //これが追加したいのが二項目じゃなかったら?
     //どうしたらまとめられるか考えてみましょう。
    //let newRow = table.insertRow();
    //let newCell = newRow.insertCell();
    //let anchor = document.createElement('a');
     //ここで渡す値はnameで良いのか?
     //セキュリティ的にはどうなのか考えてみましょう。
    //anchor.href = './store_detail.html?name=コロニアルラウンジ';
    //anchor.innerText = 'コロニアルラウンジ';
    //newCell.appendChild(anchor);

    //newRow = table.insertRow();
    //newCell = newRow.insertCell();
    //anchor = document.createElement('a');
    //anchor.href = './store_detail.html?name=BURGER\'S BASE';
    //anchor.innerText = 'BURGER\'S BASE';
    //newCell.appendChild(anchor);
//};

function clickSearch(){
    var search_catch = document.getElementById("tx").value;
    placeNameResult = search_catch + "周辺の人気飲食店";
    document.getElementById('placeName').innerHTML = placeNameResult;

    //テスト配列
    var placesList = [
        {rating:4.8, shopName:"AAA中華"},
        {rating:4.7, shopName:"BBB焼き肉"},
        {rating:4.6, shopName:"CCC寿司"},
        {rating:4.5, shopName:"DDD定食"},
        {rating:4.4, shopName:"EEEピザ"}
    ]
    
    //placesList配列をループして、
    //結果表示のHTMLタグを組み立てる
    var resultHTML = "<table border = 1>";

    for(var k = 0; k < placesList.length; k++){
        var rating = placesList[k].rating;
        var shopName = placesList[k].shopName;
        var ranking = k+1;
        var content = "<th>"+ ranking +"位"+ "</th>"+"<th>"+"[" + rating + "]"+"</th>" +"<td>"+ 
        "<a href=https://www.google.co.jp/maps/place/%E3%83%9E%E3%82%AF%E3%83%89%E3%83%8A%E3%83%AB%E3%83%89+%EF%BC%AA%EF%BC%B2%E6%96%B0%E5%AE%BF%E5%8D%97%E5%8F%A3%E5%BA%97/@35.6902648,139.70088,17z/data=!4m5!3m4!1s0x60188cda95783253:0x932692b07c5d5867!8m2!3d35.6893158!4d139.7025099?hl=ja>"
         +shopName+"</a>" +"</td>";

        resultHTML += "<tr>";
        resultHTML += content;
        resultHTML += "</tr>";
    }
    resultHTML += "</table>";

    document.getElementById('txt').innerHTML = resultHTML;
}
    //placesList配列をループして、
    //結果表示のHTMLタグを組み立てる
    /*var resultHTML = "<ol>";
    for (var i = 0; i < placesList.length; i++) {

        place = placesList[i];
        
        //ratingがないのものは「---」に表示変更
        var rating = place.rating;
        //if(rating == undefined) rating = "---";
        
        //表示内容（評価＋名称）
        var content = "【" + rating + "】 " + place.shopName;
        
        resultHTML += "<li>";
        resultHTML += content;
        resultHTML += "</li>";
    }
    resultHTML += "</ol>";
    //結果表示
    document.getElementById("results").innerHTML = resultHTML;
    */

    // 配列の長さの文だけループを回す
    /*for (var i = 0; i < placesList.length; i++) {
        // まず、idを表示する
        // Htmlのdivの部分を指定する
        var getData = document.getElementById('txt');
        // 表示したいデータを指定する
        var placesListrating = document.createTextNode(placesList[i].rating);
        // 要素を指定し、その要素の子要素としてデータを表示する
        getData.appendChild(placesListrating);

        // 次に、nameを表示する
        var placesListname = document.createTextNode(placesList[i].shopName);
        getData.appendChild(placesListname);

        getData.appendChild(document.createElement('br'));
    }*/

    //innerHTMLを使用して表示
    //var txt = document.getElementById("txt");
    //txt.innerHTML = text.join('');
  
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
    //txの内容が渡せていない
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
    var resultHTML = "<ol>";

    for(var k = 0; k < placesList.length; k++){
        var rating = placesList[k].rating;
        var shopName = placesList[k].shopName;

        var content = "[" + rating + "]" +"&emsp;"+ shopName;

        resultHTML += "<li>";
        resultHTML += content;
        resultHTML += "</li>";
    }
    resultHTML += "</ol>";

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
  
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
    alert(search_catch);
  }
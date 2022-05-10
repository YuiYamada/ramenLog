let storName;
const url =  new URL(window.location.href);
let params = url.searchParams;

window.onload = function main() {
    storName = params.get('name')
    
    //取得した値をhtmlに設定
    setStatus(storName);
  }

function setStatus(name) {
    document.getElementById('storeName').innerText = name;
}
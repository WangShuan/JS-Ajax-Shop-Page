// 封裝 ajax_get() 函數 參數一是網址 參數二是數據獲取成功後所要執行的函數
function ajax_get(url, fn) {
    // 兼容性寫法
    var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')

    request.open('GET', url, true)

    request.send()

    request.onreadystatechange = function () {
        if (request.readyState == 4) { // 數據響應解析完成但是數據有可能獲取失敗(比如頁面 404)
            if (request.status == 200) { // 數據獲取成功時為 200
                if (fn) { // 有傳入函數才執行
                    fn(request.response)
                } else {
                    alert('你沒有傳入函數，我不知道要幹嘛 ')
                }
            } else {
                alert('獲取數據有問題')
            }
        }
    }
}

// 封裝 ajax() 函數 參數一是請求方式 參數二是網址 參數三是要傳遞的參數 參數四是數據獲取成功後所要執行的函數
function ajax(method, url, args, fn) {
    var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')

    if (method == 'GET') {
        request.open(method, url + '?' + args, true)

        request.send()
    } else if (method == 'POST') {
        request.open(method, url, true)

        request.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

        request.send(args)
    }

    request.onreadystatechange = function () {
        if (request.readyState == 4) { // 數據響應解析完成但是數據有可能獲取失敗(比如頁面 404)
            if (request.status == 200) { // 數據獲取成功時為 200
                if (fn) { // 有傳入函數才執行
                    fn(request.response)
                } else {
                    alert('你沒有傳入函數，我不知道要幹嘛 ')
                }
            } else {
                alert('獲取數據有問題')
            }
        }
    }
}

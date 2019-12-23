// let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// var ajax = new XMLHttpRequest();

// ajax.request = function (file, mode, myCallback, data) {
//   ajax.open(mode, file, true);
//   ajax.send(data);
//   ajax.onload = function () {
//     if (ajax.status != 200) {
//       console.log(`Error ${ajax.status}: ${ajax.statusText}`);
//     }else {
//       myCallback(ajax);
//     }

//   };
// }

// function myCallback(xhr) { 
//   console.log(xhr.responseText); 
// }

// ajax.request("https://zhuanlan.zhihu.com/api/columns/biancheng/articles", "GET", myCallback);
// ajax.request("script.php", "post", myCallback, "first=John&last=Smith");


options = {
  url: "https://zhuanlan.zhihu.com/api/columns/biancheng/articles",
  method: "",
  headers: {},   // 传给
  data: "",     // 传给服务器的参数
  success: function(result) {
    console.log(result);
  },  // 请求成功后调用此方法
  fail: function(error) {
    console.log(error);
  }    // 请求失败或出错后调用此方法
}

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var request = function(options) {
  var xhr = new XMLHttpRequest();
  for (item in options.headers) {
    xhr.setRequestHeader(item, options.headers[item]);
  }
  if (options.method === "") {
  xhr.open("GET", options.url, true);
  }else {
  xhr.open(options.method, options.url, true);
  }
  xhr.send(options.data);
  xhr.onload = function() {
    if (xhr.status != 200) {
      return options.fail(xhr.error);
    }else {
      return options.success(xhr.responseText);
    }
  };
}
request(options);
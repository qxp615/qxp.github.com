import React from 'react'

export default function XmlAndFetch() {
  return (
    <div>
      <h3>XmlAndFetch</h3>
      <h2>需要把localhost换成http://127.0.0.1/</h2>
      <pre>
        {
          `
fetch('http://127.0.0.1:8080/',{
    method:'POST',
    headers:{
      "Accept":"*/*"  
    },
    mode:'cors',
    body:'post请求的body'
}).then((res)=>res.text()).then((e)=>console.log(e))
              `
        }</pre>
      <br /><br />
      <h6>fetch用法：</h6>
      <pre>
        {
          `
let promise = fetch(url, {
  method: "GET", // POST，PUT，DELETE，等。
  headers: {
    // 内容类型 header 值通常是自动设置的
    // 取决于 request body
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined // string，FormData，Blob，BufferSource，或 URLSearchParams
  referrer: "about:client", // 或 "" 以不发送 Referer header，
  // 或者是当前源的 url
  referrerPolicy: "no-referrer-when-downgrade", // no-referrer，origin，same-origin...
  mode: "cors", // same-origin，no-cors
  credentials: "same-origin", // omit，include，与是否携带cookie有关
  cache: "default", // no-store，reload，no-cache，force-cache，或 only-if-cached
  redirect: "follow", // manual，error
  integrity: "", // 一个 hash，像 "sha256-abcdef1234567890"
  keepalive: false, // true
  signal: undefined, // AbortController 来中止请求
  window: window // null
});
                  `
        }
      </pre>

      <h3>XMLHttpRequest</h3>
      <button onClick={Xml}>发送xml请求</button>
    </div>
  )
}

function Xml() {
  // 1. 创建一个 new XMLHttpRequest 对象
  let xhr = new XMLHttpRequest();

  // 2. 配置它：从 URL /article/.../load GET-request
  xhr.open('GET', 'http://127.0.0.1:8080/?a1=a888');

  // xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // 传输json一般用这个
  xhr.setRequestHeader('X-Auth', '123');
  xhr.setRequestHeader('X-Auth', '456');
// header 将是：（无法移除！）
// X-Auth: 123, 456

  // 3. 通过网络发送请求
  xhr.send();

  // 4. 当接收到响应后，并且响应已经完全下载，将调用此函数
  xhr.onload = function () {
    if (xhr.status != 200) { // 分析响应的 HTTP 状态
      // alert(`Error ${xhr.status}: ${xhr.statusText}`); // 例如 404: Not Found
      console.log('xhr:', xhr);
    } else { // 显示结果
      // alert(`Done, got ${xhr.response.length} bytes`); // response 是服务器响应
      console.log('200xhr：', xhr)
    }
  };


  xhr.timeout = 10000 // 单位：ms

  xhr.responseType = "" // 如果响应格式对不上实际传输来的内容，会报错
/*  默认值，设置响应为字符串格式
"text" —— 响应格式为字符串，
"arraybuffer" —— 响应格式为 ArrayBuffer（对于二进制数据，请参见 ArrayBuffer，二进制数组），
"blob" —— 响应格式为 Blob（对于二进制数据，请参见 Blob），
"document" —— 响应格式为 XML document（可以使用 XPath 和其他 XML 方法）或 HTML document（基于接收数据的 MIME 类型）
"json" —— 响应格式为 JSON（自动解析）。
  */

  // 在下载响应期间定期触发，报告已经下载了多少。
  xhr.onprogress = function (event) {
    if (event.lengthComputable) {
      alert(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      alert(`Received ${event.loaded} bytes`); // 没有 Content-Length
    }

  };

  xhr.onreadystatechange = function () {
    /* 
  UNSENT = 0; // 初始状态
OPENED = 1; // open 被调用
HEADERS_RECEIVED = 2; // 接收到 response header
LOADING = 3; // 响应正在被加载（接收到一个数据包）
DONE = 4; // 请求完成
XMLHttpRequest 对象以 0 → 1 → 2 → 3 → … → 3 → 4 的顺序在它们之间转变。每当通过网络接收到一个数据包，就会重复一次状态 3。
    */
    if (xhr.readyState == 3) {
      // 加载中
    }
    if (xhr.readyState == 4) {
      // 请求完成
    }
  };

  xhr.onerror = function () {
    alert("Request failed");
  };
}

import React from 'react'

export default function Caches() {
  return (
      <div>
          <h2>浏览器缓存</h2>
          首先，浏览器缓存只针对get请求；
          强缓存：需要url完全一致，包括url后的参数，才会生效； <br />
          <h3>响应头</h3>
          <h3><a href="https://blog.csdn.net/yehuozhili/article/details/103268433">看这里</a></h3> 
          <h4>先说强缓存</h4>
          有2个响应头来设置强缓存 <br />
          强缓存不会访问到服务器
          <br />
          强缓存设置靠请求头的Cache-Control或者Expires，听说有兼容性问题，老的是Expires，现在越来越多浏览器支持Cache-Control了，建议全都设上。
           <br /><b>cache-control</b> <br />
          res.setHeader('Cache-Control', 'no-store;max-age=5'); // 不使用缓存；5秒
          <br />
          首先是cache-control的可缓存性 、到期性，这两个可以一起写； <br />
          <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control">mdn</a>
          <br /><br /><br />
          Cache-Control设置的是个相对于现在的时间，单位是秒，Expires设置的是GMT时间，以设置10秒为例：
          <br /><br />
          res.setHeader('Expires',new Date(Date.now()+10*1000).toGMTString()) <br />
          res.setHeader('Cache-Control','max-age=10')

          <br />
          <br />
          <h4>协商缓存</h4>
          先看Last-Modified设置：<br />
          <b> 协商缓存是否生效，是可以由后端代码决定的！: <br />
          后端代码返必须回304，浏览器就才会进行协商缓存！
          </b> <br /><br />
          服务端设置Last-Modified后，浏览器请求同一个资源会带if-modified-since的请求头，<br />
          所以服务端还要获取这个请求头的时间进行对比，相等返回304提前关闭请求即可，浏览器会自己去缓存里拿。
          <code>
              <pre>
{
`
let statObj= await fs.stat(absPath)
let ctime = statObj.ctime.toGMTString()
res.setHeader('Last-Modified',ctime)//设置
let ifModifiedSince =req.headers['if-modified-since']//获取
if(ifModifiedSince===ctime){
    res.statusCode=304
    return res.end()//直接返回
}
                      `
                  }
              </pre>
          </code>
          <br />
          <br />
          看一下etag设置：<br />
          etag要稍微复杂点，主要看摘要算法，一般的摘要算法是用md5，由于md5会暴力破解，所以也可以采用sha1或者sha256等加盐算法，其中盐值就是相当于自己的一个密码本，要暴力破解必须知道盐值才行。
          <br />
          这些算法在nodejs自带的crypto里都有。
          <br /><br />
          <code>
              <pre>
                  {
                      `
let content = await fs.readFile(currentpath,'utf8')
let hash = crypto.createHash('md5').update(content).digest('base64')
res.setHeader('Etag',hash)
let ifNoneMatch =req.headers['if-none-match']
if(ifNoneMatch){
    res.statusCode=304
    return res.end()
}
                      `
                  }
              </pre>
          </code>
          <h3>请求头</h3>

    </div>
  )
}

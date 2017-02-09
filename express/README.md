# Node.js Express 框架
## Express 简介
Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。<br/>

使用 Express 可以快速地搭建一个完整功能的网站。<br/>

Express 框架核心特性：<br/>
* 可以设置中间件来响应 HTTP 请求。
* 定义了路由表用于执行不同的 HTTP 请求动作。
* 可以通过向模板传递参数来动态渲染 HTML 页面。

## 安装 Express
安装 Express 并将其保存到依赖列表中：<br/>
```
$ npm install express -g --save
```
以上命令会将 Express 框架安装在当前目录的 node_modules 目录中， node_modules 目录下会自动创建 express 目录。以下几个重要的模块是需要与 express 框架一起安装的：<br/>
* body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
* cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
* multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
```
$ npm install body-parser --save
```
```
$ npm install cookie-parser --save
```
```
$ npm install multer --save
```

## 第一个 Express 框架实例
接下来我们使用 Express 框架来输出 "Hello World"。<br/>

以下实例中我们引入了 express 模块，并在客户端发起请求后，响应 "Hello World" 字符串。**实例 express_demo.js**。在浏览器中访问 http://127.0.0.1:8081即可<br/>

### 请求和响应
Express 应用使用回调函数的参数： request 和 response 对象来处理请求和响应的数据。<br/>
```
app.get('/', function (req, res) {
   // --
})
```
### request 和 response 对象的具体介绍：
**Request 对象** - request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。常见属性有：
* req.app：当callback为外部文件时，用req.app访问express的实例
* req.baseUrl：获取路由当前安装的URL路径
* req.body / req.cookies：获得「请求主体」/ Cookies
* req.fresh / req.stale：判断请求是否还「新鲜」
* req.hostname / req.ip：获取主机名和IP地址
* req.originalUrl：获取原始请求URL
* req.params：获取路由的parameters
* req.path：获取请求路径
* req.protocol：获取协议类型
* req.query：获取URL的查询参数串
* req.route：获取当前匹配的路由
* req.subdomains：获取子域名
* req.accepts()：检查可接受的请求的文档类型
* req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：返回指定字符集的第一个可接受字符编码
* req.get()：获取指定的HTTP请求头
* req.is()：判断请求头Content-Type的MIME类型

**Response 对象** - response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。常见属性有：
* res.app：同req.app一样
* res.append()：追加指定HTTP头
* res.set()在res.append()后将重置之前设置的头
* res.cookie(name，value [，option])：设置Cookie
* opition: domain / expires / httpOnly / maxAge / path / secure / signed
* res.clearCookie()：清除Cookie
* res.download()：传送指定路径的文件
* res.get()：返回指定的HTTP头
* res.json()：传送JSON响应
* res.jsonp()：传送JSONP响应
* res.location()：只设置响应的Location HTTP头，不设置状态码或者close response
* res.redirect()：设置响应的Location HTTP头，并且设置状态码302
* res.send()：传送HTTP响应
* res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
* res.set()：设置HTTP头，传入object可以一次设置多个头
* res.status()：设置HTTP状态码
* res.type()：设置Content-Type的MIME类型

## 路由
我们已经了解了 HTTP 请求的基本应用，而路由决定了由谁(指定脚本)去响应客户端请求。<br/>

在HTTP请求中，我们可以通过路由提取出请求的URL以及GET/POST参数。<br/>

接下来我们扩展 Hello World，添加一些功能来处理更多类型的 HTTP 请求。<br/>

**实例express_demo_2.js**

## 静态文件
Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。<br/>

你可以使用 express.static 中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript 文件放在 public 目录下，你可以这么写：
```
app.use(express.static('public'));
```
我们可以到 public/images 目录下放些图片,如下所示：
```
node_modules
server.js
public/
public/images
public/images/logo.png
```
让我们再修改下 "Hello World" 应用添加处理静态文件的功能。<br/>

**实例express_demo_3.js**,访问http://127.0.0.2:8081/javascript.png

## GET 方法
以下实例演示了在表单中通过 GET 方法提交两个参数，我们可以使用 server.js 文件内的 process_get 路由器来处理输入：目录get。

## POST 方法
以下实例演示了在表单中通过 POST 方法提交两个参数，我们可以使用 server.js 文件内的 process_post 路由器来处理输入：目录post。

## 文件上传
以下我们创建一个用于上传文件的表单，使用 POST 方法，表单 enctype 属性设置为 multipart/form-data。

## Cookie 管理
我们可以使用中间件向 Node.js 服务器发送 cookie 信息，以下代码输出了客户端发送的 cookie 信息：

// 给onRequest()函数加上一些逻辑，用来找出浏览器请求的URL路径
var http = require("http");
var url = require("url");
  function onRequest(request, response) {
    var pathname = url.parse(request.url);
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");

  // 现在可以通过请求的URL路径来区别不同请求了--这使我们得以使用路由（还未完成）来将请求以URL路径为基准映射到处理程序上。
// 在我们所要构建的应用中，这意味着来自/start和/upload的请求可以使用不同的代码来处理。
# Node.js RESTful API
## 什么是 REST？
REST即表述性状态传递（英文：Representational State Transfer，简称REST）是Roy Fielding博士在2000年他的博士论文中提出来的一种软件架构风格。<br/>

表述性状态转移是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是RESTful。需要注意的是，REST是设计风格而不是标准。REST通常基于使用HTTP，URI，和XML（标准通用标记语言下的一个子集）以及HTML（标准通用标记语言下的一个应用）这些现有的广泛流行的协议和标准。REST 通常使用 JSON 数据格式。<br/>

### HTTP 方法
以下为 REST 基本架构的四个方法：
* GET - 用于获取数据。
* PUT - 用于添加数据。
* DELETE - 用于删除数据。
* POST - 用于更新或添加数据。

### RESTful Web Services
Web service是一个平台独立的，低耦合的，自包含的、基于可编程的web的应用程序，可使用开放的XML（标准通用标记语言下的一个子集）标准来描述、发布、发现、协调和配置这些应用程序，用于开发分布式的互操作的应用程序。<br/>

基于 REST 架构的 Web Services 即是 RESTful。<br/>

由于轻量级以及通过 HTTP 直接传输数据的特性，Web 服务的 RESTful 方法已经成为最常见的替代方法。可以使用各种语言（比如 Java 程序、Perl、Ruby、Python、PHP 和 Javascript[包括 Ajax]）实现客户端。<br/>

RESTful Web 服务通常可以通过自动客户端或代表用户的应用程序访问。但是，这种服务的简便性让用户能够与之直接交互，使用它们的 Web 浏览器构建一个 GET URL 并读取返回的内容。<br/>

http://www.runoob.com/w3cnote/restful-architecture.html

## 创建 RESTful
首先，创建一个 json 数据资源文件 **users.json**。<br/>

基于以上数据，我们创建以下 RESTful API：
![enter image description here](https://github.com/25paul/Learn-Node-/blob/master/img/restfull.png)

### 获取用户列表：
创建了 RESTful API listUsers，用于读取用户的信息列表。**实例server.js**<br/>

在浏览器中访问 http://127.0.0.1:8081/listUsers

### 添加用户
创建了 RESTful API addUser， 用于添加新的用户数据。**实例server_add.js**

### 显示用户详情
创建了 RESTful API :id（用户id）， 用于读取指定用户的详细信息。**实例server_id.js**<br/>

在浏览器中访问 http://127.0.0.1:8081/2

### 删除用户
创建了 RESTful API deleteUser， 用于删除指定用户的详细信息，以下实例中，用户 id 为 2。**实例server_delete.js**<br/>

在浏览器中访问 http://127.0.0.1:8081/deleteUser

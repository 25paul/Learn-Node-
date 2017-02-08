# Learn-Node(二)
学习Node基础知识的第二阶段<br/>
对应的文件夹目录下都有相应的练习及笔记说明readme<br/>
##包括以下：
###安装配置
###npm介绍
###Node.js REPL
###Node.js 回调函数
###Node.js 事件循环
###Node.js EventEmitter
###Node.js Buffer
###Node.js Stream
###Node.js 模块系统
###Node.js 函数
###Node.js 路由
###Node.js 全局对象
###Node.js 常用工具
###Node.js 文件系统
###Node.js GET/POST请求
###Node.js 工具模块
###Node.js Web 模块
###Node.js Express 框架
###Node.js RESTful API
###Node.js 多进程
##关于node.js
简单的说 Node.js 就是运行在服务端的 JavaScript。<br/>
Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台（让Javascript脱离浏览器运行在服务器的）。<br/>
Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。（运行在浏览器外不用考虑头疼的Javascript兼容性问题）。<br/>
采用单线程、异步IO与事件驱动的设计来实现高并发（异步事件也在一定程度上增加了开发和调试的难度）。<br/>
Node.js内建一个HTTP服务器。<br/>
输出Hello World：有脚本模式(运行js文件)和交互模式(使用node的REPL)。<br/>
##安装
下载地址：https://nodejs.org/en/download/<br/>
历史版本：https://nodejs.org/dist/<br/>
LTS(长期支持版本)<br/>
*注意*：Linux上安装Node.js需要安装Python 2.6 或 2.7 ，不建议安装Python 3.0以上版本。<br/>
Sublime中配置node.js开发：http://www.jb51.net/article/50260.htm<br/>
路径配置：http://jingyan.baidu.com/article/91f5db1b2bb6941c7f05e33c.html<br/>
##为什么是node.js
如果我们使用PHP来编写后端的代码时，需要Apache 或者 Nginx 的HTTP 服务器，并配上 mod_php5 模块和php-cgi。<br/>
从这个角度看，整个"接收 HTTP 请求并提供 Web 页面"的需求根本不需 要 PHP 来处理。<br/>
不过对 Node.js 来说，概念完全不一样了。使用 Node.js 时，我们不仅仅 在实现一个应用，同时还实现了整个 HTTP 服务器。事实上，我们的 Web 应用以及对应的 Web 服务器基本上是一样的。<br/>
####让我们先了解下 Node.js 应用是由哪几部分组成的：<br/>
1. 引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。<br/>
2. 创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。<br/>
3. 接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。<br/>

####创建node.js应用：<br/>
1. 引入required模块<br/>
2. 创建服务器<br/>

##npm
NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：<br/>
* 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
* 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
* 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 "npm -v" 来测试是否成功安装。
建议使用淘宝镜像
如果你安装的是旧版本的 npm，可以很容易得通过 npm 命令来升级。

####使用 npm 命令安装模块
<code>$ npm install (Module Name)</code><br/>
npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已。<br/>
http://www.runoob.com/nodejs/nodejs-npm.html
npm官方文档：https://docs.npmjs.com/

##Node.js REPL(交互式解释器)
表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。<br/>
Node 自带了交互式解释器，可以执行以下任务：<br/>
* 读取 - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。
* 执行 - 执行输入的数据结构
* 打印 - 输出结果
* 循环 - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出。

Node.js REPL也可以很好地调试JavaScript代码<br/>
* 使用变量：用var声明，否则会直接打印变量。<br/>
* 多行表达式：... 三个点的符号是系统自动生成的，你回车换行后即可。Node 会自动检测是否为连续的表达式。<br/>
* 下划线变量：可以使用下划线获取表达式的运算结果。<br/>
```
$ node
> var x = 10
undefined
> var y = 20
undefined
> x + y
30
> var sum = _
undefined
> console.log(sum)
30
undefined
>
```

REPL 命令：<br/>
* ctrl + c - 退出当前终端。
* ctrl + c 按下两次 - 退出 Node REPL。
* ctrl + d - 退出 Node REPL.
* 向上/向下 键 - 查看输入的历史命令
* tab 键 - 列出当前命令
* .help - 列出使用命令
* .break - 退出多行表达式
* .clear - 退出多行表达式
* .save filename - 保存当前的 Node REPL 会话到指定文件
* .load filename - 载入当前 Node REPL 会话的文件内容。

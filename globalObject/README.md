## Node.js 全局对象
JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。<br/>
在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。<br/>
在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。<br/>

### 全局对象与全局变量
global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条 件的变量是全局变量：<br/>
* 在最外层定义的变量；
* 全局对象的属性；
* 隐式定义的变量（未定义直接赋值的变量）。<br/>

当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。需要注 意的是，在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。<br/>

**注意**： 永远使用 var 定义变量以避免引入全局变量，因为全局变量会污染 命名空间，提高代码的耦合风险。

#### __filename 
表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。**实例filename.js**。<br/>

#### __dirname
__dirname 表示当前执行脚本所在的目录。**实例dirname.js**<br/>

#### setTimeout(cb, ms)
setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。<br/>
返回一个代表定时器的句柄值。**实例setTimeout.js**<br/>

#### clearTimeout(t)
clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器。**实例clearTimeout.js**<br/>

#### setInterval(cb, ms)
setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。<br/>
返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。<br/>
setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。**实例setInterval.js**<br/>

####console
console 用于提供控制台标准输出，它是由 Internet Explorer 的 JScript 引擎提供的调试工具，后来逐渐成为浏览器的事实标准。<br/>
Node.js 沿用了这个标准，提供与习惯行为一致的 console 对象，用于向标准输出流（stdout）或标准错误流（stderr）输出字符。<br/>

**console 方法**<br/>
* console.log([data][, ...])
* console.info([data][, ...])
* console.error([data][, ...])
* console.warn([data][, ...])
* console.dir(obj[, options])
* console.time(label)
* console.timeEnd(label)
* console.trace(message[, ...])
* console.assert(value[, message][, ...])

**实例console目录**

#### process
process 是一个全局变量，即 global 对象的属性。<br/>
它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要 和它打交道。<br/>
process 对象的一些最常用的成员方法：<br/>
* exit
* beforeExit
* uncaughtException
* Signal 事件

**实例process.js**

#### 退出状态码
退出状态码:1、2、3、4、5、6等等。<br/>

#### Process 属性
Process 提供了很多有用的属性，便于我们更好的控制系统的交互：<br/>

#### 方法参考手册
Process 提供了很多有用的方法，便于我们更好的控制系统的交互：

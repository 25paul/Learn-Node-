## Node.js EventEmitter
Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。<br/>
Node.js里面的许多对象都会分发事件：一个net.Server对象会在每次有新连接时分发一个事件， 一个fs.readStream对象会在文件被打开的时候发出一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。<br/>

### EventEmitter 类
events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。<br/>
events是Node.js最重要的模板，没有之一，Node.js 本身架构是事件式的，而events提供唯一的接口，所以堪称Node.js的事件编程的基石。events模块不仅用于用户代码与Node.js下层事件循环的交互，还几乎被所有的模块依赖。<br/>
##### 你可以通过require("events");来访问该模块。
```
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```
EventEmitter 对象如果在实例化时发生错误，会触发 'error' 事件。当添加新的监听器时，'newListener' 事件会触发，当监听器被移除时，'removeListener' 事件被触发。<br/>
**实例8.js**。<br/>
EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。<br/>
当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。<br/>
**实例8-1.js**。<br/>
EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件。<br/>

大多数的时候我们不会直接使用EventEmitter，而是在对象中继承，包括 fs, et, http，只要是支持事件响应的核心模块都是EventEmitter的子类。继承EventEmitter不会打乱对象原有的继承关系。<br/>

### EventEmitter 的属性
http://www.runoob.com/nodejs/nodejs-event.html<br/>
**实例8-2.js**。<br/>

### Error事件
EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。<br/>
当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。<br/>
我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。<br/>
**实例8-3.js**<br/>

## 继承 EventEmitter
大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
为什么要这样做呢？原因有两点：<br/>
* 首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发射应该是一个对象的方法。
* 其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。

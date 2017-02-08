## Node.js Buffer(缓冲区)
所谓缓冲区Buffer，就是 "临时存贮区" 的意思，是暂时存放输入输出数据的一段内存。<br/>

JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。因此NodeJS提供了一个与String对等的全局构造函数Buffer来提供对二进制数据的操作。除了可以读取文件得到Buffer的实例外，还能够直接构造。<br/>

在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。<br/>

在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。<br/>

**实例9.js**<br/>

https://cnodejs.org/topic/56499568d28aa64101600fdc

http://www.infoq.com/cn/articles/nodejs-about-buffer/

### 创建 Buffer 类
Node Buffer 类可以通过多种方式来创建。

##### 方法 1
创建长度为 10 字节的 Buffer 实例：
var buf = new Buffer(10);

##### 方法 2
通过给定的数组创建 Buffer 实例：
var buf = new Buffer([10, 20, 30, 40, 50]);

##### 方法 3
通过一个字符串来创建 Buffer 实例：
var buf = new Buffer("www.runoob.com", "utf-8");
utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。

### 写入缓冲区
**语法**<br/>
写入 Node 缓冲区的语法如下所示：<br/>
<code>
buf.write(string[, offset[, length]][, encoding])
</code><br/>

**参数**<br/>
参数描述如下：<br/>
* string - 写入缓冲区的字符串。
* offset - 缓冲区开始写入的索引值，默认为 0 。
* length - 写入的字节数，默认为 buffer.length
* encoding - 使用的编码。默认为 'utf8' 。<br/>

**返回值**<br/>
返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。<br/>
**实例9-1.js**<br/>

### 从缓冲区读取数据
**语法**<br/>
读取 Node 缓冲区数据的语法如下所示：<br/>
<code>
buf.toString([encoding[, start[, end]]])
</code><br/>

**参数**<br/>
参数描述如下：<br/>
* encoding - 使用的编码。默认为 'utf8' 。
* start - 指定开始读取的索引位置，默认为 0。
* end - 结束位置，默认为缓冲区的末尾。

**返回值**<br/>
解码缓冲区数据并使用指定的编码返回字符串。<br/>
**实例9-2.js**<br/>

### 将 Buffer 转换为 JSON 对象
**语法**<br/>
将 Node Buffer 转换为 JSON 对象的函数语法格式如下：<br/>
<code>
buf.toJSON()
</code><br/>

**返回值**<br/>
返回 JSON 对象。<br/>
**实例9-3.js**<br/>

### 缓冲区合并
**语法**<br/>
Node 缓冲区合并的语法如下所示：<br/>
<code>
Buffer.concat(list[, totalLength])
</code><br/>

**参数**<br/>
参数描述如下：<br/>
* list - 用于合并的 Buffer 对象数组列表。
* totalLength - 指定合并后Buffer对象的总长度。<br/>

**返回值**<br/>
返回一个多个成员合并的新 Buffer 对象。<br/>
**实例9-4.js**<br/>

### 缓冲区比较
**语法**<br/>
Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：<br/>
<code>
buf.compare(otherBuffer);
</code><br/>

**参数**<br/>
参数描述如下：<br/>
* otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。<br/>

**返回值**<br/>
返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。<br/>
**实例9-5.js**<br/>

### 拷贝缓冲区
**语法**<br/>
Node 缓冲区拷贝语法如下所示：<br/>
<code>
buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
</code><br/>

**参数**<br/>
参数描述如下：<br/>
* targetBuffer - 要拷贝的 Buffer 对象。
* targetStart - 数字, 可选, 默认: 0
* sourceStart - 数字, 可选, 默认: 0
* sourceEnd - 数字, 可选, 默认: buffer.length<br/>

**返回值**<br/>
没有返回值。<br/>
**实例9-6.js**<br/>

### 缓冲区裁剪
Node 缓冲区裁剪语法如下所示：<br/>
<code>
buf.slice([start[, end]])
</code><br/>

**参数**<br/>
参数描述如下：<br/>
* start - 数字, 可选, 默认: 0
* end - 数字, 可选, 默认: buffer.length<br/>

**返回值**<br/>
返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。<br/><br/>
**实例9-7.js**<br/>

### 缓冲区长度
**语法**<br/>
Node 缓冲区长度计算语法如下所示：<br/>
<code>
buf.length;
</code><br/>

**返回值**<br/>
返回 Buffer 对象所占据的内存长度。<br/>
**实例9-8.js**<br/>

### 方法参考手册
http://www.runoob.com/nodejs/nodejs-buffer.html

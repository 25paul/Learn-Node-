## Node.js 文件系统
Node.js 提供一组类似 UNIX（POSIX）标准的文件操作API。<br/>
### 异步和同步
Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。<br/>

异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。<br/>

建议大家是用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。**实例file.js**。<br/>

### 打开文件
语法<br/>

以下为在异步模式下打开文件的语法格式：<br/>
```
fs.open(path, flags[, mode], callback)
```
参数<br/>

参数使用说明如下：
* path - 文件的路径。
* flags - 文件打开的行为。具体值详见下文。
* mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
* callback - 回调函数，带有两个参数如：callback(err, fd)。**实例open.js**

flags 参数可以是以下值：r,r+,rs,rs+,w,wx,w+,wx+,a,ax,a+,ax+。

### 获取文件信息
语法<br/>

以下为通过异步模式获取文件信息的语法格式：<br/>
```
fs.stat(path, callback)
```
参数<br/>

参数使用说明如下：<br/>
* path - 文件路径。
* callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。
* fs.stat(path)执行后，会将stats类的实例返回给其回调函数。可以通过stats类中的提供方法判断文件的相关属性。**实例stat.js**

stats类中的方法有：<br/>
* stats.isFile(),
* stats.isDirectory(),
* stats.isBlockDevice(),
* stats.isCharacterDevice(),
* stats.isSymbolicLink(),
* stats.isFIFO(),
* stats.isSocket()<br/>

**实例stat_1.js**

### 写入文件
语法<br/>

以下为异步模式下写入文件的语法格式：
```
fs.writeFile(filename, data[, options], callback)
```
如果文件存在，该方法写入的内容会覆盖旧的文件内容。<br/>

参数<br/>

参数使用说明如下：
* path - 文件路径。
* data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(流) 对象。
* options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
* callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。

**实例writeFile.js**

### 读取文件
语法<br/>

以下为异步模式下读取文件的语法格式：
```
fs.read(fd, buffer, offset, length, position, callback)
```
该方法使用了文件描述符来读取文件。<br>

参数<br/>

参数使用说明如下：
* fd - 通过 fs.open() 方法返回的文件描述符。
* buffer - 数据写入的缓冲区。
* offset - 缓冲区写入的写入偏移量。
* length - 要从文件中读取的字节数。
* position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
* callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。

**实例read.js**

### 关闭文件
语法<br/>

以下为异步模式下关闭文件的语法格式：
```
fs.close(fd, callback)
```
该方法使用了文件描述符来读取文件。<br/>

参数<br/>

参数使用说明如下：<br/>
* fd - 通过 fs.open() 方法返回的文件描述符。
* callback - 回调函数，没有参数。

**实例close.js**

### 截取文件
语法<br/>

以下为异步模式下截取文件的语法格式：
```
fs.ftruncate(fd, len, callback)
```
该方法使用了文件描述符来读取文件。<br/>

参数<br/>

参数使用说明如下：
* fd - 通过 fs.open() 方法返回的文件描述符。
* len - 文件内容截取的长度。
* callback - 回调函数，没有参数。

**实例ftruncate.js**

### 删除文件
语法<br/>

以下为删除文件的语法格式：<br/>
```
fs.unlink(path, callback)
```
参数<br/>

参数使用说明如下：
* path - 文件路径。
* callback - 回调函数，没有参数。

**实例unlink.js**

### 创建目录
语法<br/>

以下为创建目录的语法格式：
```
fs.mkdir(path[, mode], callback)
```
参数<br/>

参数使用说明如下：
* path - 文件路径。
* mode - 设置目录权限，默认为 0777。
* callback - 回调函数，没有参数。

**实例mkdir.js**

### 读取目录
语法<br/>

以下为读取目录的语法格式：
```
fs.readdir(path, callback)
```
参数<br/>

参数使用说明如下：
* path - 文件路径。
* callback - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。

**实例readdir.js**

### 删除目录
语法<br/>

以下为删除目录的语法格式：
```
fs.rmdir(path, callback)
```
参数<br/>

参数使用说明如下：
* path - 文件路径。
* callback - 回调函数，没有参数。

方法还有很多：https://nodejs.org/api/fs.html

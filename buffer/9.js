// 所谓缓冲区Buffer，就是 "临时存贮区" 的意思，是暂时存放输入输出数据的一段内存。
// JS语言自身只有字符串数据类型，没有二进制数据类型，因此NodeJS提供了一个与String对等的全局构造函数Buffer来提供对二进制数据的操作。除了可以读取文件得到Buffer的实例外，还能够直接构造

var buffer = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]) ; 

// Buffer与字符串能够互相转化，例如可以使用指定编码将二进制数据转化为字符串：
var str = buffer.toString("utf-8");  // hello

console.log(str)
// Buffer与字符串类似，除了可以用.length属性得到字节长度外，还可以用[index]方式读取指定位置的字节
console.log(buffer.length)
console.log(buffer[2])

// 将字符串转换为指定编码下的二进制数据
var bufferTo= new Buffer("hello", "utf-8") ; // <Buffer 68 65 6c 6c 6f>
console.log(bufferTo)
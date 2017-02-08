var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('10-2-input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('10-2-output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");
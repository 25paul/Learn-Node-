## Node.js 常用工具
util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能 过于精简的不足。<br/>

### util.inherits
<code>
util.inherits(constructor, superConstructor)
</code><br/>

是一个实现对象间原型继承 的函数。<br/>

JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript 没有 提供对象继承的语言级别特性，而是通过原型复制来实现的。**实例inherits.js**<br/>

**注意**：Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。<br/>
同时，在原型中定义的属性不会被console.log 作 为对象的属性输出。<br/>

### util.inspect
<code>
util.inspect(object,[showHidden],[depth],[colors])
</code><br/>

是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。<br/>

* showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
* depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少。如果不指定depth，默认会递归2层，指定为 null 表示将不限递归层数完整遍历对象。 如果color 值为 true，输出格式将会以ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。

特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，即使该对 象定义了toString 方法也不会调用。实例inspect.js

### util.isArray(object)
如果给定的参数 "object" 是一个数组返回true，否则返回false。实例isArray.js

###util.isRegExp(object)
如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。实例isRegExp.js

### util.isDate(object)
如果给定的参数 "object" 是一个日期返回true，否则返回false。实例isDate.js

### util.isError(object)
如果给定的参数 "object" 是一个错误对象返回true，否则返回false。
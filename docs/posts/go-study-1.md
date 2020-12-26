---
title: Go语言入门
date: 2020-12-25
categories:
- 一周学一个技术
tags:
- Go
---

今天是圣诞节，开始学习Go语言，我认为它非常有潜力。

## 什么是Go语言？

- Google开源的语言
- 编译型语言
- 21世纪的C语言



## Go语言特点

- 语法简介
- 开发效率高
- 执行性能好



## Go开发环境安装

官方下载地址：[https://golang.org/](https://golang.org/)

官方下载地址：[https://golang.google.cn/](https://golang.google.cn/)



安装后，通过命令查看Go版本：

```bash
go version
```



## 第一个Go程序

```go
package main

// 导入fmt包
import "fmt"

// main函数，程序入口
func main() {
	fmt.Println("Hello World")
}
```



### 编译

**使用`go build`将.go文件编译成可执行文件。**

例如Mac平台，终端进入.go文件所在目录，执行`go build`命令，随后会在当前目录下生成名为`helloworld`的可执行文件。`./helloworld`运行文件，控制台打印`Hello World`：

<img src="https://images.shiguangping.com/imgs/20201226010523.png" alt="image-20201226010522776" style="zoom:50%;" />

`go build -o 文件名`：自定义编译的文件名：

<img src="https://images.shiguangping.com/imgs/20201226011221.png" alt="image-20201226011221822" style="zoom:50%;" />



### 跨平台编译（交叉编译）

默认`go build`编译的是当前操作系统的可执行文件，如果要编译其他平台的可执行文件需要指定目标操作系统的平台和处理器架构：

*Windows下编译Linux平台的64位可执行程序：*

```bash
SET CGO_ENABLED=0 //禁用CGO
SET GOOS=linux // 目标平台是linux
SET GOARCH=amd64 // 目标处理器架构是amd64
go build
```

然后再执行`go build`命令，得到的就是Linux平台的可执行文件。



*Mac下编译Linux和Windows平台的64位可执行程序：*

```bash
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build
```



*Linux下编译Mac和Windows平台64位可执行程序：*

```bash
CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build
```



*Windows下编译Mac平台64位可执行程序：*

```bash
SET CGO_ENABLED=0 
SET GOOS=darwin
SET GOARCH=amd64
go build
```



## 标识符和关键字

### 标识符

在编程语言中，标识符就是程序员定义的具有特殊意义的词，如变量名，常量名，函数名等等。Go语言中的标识符由**字母、数字、下划线(_)**组成，并且只能以字母或下划线开头。如：`abc`、`_abc`、`_123`等。



### 关键字

关键字是指编程语言中预先定义好的具有特殊含义的词，不能把关键字和保留字用作标识符。

Go语言中共有25个关键字，按作用划分3类：包管理、程序实体声明与定义、程序流程控制。

```go
包管理（2个）：
	import	package

程序实体声明与定义（8个）：
	chan	const	func	interface	map	struct	type	var

程序流程控制（15个）：
	break	case	continue	default	defer	else	fallthrough	
	for		go		goto		if		range	return	select		switch
```

Go语言中还有37个保留字。

```go
Constants:
		true  false  iota nil

Types:
		int  int8  int16  int32  int64
		uint  uint8  uint16  uint32  uint64  uintptr
		float32  float64  complex128  complex64
		bool  byte  rune  string  error

Functions: 
		make  len  cap  new  append  copy  close  delete
		complex  real  imag  panic  recover
```



## 变量

### 变量的来历

程序在运行时，数据都是存储在内存当中。我们想要在代码中操作某个数据时需要到内存中找到这个数据，但是如果我们直接在代码中通过内存地址去操作数据是非常糟糕的，这使得代码的可读性变得非常差并且容易出错。所以我们就利用变量将数据的内存地址保存起来，以后我们直接通过这个变量就能找到内存上对应的数据了。



### 变量类型

变量 (Variable) 的功能是存储数据。不同变量保存的数据类型可能会不一样。经过半个多世纪的发展，编程语言已经基本形成了一套固定的类型，常见变量的类型有：整型、浮点型、布尔型等。

Go语言中每一个变量都有自己的类型，并且变量必须经过声明才能使用。



### 变量声明

Go语言中的变量需要声明后才能使用，同一作用域内不支持重复声明。如果是局部变量，声明后必须使用，否则会编译时报错。



### 标准声明

Go语言的变量声明格式为：

```go
var 变量名 变量类型
```



::: details 示例代码

```go
package main

import "fmt"

// 声明变量
var name string
var age int
var isOk bool

// 批量声明
var (
	mobile  string
	address string
	remark  string
)

func main() {
	name = "张三"
	age = 25
	isOk = true

	fmt.Printf("name is %s", name)
}
```

:::



### 变量的初始化

Go语言在声明变量的时候，会自动在指定的内存区域进行初始化操作。每个变量会根据其数据类型初始化默认值，如整型和浮点型的默认值（初始值）是`0`，string的默认值是`空字符串`，bool的默认值是`false`，切片、函数、指针变量的默认值是`nil`。

我们也可以在声明变量的同时为其初始化值，变量声明并初始化的标准格式如下：

```go
var 变量名 变量类型 = 表达式
```

举个例子：

```go
var name string = "张三"
var age int = 25
```

或者一次声明并初始化多个变量：

```go
var name, age = "张三", 25
```



### 类型推导

Go语言中，变量可以根据其在声明初始化时所赋值的数据类型推断出变量具体的数据类型。

举个例子：

```go
var name = "张三" // 初始化变量时将字符串赋值给name，则变量name的数据类型为string
```

*这种方式只适用于在变量声明的同时并初始化时，并且Go是强类型语言。*



### 短变量声明

在函数内部，可以使用更简略的`:=`方式声明并初始化变量。

```go
name := "张三" // 只能在函数内部使用（也就是局部变量）
```



### 匿名变量

在使用多重赋值时，如果想要忽略某个值，可以使用`匿名变量（anonymous variable）`。匿名变量用一个下划线`_`表示，例如：

```go
func foo() (int, string) {
	return 10, "张三"
}

func main() {
  age, _ := foo()
	_, name := foo()

	fmt.Println("age:", age)
	fmt.Println("name:", name)
}
```

匿名变量不占用命名空间，不会被分配内存，所以匿名变量之间不存在重复声明。（在`Lua`等编程语言里，匿名变量也被叫做哑元变量）

注意事项：

1. 函数外的每个语句都必须以关键字开始（`var`、`const`、`func`等）；
2. `:=`不能再函数外部使用；
3. `_`多用于占位，表示忽略值。



## 常量

### 声明常量

相对于变量，常量是恒定不变的量（值），多用于定义程序运行期间不会改变的值。常量的声明和变量的声明非常类似，只是把关键字`var`换成了`const`，常量的定义的时候必须赋值。

```go
const pi = 3.1415
const e = 2.7182
```

声明了`pi`和`e`这两个常量之后，在整个程序运行期间他们的值都不能再发生改变了。

多个常量也可以一起声明：

```go
const (
	OK = 200
	NOTFOUND = 404
)

// 批量声明常量时，如果某一行声明没有赋值，默认同上一行
const (
	n1 = 100
	n2
	n3
)
```



### iota

`iota`是Go语言的常量计数器，只能在常量的表达式中使用。

`iota`在`const`关键字出现时将被重置为0，const中每**新增一行**常量声明，`iota`计数+1。`iota`可以理解为const语句块中的行索引。使用`iota`能简化定义，在定义枚举时很有用。

```go
// iota
const (
	a1 = iota // 0
	a2 	// 1
	a3 	// 2
	a4 	// 3
)
```



## 基本数据类型

### 整型

整型分为两大类：按长度分为`int8`、`int16`、`int16`、`int64`，对应的无符号整型：`uint8`、`uint16`、`uint32`、`uint64`。其中，`uint8`就是我们熟知的`byte`型，`int16`对应C语言中的`short`型，`int64`对应C语言中的`long`型。

| 类型   | 描述                                                        |
| ------ | ----------------------------------------------------------- |
| uint8  | 无符号8位整型（0到255）                                     |
| uint16 | 无符号16位整型（0到65535）                                  |
| uint32 | 无符号32位整型（0到4294967295）                             |
| uint64 | 无符号64位整型（0到18446744073709551615）                   |
| int8   | 有符号8位整型（-128到127）                                  |
| int16  | 有符号16位整型（-32768到32767）                             |
| int32  | 有符号32位整型（-2147483648到2147483647）                   |
| int64  | 有符号64位整型（-9223372036854775808到9223372036854775807） |



### 特殊整型

| 类型    | 描述                                               |
| ------- | -------------------------------------------------- |
| uint    | 32位操作系统上就是uint32，64位操作系统上就是uint64 |
| int     | 32位操作系统上就是int32，64位操作系统上就是int64   |
| uintptr | 无符号整形，用于存放指针                           |

**注意：**在使用`int`和`uint`类型时，不能假定它是32位或是64位整型，而是考虑`int`和`uint`可能在不同平台上的差异。

**注意事项：**获取对象的长度的内建`len()`函数返回的长度可以根据不同平台的字节长度进行变化。实际使用中，切片或map的元素数量等都可以用`int`来表示。在涉及到二进制传输、读写文件的结构描述时，为了保持文件的结构不会受到不同编译目标平台字节长度的影响，不要使用`int`和`uint`。



### 八进制&十六进制

Go语言中无法直接定义二进制数，关于八进制和十六进制数的示例如下：

```go
package main

import "fmt"

func main() {
	var i1 = 0145
	fmt.Printf("%d\n", i1) // %d 输出十进制
	fmt.Printf("%b\n", i1) // %b 输出二进制
	fmt.Printf("%o\n", i1) // %o 输出八进制
	fmt.Printf("%x\n", i1) // %x 输出十六进制数
	fmt.Printf("%T\n", i1) // 查看变量类型

	// 八进制
	var i2 = 077
	fmt.Printf("%d\n", i2)

	// 十六进制
	var i3 = 0xff
	fmt.Printf("%d\n", i3)

	// 声明int8类型变量
	var i4 int8 = 9
	fmt.Printf("%T\n", i4)

	i5 := int8(9)
	fmt.Printf("%T\n", i5)

}
```



### C语言中的占位符

| 占位符 | 描述                                                         |
| ------ | ------------------------------------------------------------ |
| %a     | 读入一个浮点值(仅C99有效)                                    |
| %c     | 用来输出单个字符                                             |
| %d     | 用来输出有符号的十进制整数（包括`int`/`char`类型）           |
| %i     | 读入十进制，八进制，十六进制整数                             |
| %o     | 用来输出无符号的八进制整数                                   |
| %x     | 用来输出无符号的十六进制整数                                 |
| %s     | 用来输出一个字符串                                           |
| %p     | 读入指针                                                     |
| %u     | 用来输出无符号的十进制整数（包括`int`/`char`类型）           |
| %n     | 至此已读入值的等价字符数                                     |
| %[]    | 扫描字符集合                                                 |
| %%     | 读%符号                                                      |
| %f     | 用来输出小数形式的十进制浮点数（输入时小数形式和指数形式都可以识别） |
| %e     | 用来输出指数形式的十进制浮点数（输入时小数形式和指数形式都可以识别） |
| %g     | 用来输出指数形式和小数形式两者中较短的十进制浮点数（输入时小数形式和指数形式都可以识别） |



### 浮点型

Go语言支持两种浮点数：`float32`和`float64`，这两种浮点型数据格式遵循`IEEE 754`标准。`float32`的浮点数最大范围约`3.4e38`，可以使用`math.MaxFloat32`查看。`float64`的浮点数的最大范围约为`1.8e308`，可以使用`math.MaxFloat64`查看。

打印浮点数时，可以使用`fmt`包配合动词`%f`，代码如下：

```go
package main

import (
	"fmt"
	"math"
)

func main() {

	// 最大的float32数
	fmt.Printf("%f\n", math.MaxFloat32)

	// 最大的float64数
	fmt.Printf("%f\n", math.MaxFloat64)

	fmt.Printf("%f\n", math.Pi)
	fmt.Printf("%.2f\n", math.Pi) // %.2f 小数点保留后两位
}
```



### 复数

`complex64`和`complex128`

```go
package main

import "fmt"

func main() {
	var c1 complex64
	c1 = 1 + 2i

	var c2 complex128
	c2 = 2 + 3i

	fmt.Println(c1)
	fmt.Println(c2)
}
```

复数有实部和虚部，`complex64`的实部和虚部为32位，`complex128`的实部和虚部为64位。



### 布尔值

Go语言中以`bool`类型进行声明布尔类型数据，布尔类型数据只有`true`和`false`两个值。

```go
package main

import "fmt"

func main() {
	b1 := true
	var b2 bool

	fmt.Printf("%T b1=%v\n", b1, b1) // %v 输出变量的值
	fmt.Printf("%T b2=%v\n", b2, b2)

	var n = 100
	var s = "Hello Go"

	// 常用的占位符
	fmt.Printf("%T \n", n)       // 输出变量的数据类型
	fmt.Printf("%v %v \n", n, s) // 输出变量的值（任意类型数据）
	fmt.Printf("%b \n", n)       // 输出变量的二进制数
	fmt.Printf("%d \n", n)       // 输出变量的十进制数
	fmt.Printf("%o \n", n)       // 输出变量的八进制数
	fmt.Printf("%x \n", n)       // 输出变量的十六进制数
	fmt.Printf("%s \n", s)       // 输出字符串变量
}
```

**注意：**

1. 布尔类型变量的默认值是`false`；
2. Go语言中不允许将整型强制转换成布尔类型数据；
3. 布尔类型数据无法参与数值运算，也无法与其它类型进行转换。



### 字符串


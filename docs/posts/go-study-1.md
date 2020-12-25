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

默认`go build`编译的是当前操作系统的可执行文件，如果要编译其他平台的可执行文件需要制定目标操作系统的平台和处理器架构：

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

在编程语言中，标识符就是程序员定义的具有特殊意义的词，如变量名，常量名，函数名等等。Go语言中的标识符由**字母、数字、下划线(`_`)**组成，并且只能以字母或下划线开头。如：`abc`、`_abc`、`_123`等。


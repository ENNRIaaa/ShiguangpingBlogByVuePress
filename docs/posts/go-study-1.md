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

import "fmt"

func main() {
	fmt.Println("Hello World")
}
```



### 编译

**使用`go build`将.go文件编译成可执行文件。**

例如Mac平台，终端进入.go文件所在目录，执行`go build`命令，随后会在当前目录下生成名为`helloworld`的可执行文件。`./helloworld`运行文件，控制台打印`Hello World`：

<img src="https://images.shiguangping.com/imgs/20201226010523.png" alt="image-20201226010522776" style="zoom:50%;" />


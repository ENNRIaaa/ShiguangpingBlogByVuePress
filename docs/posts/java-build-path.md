---
title: JDK安装及配置环境变量
date: 2018-04-13 21:51
categories:
- 笔记
tags:
- Java
- JDK安装
---

Java开发需要安装JDK（Java开发工具），JDK里面包括Java编译器，和JRE（Java运行时环境），其中JRE里面又包含JVM（Java虚拟机）、Java核心类库以及相关支持文件。

所以，在开发Java程序之前，必须先安装JDK。*（只为了运行Java程序，只需安装JRE即可）* 

### 1. 下载JDK及安装

访问[Oracle官方下载地址](http://www.oracle.com/technetwork/java/javase/downloads/index.html )下载所需的JDK版本。

下载好的安装包是.exe可执行文件，直接双击下一步即可，安装路径推荐默认。

<img src="https://images.shiguangping.com/images/Java%E5%AD%A6%E4%B9%A0%E4%B9%8B_%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E5%AE%89%E8%A3%85/Java%E5%AD%A6%E4%B9%A0%E4%B9%8B_%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E5%AE%89%E8%A3%85_%E5%9B%BE1.png" width="400px"/>

### 2. 配置环境变量

JDK安装完成之后，就需要给系统配置Java环境变量了。  

<img src="https://images.shiguangping.com/images/Java%E5%AD%A6%E4%B9%A0%E4%B9%8B_%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E5%AE%89%E8%A3%85/Java%E5%AD%A6%E4%B9%A0%E4%B9%8B_%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E5%AE%89%E8%A3%85_%E5%9B%BE2.png" width="400px"/>

配置环境变量是在：桌面计算机右键属性-->高级系统设置-->环境变量

编辑上图中**系统变量**中的Path，把JDK的路径地址加入到Path中。

*(配置环境变量目的是让操作系统知道JDK)*



JDK的默认安装路径一般在C盘下Program Files -->Java文件夹下，参考下图。

*（路径一定要全，复制到jdk文件夹下的bin文件夹）*

<img src="https://images.shiguangping.com/images/Java%E5%AD%A6%E4%B9%A0%E4%B9%8B_%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E5%AE%89%E8%A3%85/Java%E5%AD%A6%E4%B9%A0%E4%B9%8B_%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E5%AE%89%E8%A3%85_%E5%9B%BE3.png" width="450px"/>

把这个路径粘贴到系统变量的Path中，每个路径之间用“ ; ”隔开，*注意：分号是英文输入状态下的.*

编辑确定之后，在cmd窗口敲入命令：

```shell
java -version
```

<img src="https://images.shiguangping.com/images/Java%E5%AD%A6%E4%B9%A0%E4%B9%8B_%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E5%AE%89%E8%A3%85/Java%E5%AD%A6%E4%B9%A0%E4%B9%8B_%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E5%AE%89%E8%A3%85_%E5%9B%BE5.png" width="400px"/>

终端提示Java版本号，说明环境变量配置成功。

也可以在cmd里敲javac或java，这时说明java环境变量已经配置成功了。 

*如果没有配置成功，终端会显示【不是内部或外部命令，也不是可运行的程序或批处理文件】。* 

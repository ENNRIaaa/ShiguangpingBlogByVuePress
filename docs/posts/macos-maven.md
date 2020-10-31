---
title: Mac OS下安装和配置Maven
date: 2020-05-11 14:52
categories:
- 笔记
tags:
- maven
---

### 1. 下载Maven

1. 打开Maven官方下载网页：[http://maven.apache.org/download.cgi](http://maven.apache.org/download.cgi)

   <img src="https://images.shiguangping.com/imgs/20200511145456.png" alt="image-20200511145456074" style="zoom:50%;" />

2. 解压下载的压缩包放到自己喜欢的目录下，*（放到一个固定的目录，不要随意改动）*

   比如：/Users/liyan/Documents/CodeRepositorise/apache-maven-3.6.3

   ![image-20200511150127552](https://images.shiguangping.com/imgs/20200511150127.png)



### 2. 配置环境变量

1. 打开终端，输入一下命令：

   ```shell
   open ~/.bash_profile
   ```

   打开.bash_profile文件，添加环境变量：

   ```
   export M2_HOME=/Users/liyan/Documents/CodeRepositorise/apache-maven-3.6.3
   export PATH=$PATH:$M2_HOME/bin 
   ```

   ![image-20200511150521799](https://images.shiguangping.com/imgs/20200511150521.png)

   添加好之后保存并退出，执行下面的命令使配置生效：

   ```shell
   source ~/.bash_profile
   ```



### 3. 查看配置是否生效

1. 在终端输入命令：

   ```shell
   mvn -v
   ```

   ![image-20200511150731453](https://images.shiguangping.com/imgs/20200511150731.png)

   ***到这里，Maven配置成功***






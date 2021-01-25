---
title: Linux学习之~ubuntu安装jdk及配置环境变量
date: 2018-05-15 00:00
categories:
- Study
tags:
- JDK安装
- Linux

---
### 1. 下载jdk

前往jdk官网下载jdk，地址：http://www.oracle.com/technetwork/java/javase/downloads/index.html

![请输入图片描述][1]


现在已经更新到jdk10了，但是我下载解压之后发现里面没有jre文件夹，不知为何。为了不发生同样的问题，推荐下载之前的版本。

*（文章具有一定的时效性，不代表之后也会出现同样问题）*

![请输入图片描述][2]


我下载的是linux x64的版本，jdk-8u172-linux-x64.tar.gz

ubuntu系统的话，默认会下载到“下载”里面（我用的ubuntu版本是18.04LTS）

### 2. 创建文件夹，将jdk解压到该文件夹内 ##

1. 进到/usr/lib/文件夹下，


```shell
cd /usr/lib
```

![请输入图片描述][3]


在当前文件夹输入sudo mkdir jvm创建文件夹

```shell
sudo mkdir jvm
```

此时可以用命令查看文件夹是否创建成功

```shell
ls -l
```

看看是否有jvm这个文件夹。
![请输入图片描述][4]

2. 然后利用cd命令回到“下载”文件夹，把下载好的jdk移动到刚刚创建的jvm文件夹

```shell
sudo mv jdk-8u172-linux-x64.tar.gz /usr/lib/jvm
```

然后进入/usr/lib/jvm文件夹，查看该文件是否存在

3. 用tar -zxvf命令解压

```shell
sudo tar -zxvf jdk-8u172-linux-x64.tar.gz
```

解压完成后可以用ls -l命令查看是否解压成功

*（注：在2步骤时，可以在下载文件夹直接将下载好的jdk解压到目标目录/usr/lib/jvm里，然后在回到jvm目录查看是否解压成功）*



也可以直接通过命令解压到指定文件夹：

```shell
sudo tar -zxvf jdk-8u172-linux-x64.tar.gz -C /usr/lib/jvm
```



### 3. 配置环境变量 ##

编辑.bashrc文件

```shell
sudo gedit ~/.bashrc
```



![请输入图片描述][5]


在结尾fi后面加上这四段代码：

```shell
export JAVA_HOME=/usr/lib/jvm/jdk1.8.0_171
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
```

*第一行JAVA_HOME是jdk的安装路径，这里一定不要写错。*



编辑保存之后，在终端输入：

```shell
source ~/.bashrc
```

使.bashrc生效，如果提示权限问题，在命令前面加上sudo

### 4. 安装完成，验证java是否配置完成 ##

在终端输入：

```shell
java -version
```

![请输入图片描述][6]

终端出现java的版本号信息，说明jdk环境变量配置成功。





[1]: https://images.shiguangping.com/images/Linux%E5%AD%A6%E4%B9%A0%E4%B9%8B~ubuntu%E5%AE%89%E8%A3%85jdk%E5%8F%8A%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F/%E5%9B%BE1.png
[2]: https://images.shiguangping.com/images/Linux%E5%AD%A6%E4%B9%A0%E4%B9%8B~ubuntu%E5%AE%89%E8%A3%85jdk%E5%8F%8A%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F/%E5%9B%BE2.png
[3]: https://images.shiguangping.com/images/Linux%E5%AD%A6%E4%B9%A0%E4%B9%8B~ubuntu%E5%AE%89%E8%A3%85jdk%E5%8F%8A%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F/%E5%9B%BE3.png
[4]: https://images.shiguangping.com/images/Linux%E5%AD%A6%E4%B9%A0%E4%B9%8B~ubuntu%E5%AE%89%E8%A3%85jdk%E5%8F%8A%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F/%E5%9B%BE4.png
[5]: https://images.shiguangping.com/images/Linux%E5%AD%A6%E4%B9%A0%E4%B9%8B~ubuntu%E5%AE%89%E8%A3%85jdk%E5%8F%8A%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F/%E5%9B%BE5.png
[6]: https://images.shiguangping.com/images/Linux%E5%AD%A6%E4%B9%A0%E4%B9%8B~ubuntu%E5%AE%89%E8%A3%85jdk%E5%8F%8A%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F/%E5%9B%BE6.png

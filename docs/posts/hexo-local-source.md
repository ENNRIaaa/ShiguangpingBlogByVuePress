---
title: Hexo上传本地源文件到GitHub
date: 2018-06-13 01:34:21
categories:
- 笔记
tags:
- Hexo博客
---

# 前言(可忽略不看) #
这个问题是在我部署完HEXO博客之后就想到的，我要是换了一台电脑或者重新装系统之后，还怎么更新HEXO博客呢？

我今天在网上开始寻找解决办法，上网一看才知道这是很多人很早以前就面临的问题，当然有很多大神做了解答，但是绝大多数的回答我都是看不懂的。大多数的办法是在同一个GitHub仓库创建两个分支，一个用来存放HEXO上传的静态页面，一个用来保存HEXO的本地源文件。但是对于我这个小白来说，仓库一词我都是最近才知道的，更别提分支了。还有一大堆的命令，我也看不懂所以然。

最后，我还是用了这个办法，在原有的仓库基础上再创建一个分支，用来保存本地的源文件。（网上主要的还是这个办法）

我试着把我的操作流程写下来，可能其中会有遗漏或者小错误，遇到问题只能自己解决了。因为我也是凭借自己理解操作的。


# 我为什么要把源文件上传到GitHub呢？ #
因为我今天在电脑上安装了Linux，所以以后敲字都要靠Linux了。  

# 一.本地源文件上传到GitHub： #
## 1.提前准备 ##
首先，不论是在另一台电脑上还是重新安装了系统，都要安装好Node.js和Git，还有HEXO，它们的安装方式具体参考HEXO的[说明文档](https://hexo.io/zh-cn/docs/)。  
## 2.操作流程 ##
1.登录到GitHub，打开hexo所在的仓库，在博客所在的repository新建一个分支**hexo**，在仓库Setting下的Branches中，设置**hexo**为默认分支。
2.克隆repository到本地，命令如下：  

```shell
git@github.com:ENNRIaaa/shiguangping-blog.git
```

注：克隆的文件夹保存在哪取决于你所在的位置，可通过pwd命令查看你当前所在位置。
3.克隆好之后，打开本地的文件夹，默认的文件夹名字就是repository的名字，把文件夹内除了**.git**文件夹之外的所有文件全部删除。注意：**.git**是隐藏文件夹。
4.之后把原电脑上的HEXO文件全部复制到这个文件夹下。
5.复制完之后里面应该有一个名为**.gitignore**文件，如果没有的话通过终端命令创建：

```shell
touch .gitignore
```

正常**.gitignore**的内容是：

- .DS_Store

- Thumbs.db
- db.json
- *.log
- node_modules/
- public/
- .deploy*/

6.切换到**hexo**分支上，命令如下：

```shell
git checkout -b hexo
```

7.提交复制过来的文件到**暂存区**，命令如下：

```shell
git add --all
```

8.提交，命令如下：

```shell
git commit -m "新建分支资源文件"
```

*引号内的内容自定义，就是一个备注。*
9.推送分支到GitHub上，命令如下：

```shell
git push origin hexo
```

推送成功之后，到GitHub仓库刷新一下，看看**hexo**分支下是否已经成功上传了本地的源文件。
到这里，本地的源文件已经上传到GitHub上，HEXO本地源文件直接使用`git push`命令就可以了，HEXO发博客的操作跟以前一样，还是这三步：`hexo c`、`hexo g`、`hexo d -g`。  

*注：期间终端可能会提示需要输入一下密码啊，或者提示让你输入邮箱和用户名等，只需根据提示输入即可。
在安装完Git和node.js之后，我就把SSH密钥配置完了。设置GitHub的SSH密钥，可参考[GitHub如何配置SSH](https://sora.red/2018/GitHub%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AESSH/)。*  

# 二.如果今后换电脑该如何操作 #
本地源文件保存到GitHub之后，今后在其他电脑上或者重装系统后，先把`Git`、`Node.js`、`HEXO`这些基本的都安装好,（*注意：**Hexo**安装好之后不要执行`hexo init`初始化命令*），再把GitHub上保存HEXO源文件的**hexo**分支克隆到本地即可。
克隆分支的命令：

```shell
git clone -b hexo git@github.com:ENNRIaaa/shiguangping-blog.git
```

`-b`后面的是分支的名称，后面替换自己仓库的链接。

# 结尾 #
今天主要提供帮助的是CSDN博主LeonWuV,如果我的文章有一些地方看不懂，或者有错误，可参考[此博主的文章](https://blog.csdn.net/wxl1555/article/details/79293159)。
本文写了一个多小时，终于结束了。虽然很墨迹，但是很快乐。

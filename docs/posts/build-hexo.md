---
title: 小白部署HEXO到GitHub
date: 2018-06-10 02:38:31
categories:
- 笔记
tags:
- Hexo博客

----------
# 前言
呃，终于忙乎完了!

从昨天傍晚的7点半一直到现在的2点50分，并且到目前都还在折腾，这也是第一篇文章，即将要上传到GitHub上的。

之前我是没有接触过GitHub和HEXO的，我现在在用的博客程序是z-blog，它部署在腾讯云，地址是：[时光瓶](https:www.shiguangping.com),现在之所以搞hexo，是因为看到了一位前端大咖的博客，[diygod.me](https://diygod.me/)，看到之后很惊艳，由此认识到了hexo和GitHub。
通过维护这个博客开始我的学习之旅，慢慢了解GitHub，了解开源世界。  

然后说一下现在正在用的这个HEXO主题，这个主题是像素风格的，很有魔性，所以就采用了。在此感谢主题的作者，作者的博客有关于这个主题的说明，虽然我看作者已经很久没有更新他的博客了，[主题作者](http://blackshow.me/).

# 开始搭建
# 1. 本地安装HEXO
安装步骤可以参考官方文档，[中文地址](https://hexo.io/zh-cn/docs/ )。

### 安装前提

- [Node.js](http://nodejs.org/)（Node.js 版本需不低于 8.10，建议使用 Node.js 10.0 及以上版本）

- [Git](http://git-scm.com/)

  *这两个是安装Hexo之前必须要安装的*

### 安装Hexo

```shell
npm install -g hexo-cli
```

安装完Hexo之后，执行下列命令，Hexo会在指定文件夹新建所需文件。

```shell
hexo init <folder>
cd <folder>
npm install
```

新建完成后，指定文件夹的目录如下：

```
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

*每个文件的作用请参考官方文档，文档包含详细的安装和配置步骤。*

```shell
hexo server
```

启动服务，默认情况下，使用浏览器访问地址://localhost:4000/，如果这个地址无效，可通过命令：

```shell
hexo server -p 5000
```

-p 指定端口，重新尝试。如果可以正常访问，页面正常，说明本地配置OK。

# 2. 下载和安装主题

我使用的主题是[blackshow](http://blackshow.me "blackshow")编写的开源主题，该主题基于Freemind修改，样式替换为BOOTSTR.386.作者的博客里有提到。  
1. 安装主题：  

```shell
git clone git@github.com:blackshow/hexo-theme-freemind.386.git themes/freemind
```

2. 安装 hexo-tag-bootstrap （可选）:  
```shell
npm install hexo-tag-bootstrap --save
```

3. 安装 hexo-generatr-search （可选）：  
```shell
npm install hexo-generator-search --save
```

4. 创建页面：
Freemind 预先定义了 Categories（分类）、Tags（标签） 和 About（关于）页面，要使用它们，你需要先在你的博客的 `source` 目录中添加相应页面。
例如，要创建 `Categories` 页面，在终端上:  

```shell
cd /path/to/hexo/
hexo n page categories
```



然后编辑 `source/categories/` 下的 index.md，内容如下：  

```
title: Categories
layout: categories
```



5. 关于主题的配置和一些相关问题，具体请参考主题作者的[说明文档](http://blackshow.me/2015/11/25/hexo-theme-freemind-386-readme-cn/ "说明")和原作者关于Freemind的[说明文档](http://www.hahack.com/codes/hexo-theme-freemind/ "说明文档")。  
6. 每一步如果想预览，使用一下命令，通过浏览器预览访问本地预览：
```shell
hexo server
```



# 3. 把本地Hexo部署到GitHub

1. 注册GitHub帐号，然后登陆。  
2. 在GitHub新建一个repository，页面的右上角有个加号，里面的New repository 
这里的Repository Name要和前面的Owner名字相同，格式就是这样的ENNRIaaa.github.io，ENNRIaaa就是我的Owner名字，然后选择public，创建就可以了。  
3. 编辑HEXO目录下的站点配置文件`_config.yml，`在最下面加上几行  
```
deploy:
      type: git
      repository: https://github.com/ENNRIaaa/ENNRIaaa.github.io.git
      branch: master
```

*把地址替换为自己GitHub库的地址*

然后在终端一次敲如命令：

```shell
hexo clean //清除public文件
hexo g //生成静态文件
hexo d -g //把html静态文件推送到GitHub
```



此时可能会提示输入GitHub的用户名和密码。我看网上有教程说此步骤需要配置SSH，这个由于我没有配置，也不太懂，所以不多说明。*（后续会写如何配置SSH）*

本地文件上传到GitHub之后，访问刚才的**ENNRIaaa.github.io**，看看是否能正常访问到你的博客。

# 4. 绑定个人域名

如果你不需要绑定个人域名，可以忽略这一步，博客可直接通过ENNRIaaa.github.io访问。  
1. 在你域名的解析页面添加解析，我是添加的CNAME，直接解析ENNRIaaa.github.io，有的人添加的A记录解析的博客的IP地址。  
2. 在刚刚创建的GitHub的repository，选择Setting标签页，在下面的GitHub Pages里面有Custom domain，填上你的域名，Save就可以了。如果没有Custom domain，那就把GitHub Pages下的Source改为master branch。  
3. 在访问绑定的域名，看看是否能正常访问到博客。

# 关于新建文章
新建文章需要使用markdown文档编辑工具，我使用的是Typora，支持win/mac平台，编辑时所见即所得。

文章的头部通过这几个标签来定义标题，日期，描述，分类，标签等...（具体只能靠自己摸索）

```
title: 小白部署HEXO到GitHub
date: 2018-06-10 02:38:31
description: 从傍晚到凌晨，HEXO和GitHub摸索中
categories: 生活随笔
tags: [hexo,GitHub]
toc: true
feature:
```




# 总结
我从昨晚一直折腾到今天早晨，很累。

本文搭建流程都靠记忆，因为之前没有接触过这些，我也不是编程工作者，所以很多都是通过google一点一点地查，遇到问题的时候，网上给出的答案也是很零散的。

我写的这个流程可能也有一些错误或者失误的地方，遇到问题只能自己摸索了。  

1. 关于命令以及配置文件.yml对格式的要求很严谨，例如:  

```
type: git
```

*冒号：和后面的git之间都要有空格。*

2. 每次写完文章，上传到GitHub之前都要：

```shell
hexo c --删除public文件夹
hexo g --生成静态文件
hexo d -g --上传到GitHub仓库
```



3. 关于上面三个命令可参照主题作者的[HEXO使用心得](http://blackshow.me/2015/11/30/hexo-cheats/)这篇文章。

  关于搭建和使用hexo，可以看看主题[作者的博客](http://blackshow.me)，他有几遍文章专门是介绍说明HEXO的使用的，很有帮助。

4. 每次上传到GitHub之后，访问绑定的域名可能会遇到404页面，解决办法是到repository的Setting-->GitHub Pages重新设置域名，再到本地hexo目录下的source，添加一个名为CNAME的文件，文件内容是自己绑定的域名，问题解决。不会新建文件的可通过新建文本文档命名为CNAME，然后编辑内容，之后保存，再删除掉该文档的后缀即可，即删除.txt。

---
本文到此结束。

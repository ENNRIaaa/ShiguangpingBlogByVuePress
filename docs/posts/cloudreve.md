---
title: 使用Cloudreve搭建私有云盘
date: 2019-09-09 22:10
categories:
- 笔记
tags:
- 可道云
---
### 1.访问[官网][1]下载源码

<img src="https://images.shiguangping.com/typecho/uploads/2019/09/1528145123.png" width="400px"/>

***下载最新的安装包***

<img src="https://images.shiguangping.com/typecho/uploads/2019/09/3690622660.png" width="400px"/>

### 2.解压缩并将源码上传至服务器空间

将下载好的安装包解压后，将文件夹内的所有文件全部上传至服务器空间

<img src="https://images.shiguangping.com/typecho/uploads/2019/09/2470042002.png" width="400px"/>

### 3.访问域名导入数据库安装

源码上传至空间后，浏览器访问`域名/CloudreveInstaller`进行环境检查，配置数据库信息。

### 4.登录后台配置相关设置

安装完成后，访问【您的域名/admin】，登录到后台，可修改用户名密码，以及配置所需要的设置等

<img src="https://images.shiguangping.com/typecho/uploads/2019/09/4131852593.png" width="400px"/>

### 5.遇到的问题

1. 头像显示问题，上传头像不显示，可能是服务器PHP没有安装【fileinfo】插件。我用的bt面板，在PHP的安装扩展里安装fileinfo即可。
2. 不支持文件夹上传，这个不算是问题，我看论坛，开发者目前没有加入文件夹上传这一功能。


[1]: https://cloudreve.org/

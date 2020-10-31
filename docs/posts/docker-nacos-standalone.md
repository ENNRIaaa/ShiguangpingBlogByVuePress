---
title: Docker部署nacos单机版
date: 2020-09-20 00:05
categories:
- 笔记
tags:
- Java
- Spring-Cloud-Alibaba
- Spring-Cloud
- 服务注册与发现
- 配置中心
---

## 创建nacos容器

- 搜索镜像

  ```bash
  docker search nacos
  ```

- 拉取镜像到本地（未指定版本默认拉取远程仓库中的最新版）

  ```bash
  docker pull nacos/nacos-server
  ```

- 新建nacos容器

  ```bash
  docker run --env MODE=standalone --name nacos -d -p 8001:8848 nacos/nacos-server
  ```

  `--env`:参数是指容器所处的环境，这里是指建立单机版的nacos。
  
  `-p 8001:8848`:8001是主机端口，8848是docker容器端口。



## 配置数据库

- 创建数据库（默认使用mysql数据库）

  ```mysql
  create database nacos_config;
  ```

- 导入sql脚本，[到官网复制](https://github.com/alibaba/nacos/blob/master/config/src/main/resources/META-INF/nacos-db.sql)

- 修改nacos配置文件

  ```bash
  docker exec -it nacos /bin/sh; exit
  ```

  `nacos`为容器名称，进入交互模式，进入conf目录，可以使用vim编辑nacos配置文件`application.properties`。

  ```properties
  # 默认端口号8848（此端口号对应容器端口号）
  server.port=8848
  # 数据库的url/user/pass
  db.url.0=jdbc:mysql://localhost:3306/nacos_config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true
  db.user=root
  db.password=123456
  ```

  `db.url.1`用于配置从数据库，不需要先注释掉



以上都配置完之后重启容器，访问[http://localhost:8001/nacos](http://localhost:8001/nacos)，显示登陆页面，用户名和密码默认都是`nacos`。

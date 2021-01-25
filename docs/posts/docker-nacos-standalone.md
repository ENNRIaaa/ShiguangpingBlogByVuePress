---
title: Docker部署nacos单机版
date: 2020-09-20 00:05
categories:
- Study
tags:
- Docker系列
- Java
- Spring-Cloud-Alibaba
- Spring-Cloud
- 服务注册与发现
- 配置中心
---

## 创建nacos配置数据库

- 创建数据库（默认使用mysql数据库）

  ```mysql
  create database nacos_config;
  ```

- 导入sql脚本，[到官网复制](https://github.com/alibaba/nacos/blob/master/config/src/main/resources/META-INF/nacos-db.sql)

  

## 创建nacos容器

搜索镜像

```bash
docker search nacos
```



拉取镜像到本地（未指定版本默认拉取远程仓库中的最新版）

```bash
docker pull nacos/nacos-server
```



新建nacos容器

```bash
docker run --name nacos -d -p 8001:8848 \
--env MODE=standalone \
--env SPRING_DATASOURCE_PLATFORM=mysql \
--env MYSQL_SERVICE_HOST=192.168.3.6 \
--env MYSQL_SERVICE_PORT=3306 \
--env MYSQL_SERVICE_DB_NAME=nacos_config \
--env MYSQL_SERVICE_USER=root \
--env MYSQL_SERVICE_PASSWORD=123456 \
nacos/nacos-server
```

::: details

```bash
docker run --name nacos -d -p 8001:8848 \ # 主机端口:容器端口
--env MODE=standalone \ # 单机模式
--env SPRING_DATASOURCE_PLATFORM=mysql \ # 使用mysql数据库
--env MYSQL_SERVICE_HOST=192.168.3.6 \ # 数据库地址
--env MYSQL_SERVICE_PORT=3306 \ # 数据库端口号
--env MYSQL_SERVICE_DB_NAME=nacos_config \ # 存储nacos配置的数据库名
--env MYSQL_SERVICE_USER=root \ # 数据库用户名
--env MYSQL_SERVICE_PASSWORD=123456 \ # 数据库密码
nacos/nacos-server # 容器镜像
```

:::



访问[http://localhost:8001/nacos](http://localhost:8001/nacos)，用户名和密码默认都是`nacos`。

---

nacos配置文件：

进入容器命令：

```bash
docker exec -it nacos /bin/sh; exit
```

`/home/nacos/conf`目录下`application.properties`


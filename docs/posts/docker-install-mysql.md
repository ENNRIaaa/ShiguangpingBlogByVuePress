---
title: Docker安装Mysql
date: 2020-11-28
categories:
- Study
tags:
- Docker系列
---

搜索镜像：

```bash
docker search mysql
```

![image-20201127211043383](https://images.shiguangping.com//imgs/20201127211043.png)

拉取镜像：

```bash
docker pull mysql
```

![image-20201128121943884](https://images.shiguangping.com//imgs/20201128121943.png)

创建并运行容器：

```bash
docker run -itd --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
```

连接数据库：

<img src="https://images.shiguangping.com//imgs/20201128122410.png" alt="image-20201128122410639" style="zoom:50%;" />

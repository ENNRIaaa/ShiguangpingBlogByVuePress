---
title: Docker安装Portainer
date: 2020-11-28
categories:
- 笔记
tags:
- Docker系列
---

搜索镜像：
```bash
docker search portainer
```

![image-20201127210229163](https://images.shiguangping.com//imgs/20201127210235.png)

拉取镜像：

```bash
docker pull portainer/portainer
```

![image-20201127210258348](https://images.shiguangping.com//imgs/20201127210258.png)

创建容器：

```bash
docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v /root/docker/portainer:/data --name portainer --restart=always portainer/portainer
```

访问[http://192.168.3.7:9000/](http://192.168.3.7:9000/)，首次登陆要求设置管理员密码：

![image-20201127210639063](https://images.shiguangping.com//imgs/20201127210639.png)

选择要管理的Docker环境，这里选择`Local`：

![image-20201127210752554](https://images.shiguangping.com//imgs/20201127210752.png)

点击`Connect`，进入首页：

![image-20201127210854672](https://images.shiguangping.com//imgs/20201127210854.png)


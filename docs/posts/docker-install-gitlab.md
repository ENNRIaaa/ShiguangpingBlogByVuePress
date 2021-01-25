---
title: Docker部署Gitlab私有仓库
date: 2020-11-22
categories:
- Study
tags:
- Gitlab
- Docker系列
---

使用Docker部署gitlab-ce（社区版），建议内存4G以上，低于2G的机器不要安装。

## 拉取镜像

```bash
docker pull gitlab/gitlab-ce
```

![image-20201121181527118](https://images.shiguangping.com//imgs/20201121181533.png)



## 创建容器

镜像拉取完后，使用一下命令创建容器：

```bash
docker run -d \
  --publish 30443:443 --publish 3080:80 --publish 3022:22 \
  --name gitlab \
  --restart always \
  --volume /root/gitlab/config:/etc/gitlab \
  --volume /root/gitlab/logs:/var/log/gitlab \
  --volume /root/gitlab/data:/var/opt/gitlab \
  gitlab/gitlab-ce
```

::: details 查看命令详情

```bash
docker run -d \ # 创建并后台运行容器
  --publish 30443:443 --publish 3080:80 --publish 3022:22 \ # 端口映射 宿主机:容器
  --name gitlab \ # 容器名称
  --restart always \ # 服务器重启后容器也会随着重启
  --volume /root/gitlab/config:/etc/gitlab \ # 挂载宿主机目录 宿主机:容器
  --volume /root/gitlab/logs:/var/log/gitlab \
  --volume /root/gitlab/data:/var/opt/gitlab \
  gitlab/gitlab-ce # 创建容器的镜像
```

:::

容器创建成功后，使用一下命令查看容器列表：

```bash
docker container ls
```

![image-20201121182312504](https://images.shiguangping.com//imgs/20201121182312.png)

容器状态为`starting`表示容器正在启动，容器状态为`healthy`表示正在健康运行。



## 访问 Gitlab

通过域名及端口号（[http://192.168.3.6:3080](http://192.168.3.6:3080)）访问部署好的gitlab，首次访问会要求设置root密码。

![image-20201121202125003](https://images.shiguangping.com//imgs/20201121202125.png)



## 基本设置

### 设置中文

所有用户登录默认显示语言都是英文，通过以下方式设置中文：

首先，登陆用户，管理员默认用户名是`root`，密码是首次访问gitlab时设置的。

然后，点击右上角头像，按下图操作设置中文。

![image-20201121182718742](https://images.shiguangping.com//imgs/20201121182718.png)



### 配置邮件发送

发送系统邮件是一个比较常用的功能，例如忘记密码可以通过发送邮件设置新密码；创建新用户时，密码会发送到用户邮箱等等。

配置邮件发送，首先发送邮件的邮箱要开启**IMAP/SMTP**设置，并获得SMTP服务器地址以及端口号。

然后，终端进入gitlab挂载到宿主机的`/root/gitlab/config`目录，修改`gitlab.rb`配置文件：

![image-20201121183606044](https://images.shiguangping.com//imgs/20201121183606.png)

使用vim或者vi工具编辑`gitlab.rb`配置文件：

```bash
vim gitlab.rb
```

找到`Gitlab email server setting`，打开一下配置项注释，按下图配置邮件发送：

![image-20201121192003462](https://images.shiguangping.com//imgs/20201121192003.png)

使用下面的命令使配置生效：

```bash
docker exec gitlab gitlab-ctl reconfigure
```

重启容器：

```bash
docker restart gitlab
```

（Gitlab重启耗时较长，需要等待几分钟--!）



### 配置Gitlab地址

邮件发送设置好后，可以尝试给`root`用户设置邮箱，并验证邮箱地址。

如果可以正常接收到来自Gitlab的验证邮箱的邮件，说明邮件发送功能正常。但是，点击邮件中的确认邮件地址时，无法正常访问Gitlab。

![image-20201121191843912](https://images.shiguangping.com//imgs/20201121191843.png)

修改`/opt/gitlab/embedded/service/gitlab-rails/config`中的`gitlab.yml`文件的`host`地址；

修改`/root/gitlab/config`中的`gitlab.rb`文件，找到`external_url`并打开注释，设置地址。

有了地址就可以正常拉取和推送代码。

![image-20201121192505719](https://images.shiguangping.com//imgs/20201121192505.png)

重启配置并重启容器，至此，Gitlab可以正常使用了。



---

::: details FAQ

1. 遇到容器反复重启，查看日志显示没有操作权限：

   ```bash
   sudo docker run -d \
     --sysctl net.core.somaxconn=1024 \
     --ulimit sigpending=62793 \
     --ulimit nproc=131072 \
     --ulimit nofile=60000 \
     --ulimit core=0 \
     --publish 30443:443 --publish 3080:80 --publish 3022:22 \
     --name gitlab \
     --restart always \
     --volume /root/gitlab/config:/etc/gitlab \
     --volume /root/gitlab/logs:/var/log/gitlab \
     --volume /root/gitlab/data:/var/opt/gitlab \
     --volume /root/gitlab/localtime:/etc/localtime \
     gitlab/gitlab-ce
   ```

2. 修改`gitlab.yml`中的host后，重启容器主机地址不生效。

   - 修改完`gitlab.yml`后，在容器内执行重启命令：

     ```bash
     gitlab-ctl restart 
     ```




:::




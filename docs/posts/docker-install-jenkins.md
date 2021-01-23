---
title: Docker安装Jenkins
date: 2020-09-28 16:10
categories:
- Docker
- CI/CD
tags:
- Java
- Docker系列
- Jenkins
- CI/CD
---

建议使用的Docker映像是[`jenkinsci/blueocean` image](https://hub.docker.com/r/jenkinsci/blueocean/)(来自 the [Docker Hub repository](https://hub.docker.com/))。 该镜像包含当前的[长期支持 (LTS) 的Jenkins版本](https://www.jenkins.io/download) （可以投入使用） ，捆绑了所有Blue Ocean插件和功能。这意味着你不需要单独安装Blue Ocean插件。

### 在macOS和Linux上

1. 打开一个终端窗口。
2. 下载 `jenkinsci/blueocean` 镜像并使用以下docker run 命令将其作为Docker中的容器运行 ：

```
$ docker run \
  -u root \
  -d \
  -p 7999:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkinsci/blueocean
```

直接docker run，第一次会自动拉取远程仓库中最新的镜像

通过7999端口访问主机上的Jenkins



### 安装后设置向导

Jenkins容器运行起来后，访问`http://localhost:7999/`会进入安装向导。

此安装向导会引导您完成几个快速“一次性”步骤来解锁Jenkins， 使用插件对其进行自定义，并创建第一个可以继续访问Jenkins的管理员用户。

##### 解锁 Jenkins

当您第一次访问新的Jenkins实例时，系统会要求您使用自动生成的密码对其进行解锁。

浏览到 `http://localhost:7999`（或安装时为Jenkins配置的任何端口），并等待 **解锁 Jenkins** 页面出现。

<img src="https://images.shiguangping.com/imgs/20200928162439.jpg" alt="Unlock Jenkins page"  />

从Jenkins控制台日志输出中，复制自动生成的字母数字密码（在两组星号之间）。

使用Docker可视化工具，容器跑起来之后，控制台会打印日志消息：

<img src="https://images.shiguangping.com/imgs/20200928161859.png" alt="image-20200928161859517"  />

在 **解锁Jenkins** 页面上，将此 **密码** 粘贴到管理员密码字段中，然后单击 **继续** 。

如果没有使用可视化工具，则可以从Docker日志（[above](https://www.jenkins.io/zh/doc/book/installing/#accessing-the-jenkins-console-log-through-docker-logs)） 访问Jenkins控制台日志。

或者在`/var/jenkins_home/secrets/initialAdminPassword`找到密码。

##### 自定义jenkins插件

解锁 Jenkins之后，在 **Customize Jenkins** 页面内， 可以安装任何数量的有用插件作为初始步骤的一部分。

两个选项可以设置:

- **安装建议的插件** - 安装推荐的一组插件，这些插件基于最常见的用例.
- **选择要安装的插件** - 选择安装的插件集。当你第一次访问插件选择页面时，默认选择建议的插件。

>如果不确定需要哪些插件，请选择 **安装建议的插件** 。 之后可以通过Jenkins中的[**Manage Jenkins**](https://www.jenkins.io/zh/doc/book/managing) > [**Manage Plugins**](https://www.jenkins.io/zh/doc/book/managing/plugins/) 页面在稍后的时间点安装（或删除）其他Jenkins插件 。

##### 创建第一个管理员用户

最后，在`customizing Jenkins with plugins`之后，Jenkins要求创建第一个管理员用户。 . 出现“ **创建第一个管理员用户** ”页面时， 请在各个字段中指定管理员用户的详细信息，然后单击 **保存完成** 。 . 当 **Jenkins准备好了** 出现时，单击*开始使用 Jenkins*。

**Notes:** * 这个页面可能显示 **Jenkins几乎准备好了!** 相反，如果是这样，请单击 **重启** 。 * 如果该页面在一分钟后不会自动刷新，请使用Web浏览器手动刷新页面。如果需要，请使用您刚刚创建的用户的凭据登录到Jenkins，并准备好开始使用Jenkins！

>从这时起，Jenkins用户界面只能通过提供有效的用户名和密码凭证来访问。


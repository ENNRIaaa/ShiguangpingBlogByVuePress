---
title: Docker入门
date: 2020-12-31
categories:
- Docker
tags:
- Docker
---

## Docker概述

Docker 是一个开源项目，诞生于 2013 年初，最初是 dotCloud 公司内部的一个业余项目。它基于 Google 公司推出的 Go 语言实现。 项目后来加入了 Linux 基金会，遵从了 Apache 2.0 协议，项目代码在 [GitHub](https://github.com/docker/docker) 上进行维护。

Docker 自开源后受到广泛的关注和讨论，以至于 dotCloud 公司后来都改名为 Docker Inc。Redhat 已经在其 RHEL6.5 中集中支持 Docker；Google 也在其 PaaS 产品中广泛应用。

Docker 项目的目标是实现轻量级的操作系统虚拟化解决方案。 Docker 的基础是 Linux 容器（LXC）等技术。

在 LXC 的基础上 Docker 进行了进一步的封装，让用户不需要去关心容器的管理，使得操作更为简便。用户操作 Docker 的容器就像操作一个快速轻量级的虚拟机一样简单。

下面的图片比较了 Docker 和传统虚拟化方式的不同之处，可见容器是在操作系统层面上实现虚拟化，直接复用本地主机的操作系统，而传统方式则是在硬件层面实现。

![传统虚拟化](https://images.shiguangping.com//imgs/20201231130316.png)

![Docker](https://images.shiguangping.com//imgs/20201231130325.png)

#### 在任何地方开发、部署和运行任何应用

> Docker是一款针对程序开发人员和系统管理员来开发、部署、运行应用的一款虚拟化平台。Docker 可以让你像使用集装箱一样快速的组合成应用，并且可以像运输标准集装箱一样，尽可能的屏蔽代码层面的差异。Docker 会尽可能的缩短从代码测试到产品部署的时间。

Docker 组件

- The Docker Engine – Docker Engine 是一个基于虚拟化技术的轻量级并且功能强大的开源容器引擎管理工具。它可以将不同的 work flow 组合起来构建成你的应用。
- Docker Hub 可以分享和管理你的images镜像的一个 Saas 服务。



#### 为什么选择Docker

- 隔离开发与管理，即使系统管理员更改容器，程序员也无需关系容器（程序运行的环境）的变化，只需要关注代码本身。简化了开发和部署成本；
- 构建简单，可以快速迭代应用，并且可以可视化地查看应用细微的更改；
- Docker相对轻量，甚至可以达到秒级的启动速度；
- Docker容器可以运行在大多数环境中；
- 
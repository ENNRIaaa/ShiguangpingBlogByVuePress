---
title: IDEA中的Web项目移动到Eclipse
date: 2020-06-01 22:19:00
categories:
- 笔记
tags:
- IntelliJ IDEA
- eclipse
---

### 1. 在IDEA中，打开模块设置：

<img src="https://images.shiguangping.com/imgs/20200601222200.png" alt="image-20200601222200817" width="500px" />

在模块设置中，将依赖存储格式改为Eclipse：

<img src="https://images.shiguangping.com/imgs/20200601222414.png" alt="image-20200601222414387" width="500px" />



### 2. 在Eclipse中导入项目：（File-->Import）

<img src="https://images.shiguangping.com/imgs/20200601222710.png" alt="image-20200601222710166" width="500px" />

下一步，然后选择项目路径，完成导入：

<img src="https://images.shiguangping.com/imgs/20200601223017.png" alt="image-20200601223017267" width="500px" />

### 3. 修改项目相关设置，勾选成动态Web模块

项目右键-->properties中：

<img src="https://images.shiguangping.com/imgs/20200601223242.png" alt="image-20200601223242735" width="650px" />

### 4. 缺少Tomcat依赖：

完成上述步骤之后，发现Servlet类中跟Servlet有关的代码报错，则大概是因为缺少Tomcat依赖导致的。此时，通过项目build path config中添加Tomcat库即可：

<img src="https://images.shiguangping.com/imgs/20200601223822.png" alt="image-20200601223822121" width="650px" />



*完成上述步骤之后，把项目Add到Tomcat容器中，运行Tomcat，此时项目应该可以正常跑起来了~*

---

*@Author liyan*

*@blog [shiguangping.com](https://www.shiguangping.com)*

*@Date 2020-6-1*


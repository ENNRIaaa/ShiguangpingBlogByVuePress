---
title: Java编译运行时报错尝试解决办法
date: 2020-04-20 18:02
categories:
- Study
tags:
- eclipse
---

"Description Resource Path Location Type Java compiler level does not match the version of"解决办法
project编译问题，需要有三处的jdk版本保持一致，才能编译通过。

1. 在右键项目-->properties-->project Facets-->修改右侧Java的version，要与当前项目jdk版本保持一致

   ![](https://images.shiguangping.com/imgs/20200420161608.png)

2. 设置选项preference-->java-->Compiler-->设置的右侧的Compiler compliance level

   ![](https://images.shiguangping.com/imgs/20200420162147.jpg)

   *这一步有的时候不匹配也能编译运行通过*

3. preferences-->java-->Installed JREs-->设置或者选择右侧的Installed JREs

   ![](https://images.shiguangping.com/imgs/20200420162237.jpg)

   *这里就是jre环境路径*

***说明：***
***这个报错的解决办法，首先检查前两步骤，第一步骤修改完之后会解决当前项目的报错问题，程序可以正常编译运行，但是再新建项目之后，任然会出现该问题；第二步骤修改完之后，可以解决新项目报错问题，避免每次新建项目都需要手动去修改第一步骤；第三步就是当前jdk的开发环境，这个一般都没问题。***

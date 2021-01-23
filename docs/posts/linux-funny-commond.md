---
title: Linux的几个有趣命令
date: 2018-06-14 14:53:09
categories:
- Linux
tags:
- Linux
---

#### sl命令

你会看到一辆小货车从屏幕右边开到了左边～  
```shell
安装：sudo apt-get install sl
运行：sl
```



#### fortune命令

输出一句话，有笑话、名言、唐诗宋词等等：
```shell
安装：sudo apt-get install fortune
运行：fortune
```



#### cowsay命令

用ASCII字符打印牛、羊等动物。还有`cowthink`命令，这是是奶牛想，命令：

```shell
安装：sudo apt-get install cowsay
运行：cowsay -f tux "坑爹啊～"

cowsay -l    查看其他动物的名字
cowsay -f 动物们 "坑爹啊～"    可其他动物
```

#### cmatrix命令

这个是《黑客帝国》里面的代码雨，很cool：
```shell
安装：sudo apt-get install cmatrix
运行：cmatrix
```

使用`Ctrl+C`程序结束。  

#### figlet、toilet命令

艺术字生成器，由ASCII字符组成，把文本显示成标题栏。此外还有banner这个命令：

```shell
安装：sudo apt-get install figlet
    sudo apt-get install toilet
运行：figlet I LOVE YOU !
    toilet I LOVE YOU !
```

此外`toilet`还可以添加颜色
```shell
toilet -f mono -F gay I LOVE YOU !
```



#### oneko命令

这个也比较有趣，桌面上出现一只喵星人，会跟着你的鼠标再跑，`Ctrl+C`结束：
```shell
安装：sudo apt-get install oneko
运行：oneko
```



#### yes命令

一直输出字符，使用`Ctrl+C`结束：
```shell
yes I LOVE YOU !
```



#### cal命令

这个是打印日历：
```shell
cal 6 2018
```

# 结尾 #

这些命令是在今日头条看到的，很有趣。

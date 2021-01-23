---
title: 在Linux中使配置alias永久生效
date: 2018-06-13 15:06:45
categories:
- Linux
tags: 
- Linux
- alise
---

### 编辑.bashrc

在终端，通过命令回家：
```shell
cd ~
```

之后通过文本编辑器编辑文本`.bashrc`：
```shell
sudo gedit .bashrc
```

或者，使用vim编辑：
```shell
sudo vim .bashrc
```


如果没有`.bashrc`文件，需要手动创建一个。

*注意：`.bashrc`是隐藏文件，在文件管理器中查看时需要勾选`显示隐藏文件`。*



创建好之后，在`.bashrc`最后一行添加你要设置的alias命令，例如：

```shell
alias hxc='rm -f ~/blog/db.json && hexo clean'
```

如果是新建的`.bashrc`文件，直接在里面添加alias命令就可以，命令是一行一行的。

添加完之后保存，再通过source命令使刚才的配置文件生效：  

```shell
source .bashrc
```



之后在终端敲击`alias`命令，查看刚刚配置的alias命令是否生效。

### 编辑.bash_profile

在`.bash_profile`最后一行添加一条命令：
```shell
source ~/.bash_profile
```

*注意：如果没有`.bash_profile`文件就新建一个。*

添加完之后保存退出，终端通过source命令使配置生效：

```shell
source .bash_profile
```

此时可以重新打开终端，输入`alias`命令，查看配置的alias是否已经生效。


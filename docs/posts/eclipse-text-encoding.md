---
title: 解决Linux中eclipse导入Windows项目后出现中文乱码问题
date: 2018-05-16 00:00
categories:
- 笔记
tags:
- eclipse
---
我今天遇到这个问题，在百度问了一遍，大多数的方法都不行

最后一个人给出的方法解决了这个问题

<img src="https://images.shiguangping.com/images/linux%20eclipse%E5%AF%BC%E5%85%A5windows%E5%B7%A5%E7%A8%8B%E5%90%8E%E5%87%BA%E7%8E%B0%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95/%E5%9B%BE1.png" width="500px"/>

我在linux下的eclipse导入windows的工程文件后，会出现这样的乱码问题。

网上说，windows的中文编码方式是GBK，而linux采用的中文编码方式是UTF-8

所以把linux的编码方式改一下就可以了。

在出现乱码的文件，键盘敲入 alt+Enter，会出现一个对话框

<img src="https://images.shiguangping.com/images/linux%20eclipse%E5%AF%BC%E5%85%A5windows%E5%B7%A5%E7%A8%8B%E5%90%8E%E5%87%BA%E7%8E%B0%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95/%E5%9B%BE2.png " width="500px"/>

在下面的Text file encoding，Other里面直接输入GBK，然后应用，这时正常的中文就回来了。

<img src="https://images.shiguangping.com/images/linux%20eclipse%E5%AF%BC%E5%85%A5windows%E5%B7%A5%E7%A8%8B%E5%90%8E%E5%87%BA%E7%8E%B0%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95/%E5%9B%BE3.png " width="500px"/>

**感谢这个大神**

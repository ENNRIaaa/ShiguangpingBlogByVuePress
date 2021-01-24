---
title: Flutter笔记
date: 2021-1-24
categories:
- Flutter
tags:
- Flutter
---



在Flutter中一切皆是组件`widget`。



### 第一个Demo

```dart
import 'package:flutter/cupertino.dart';

void main()=>runApp(
  new Center(
    child: new Text(
      '你好 Flutter',
      textDirection: TextDirection.ltr,
    ),
  )
);
```



模拟器效果：

![image-20210124205345139](https://images.shiguangping.com/imgs/20210124205345.png)


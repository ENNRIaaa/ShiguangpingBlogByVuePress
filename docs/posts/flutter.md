---
title: Flutter笔记
date: 2021-1-24
categories:
- Flutter
tags:
- Flutter
---



>在Flutter中一切皆是组件`widget`。



## 第一个Demo

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

<img src="https://images.shiguangping.com/imgs/20210124205345.png" style="width: 150px"/>



在Dart中实例化对象可以省略new关键字

```dart
import 'package:flutter/cupertino.dart';

void main()=>runApp(
   Center(
    child:  Text(
      '你好 Flutter',
      textDirection: TextDirection.ltr,
    ),
  )
);
```



## 自定义组件

在Flutter中，组件`widget`实际上是一个类，自定义组件就是自定义一个类。

定义一个类，继承`StatelessWidget`或者`StatefulWidget`抽象类。前者表示无状态组件，后者表示有状态组件。

实现抽象类中的`build()`方法，返回一个`Widget`。

```dart
import 'package:flutter/cupertino.dart';

void main()=>runApp(MyApp());

// 自定义组件
class MyApp extends StatelessWidget{
@override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Center(
      child:  Text(
        '你好 Flutter',
        textDirection: TextDirection.ltr,
      ),
    );
  }
}
```


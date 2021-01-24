---
title: Flutter笔记
date: 2021-1-24
categories:
- Flutter
tags:
- Flutter
---



::: tip

今天是我的生日，祝我生日快乐:tada:。

:::

<img src="https://images.shiguangping.com/imgs/20210124214824.png" alt="image-20210124214824401" style="width: 500px"/>



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



在Dart中实例化对象可以省略`new`关键字

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



## Material 和 Scaffold

### Material

`MaterialApp`是一个方便的Widget，它封装了应用程序实现Material Design所需的一些Widget。一般作为一个App中最基础的widget使用，其余组件都构建在这个组件上。

`MatetialApp`中常用属性：

| 属性   | 说明 |
| ------ | ---- |
| home   | 主页 |
| title  | 标题 |
| color  | 颜色 |
| theme  | 主题 |
| routes | 路由 |



### Scaffold

`Scaffold`是 Material Design布局结构的基本实现。此类提供了用于显示`drawer`、`snackbar`和底部`sheet`的API。

`Scaffold`主要的属性：

| 属性   | 说明                            |
| ------ | ------------------------------- |
| appBar | 显示在界面顶部的AppBar          |
| body   | 当前界面所显示的主要内容 Widget |
| drawer | 抽屉菜单控件                    |



```dart
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

// 自定义组件
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return HomeContent();
  }
}

class HomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
        title: 'First App Demo',
        home: Scaffold(
            appBar: AppBar(
              title: Text('flutter'),
            ),
            body: Center(
              child: Text(
                'Happy Birthday ~',
                style: TextStyle(
                    fontSize: 30.0,
                    color: Colors.blue,
                    fontWeight: FontWeight.w500),
                textDirection: TextDirection.ltr,
              ),
            )),
        theme: ThemeData(
          primaryColor: Colors.white
        )
    );
  }
}
```

模拟器效果：

<img src="https://images.shiguangping.com/imgs/20210124215829.png" alt="image-20210124215829363" style="width: 150px;" />




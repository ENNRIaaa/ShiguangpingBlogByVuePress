---
title: Dart语言入门
date: 2020-12-12
categories:
- 一周学一个技术
tags:
- Dart
---

## 入口方法

```dart
// void 表示没有返回值
void main() {
  print('你好，Dart');
}
```



## 变量

Dart是强类型语言，变量的数据类型会在初始化时确定。

```dart
void main() {
  /**
   * 使用var声明变量
   * Dart是强类型语言，会通过初始化时赋值的数据类型确定变量的数据类型，且之后不可改变，这与JavaScript不同
   */
  var str = 'Hello Dart';
  var num = 123;

  /**
   * 也可以显示地指定数据类型
   */
  String str1 = 'Hello Dart';
  int num1 = 123;
}
```



变量的命名规则：

1. 变量名（标识符）必须由字母、数字、下划线或美元符($)组成；
2. 变量名（标识符）开头不能为数字；
3. 变量名（标识符）不能是关键字或保留字；
4. 变量名（标识符）严格区分大小写；
5. 变量名（标识符）要见名知意，建议使用名词；方法名建议使用动词。

*变量名、方法名、类名等统称标识符。*



## 常量

Dart使用`const`或`final`关键字声明常量

```dart
void main() {
  /**
   * 初始化后不可改变的量叫常量。
   * 
   * 使用 final 或 const 关键字声明常量
   * const 声明常量，声明时必须初始化
   * final 不仅有const编译时常量的特性，最重要的是它是运行时常量。并且final是惰性初始化，即在运行时第一次使用时才初始化
   * 
   */
  const PI = 3.14159;

  // 将一个方法的返回值赋值给一个常量时，使用 final 声明
  final NOW = new DateTime.now();
}
```



## 数据类型

Dart支持以下数据类型：

常用数据类型：

- 数值类型(Numbers)：
  - `int`
  - `double`
- 字符串(String)：
  - `String`
- 布尔类型(Boolean)：
  - `bool`
- 数组（列表）List：
  - 在Dart中，数组是列表对象，所以大多数人称它为列表
- 字典(Map)：
  - 键值对

### 

### 字符串拼接

```dart
void main() {
  var lastName = 'li';
  var firstName = 'yan';
	
  // EL表达式的形式，直接在引号内通过美元符($)引用变量
  print('My name is $lastName $firstName'); // 输出结果：My name is li yan
  
  // 像Java一样使用字符串连接符(+)连接字符串与变量
  print('My name is ' + lastName + ' ' + firstName); // 输出结果：My name is li yan
}
```

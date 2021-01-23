---
title: Dart语言入门
date: 2020-12-12
categories:
- Flutter
tags:
- Dart
---

## 入口方法

```dart {2}
// void 表示没有返回值
void main() {
  print('你好，Dart');
}
```



## 变量

Dart是强类型语言，变量的数据类型会在初始化时确定。

```dart {6,7,12,13}
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

```dart {10,13}
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



### 字符串拼接

```dart {6,9}
void main() {
  var lastName = 'li';
  var firstName = 'yan';
	
  // EL表达式的形式，直接在引号内通过美元符($)引用变量
  print('My name is $lastName $firstName'); // 输出结果：My name is li yan
  
  // 像Java一样使用字符串连接符(+)连接字符串与变量
  print('My name is ' + lastName + ' ' + firstName); // 输出结果：My name is li yan
}
```



### 类型判断

使用`is`关键字判断变量的类型

```dart {4}
void main() {
  var str = 'abc';
  
  if (str is String) {
    print('str是字符串');
  } else {
    print('str不是字符串');
  }
}
```



### 类型转换

字符串转数字

```dart {6,13}
void main() {
  /**
   * String 转成 int 类型数据
   */
  String str1 = '123';
  var num1 = int.parse(str1);
  print(num1); // 输出结果：123

  /**
   * String 转成 double 类型数据
   */
  String str2 = '100.25';
  var num2 = double.parse(str2);
  print(num2); // 输出结果：100.25
}
```

`try-catch`抓住异常：

```dart {6,7,8,9,10,11,12}
void main() {
  // 假设str为空，在转换成数值时会报错
  String str = '';

  // 使用try-catch抓异常，当try块中的代码发生异常时会执行catch中的语句，catch中的参数err会接收到异常信息
  try {
    var num = double.parse(str);
    print(num);
  } catch (err) {
    var num = 0;
    print(num); // 输出结果：0
  }
}
```

数字转字符串：

```dart {4}
void main() {
  int num = 123;

  var str = num.toString();

}
```

判断字符串是否为空：

```dart {4}
void main() {
  
  String str1 = '';
  print(str1.isEmpty); // 输出结果：true
  
}
```





## List

Dart中的List类似JavaScript中的数组，有序、可变长度、可以存放不同数据类型的元素。可以通过`new List()`实例化List对象，也可以声明变量的同时直接赋值。

Dart中的List可以在实例化时指定存放元素的数据类型。

```dart {3,7,11,12,16,19,20,21,26,28}
void main() {
  // 第一种定义List的方式
  var l1 = ['aaa', 'bbb', 'ccc'];
  print(l1); // 输出结果：[aaa, bbb, ccc]

  // 获取列表(数组)长度 length 属性
  var len = l1.length;
  print(len); // 输出结果：3

  // 获取列表中的元素 通过索引
  var val1 = l1[0];
  var val2 = l1[1];
  print('第一个元素：$val1，第二个元素：$val2'); // 输出结果：第一个元素：aaa，第二个元素：bbb

  // 第二种定义List的方式
  var l2 = new List();

  // 向列表中添加元素 add() 方法
  l2.add('aaa');
  l2.add(123);
  l2.add(true);

  print(l2); // 输出结果：[aaa, 123, true]

  // 指定List的元素类型 泛型
  var l3 = new List<String>();
  l3.add(123); // 会报错，l3中只能存放字符串
  l3.add('abc');
}
```



## Map

Dart中的Map类似JavaScript中的对象，可以在声明变量的同时直接赋值，也可以通过`new Map()`的方式实例化Map对象。

```dart {3,4,5,6,7,12,16,19,20,21}
void main() {
  // 定义Map：声明变量的同时直接赋值
  var person = {
    'name': '张三',
    'age': 20,
    'lang': ['Java', 'Dart', 'JavaScript']
  };

  print(person); // 输出结果：{name: 张三, age: 20, lang: [Java, Dart, JavaScript]}

  // 从Map中取出元素
  var name = person['name'];
  print(name); // 输出结果：张三

  // 定义Map：使用new Map()实例化Map对象
  var cat = new Map();

  // 向Map中存入元素
  cat['name'] = '花花';
  cat['age'] = 3;
  cat['gender'] = '小母猫';

  print(cat); // 输出结果：{name: 花花, age: 3, gender: 小母猫}
}
```



## 运算符

### 算术运算符

算术运算符有加`+`、减`-`、乘`*`、除`/`、取余`%`、取整`~/`

```dart {6,9,12,15,18,21}
void main() {
  int a = 13;
  int b = 5;

  // 加
  print(a + b); // 输出结果：18

  // 减
  print(a - b); // 输出结果：8

  // 乘
  print(a * b); // 输出结果：65

  // 除
  print(a / b); // 输出结果：2.6

  // 取余
  print(a % b); // 输出结果：3

  // 取整
  print(a ~/ b); //输出结果：2
}
```

自增`++`和自减`--`运算符：

```dart
// 自增在变量左侧和在变量右侧执行是不一样的
// ++在右，先执行当前语句，再自加
void main() {
  var a = 1;
  print(a++); // 结果：1
}

// ++在左，先自加，再执行当前语句
void main() {
  var a = 1;
  print(++a); // 2
}

// 自减同理
```



### 关系运算符

关系运算符有等于`==`、不等于`!=`、大于`>`、小于`<`、大于等于`>=`、小于等于`<=`

```dart {6,9,12,15,18,21}
void main() {
  int a = 5;
  int b = 3;

  // 判断是否相等
  print(a == b); // 输出结果：false

  // 判断是否不能
  print(a != b); // 输出结果：true

  // 判断是否大于
  print(a > b); // 输出结果：true

  // 判断是否小于
  print(a < b); // 输出结果：false

  // 判断是否大于等于
  print(a >= b); // 输出结果：true

  // 判断是否小于等于
  print(a <= b); // 输出结果：false
}
```



### 逻辑运算符

逻辑运算符有与`&&`、或`||`、非`!`，其中与、或还有这种形式`&`、`|`

```dart {15,23,28,29}
void main() {
  /**
   * 逻辑运算符有三种：与 && 、或 || 、非 ！
   */

  bool f1 = true;
  bool f2 = false;

  /**
   * && 左右两边全部为true时为true，否则为false
   * 
   * && 短路与：当左边为false时，不再计算符号右边的表达式
   * & ：左右两边都计算
   */
  print(f1 && f2); // 输出结果：false

  /**
   * || 左右两边有一边为true时为true，两边都是false，则是false
   * 
   * || 短路或：当左边为true时，不再计算符号右边的表达式
   * | ：左右两边都计算
   */
  print(f1 || f2); // 输出结果：true

  /**
   * 非：取反
   */
  print(!f1); // 输出结果：false
  print(!f2); // 输出结果：true
}
```



### 赋值运算符

基本的赋值运算符：`=`、`??=`

复合赋值运算符：`+=`、`-=`、`*=*`、`/=`、`%=`、`~/=`

```dart {8,9,11,17,30,33,36}
void main() {
  /**
   * 1. 基础赋值运算符
   * 
   * =
   * ??=
   */
  int a = 3;
  int b = 10;

  int c = a + b;

  print(c); // 输出结果：13

  // ??= 当符号左侧变量为null时，将符号右侧的值赋值给符号左侧
  int x;
  x ??= 23;

  print(x); // 输出结果：23

  /**
   * 2. 复合赋值运算符
   * 
   * += -= *= /= %= ~/=
   */
  int i = 5;
  int j = 13;

  // += 先相加，再将结果赋值给符号左边
  print(i += j); // 输出结果：18

  // -= 先相减，再将结果赋值给符号左边
  print(i -= j); // 输出结果：5

  // *= 先相乘，再将结果赋值给符号左边
  print(i *= j); //输出结果：65
}
```



## 流程控制

### 条件语句

`if-else`：

```dart
void main() {
  /**
   * if-else
   */

  int a = 3;
  int b = 5;

  if (a > b) {
    print('max num is $a');
  } else {
    print('max num is $b');
  }
}
```

三目运算符：

```dart {7}
void main() {
  bool flag = true;

  /**
   * 条件表达式 ? 表达式为真时 : 表达式为假时
   */
  var str = flag ? 'flag = true' : 'flag = false';

  print(str); // 输出结果：flag = true
}
```

`??`运算符：

```dart {7}
void main() {
  var a;

  /**
   * ??左侧不为空时将左侧赋值给变量b，否则将??右侧的值赋值给变量b
   */
  var b = a ?? 10;

  print(b);
}
```



### 循环语句

for循环：

```dart {5,6,7}
void main() {
  var sum = 0;

  // for (声明变量; 条件表达式; 循环体执行完一次后执行) { 循环体 }
  for (var i = 0; i <= 100; i++) {
    sum += i;
  }

  print('0-100的累加和：$sum'); // 5050
}
```

while循环：

```dart {5,6,7,8}
void main(List<String> args) {
  var sum = 0;
  var i = 0;
  
  while (i <= 100) {
    sum += i;
    i++;
  }

  print('0-100的累加和：$sum'); // 5050
}
```

do-while循环：

```dart
void main(List<String> args) {
  var sum = 0;
  var i = 0;

  do {
    sum += i;
    i++;
  } while (i <= 100);

  print('0-100的累加和：$sum'); // 5050
}
```

do-while是先执行再判断

#### break 关键字

1. 在switch语句中是流程跳出switch结构；
2. 在循环语句中，终止循环。嵌套循环结构中，只会终止当前一层循环，外层循环继续执行；
3. break可用在switch-case中，也可用在for循环、while循环中。



## 集合

### List

```dart
abstract class List<E> implements EfficientLengthIterable<E>{...}
```

Dart中的List实现了EfficientLengthIterable抽象类，该抽象类继承了Iterable抽象类。

定义集合

```dart
List fruits = ['西瓜','苹果','哈密瓜'];
```

或者

```dart
var fruits = new List();
fruits.add('橘子');
```

常用属性

| 属性       | 作用                              |
| ---------- | --------------------------------- |
| length     | 返回int类型的集合长度（元素个数） |
| isEmpty    | 判读集合是否为空，返回bool        |
| isNotEmpty | 判断集合是否不为空，返回bool      |
| reversed   | 翻转集合                          |

常用方法

| 方法                                          | 作用                                                         |
| --------------------------------------------- | ------------------------------------------------------------ |
| add(E value)                                  | 在集合尾部添加元素                                           |
| addAll(Iterable<E> iterable)                  | 在集合尾部添加一个集合                                       |
| indexOf(E element)                            | 返回元素在集合中的索引值，元素不存在返回-1                   |
| remove(Object? value)                         | 移除集合中的元素，元素不存在返回false                        |
| removeAt(int index)                           | 通过索引移除集合中的元素，返回被移除的元素                   |
| fillRange(int start, int end, [E? fillValue]) | 修改从起始到结束前一个的所有元素，如(0,1,'aaa'),是将集合中的第一个元素修改为aaa |
| insert(int index, E element)                  | 在指定索引处插入元素                                         |
| insertAll(int index, Iterable<E> iterable)    | 在指定索引处插入一个集合                                     |
| join([String separator = ""])                 | 将集合转为字符串，参数列表传入分隔符                         |

字符串转为`List<String>`数组

```dart
var str = 'aaa,bbb,ccc';
var arr = str1.split(',');
```



### Set

Set通用继承EfficientLengthIterable抽象类，不同点在于它无序，且不能存入重复元素。

List集合元素去重：

```dart
void main(List<String> args) {
  List fruits = [
    '西瓜',
    '苹果',
    '哈密瓜',
    '西瓜',
    '苹果',
  ];

  var s = fruits.toSet();
  print(s); // {西瓜, 苹果, 哈密瓜}
}
```



### Map

Map是一种`key:value`的数据

定义Map

```dart
var person = {'name': '张三', 'age': 17, 'gender': '男'};
```

或者

```dart
var person = new Map();

info['name'] = '张三';
info['age'] = 17;
info['gender'] = '男';
```


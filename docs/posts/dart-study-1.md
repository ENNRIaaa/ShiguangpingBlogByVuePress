---
title: Dart语言入门
date: 2020-12-12
categories:
- Study
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



常用属性

| 属性       | 作用                                              |
| ---------- | ------------------------------------------------- |
| keys       | 返回Map中的所有key值，返回`Iterable<K>`类型数据   |
|            | 返回Map中的所有value值，返回`Iterable<K>`类型数据 |
| isEmpty    | 判断Map是否为空，返回bool                         |
| isNotEmpty | 判断Map是否不为空，返回bool                       |



常用方法

| 方法                         | 作用                                        |
| :--------------------------- | ------------------------------------------- |
| addAll(Map<K, V> other)      | 添加键值对                                  |
| remove(Object? key)          | 通过key移除Map中的键值对，返回被移除的value |
| containsKey(Object? key)     | 判断Map中是否包含指定key                    |
| containsValue(Object? value) | 判断Map中是否包含指定value                  |



### 遍历集合

for循环

```dart
void main() {
  List list = ['Appli', 'Google', 'Microsoft'];

  for (int i = 0; i < list.length; i++) {
    print(list[i]);
  }
}
```



for-in循环

```dart
void main() {
  List list = ['Appli', 'Google', 'Microsoft'];

  for (var item in list) {
    print(item);
  }
}
```



集合类型提供的foreach方法

```dart
void main() {
  List list = ['Apple', 'Google', 'Microsoft'];

  list.forEach((element) {
    print(element);
  });
}
```



#### map方法

映射集合的每一个元素，将处理后的元素返回成一个Iterable类型数据

```dart
void main() {
  List list = ['Apple', 'Google', 'Microsoft'];

  var res = list.map((e) => e == 'Google' ? e = 'Tencent' : e).toList();

  print(res); // [Apple, Tencent, Microsoft]
}
```



#### where方法

将满足条件的元素返回成一个Iterable类型数据

```dart
void main() {
  List list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  var res = list.where((e) => e >= 5).toList();

  print(res); // [5, 6, 7, 8, 9]
}
```



#### any方法

集合中有任一元素满足指定条件，则返回true

```dart
void main() {
  List list = ['Apple', 'Google', 'Microsoft'];

  var res = list.any((e) => e.toString().length > 7);

  print(res);
}
```



#### every方法

集合中每个元素都满足指定条件，才返回true

```dart
void main() {
  List list = ['Apple', 'Google', 'Microsoft'];

  var res = list.every((e) => e.toString().length > 6);

  print(res);
}
```



## 函数（方法）

Dart中的方法可以定义在任意位置，方法内和外面都可以定义方法，定义位置不同，作用域也不同。

方法定义格式：

```dart
返回值类型 方法名 (参数列表) {
  方法体
}
```

如果方法没有返回值，则返回值类型为`void`，返回值类型可以省略不写。

方法名的命名规范：小驼峰，即一个单词时使用小写，多个单词组成时，第一个单词小写，其余单词首字母大写。如 fetch() 、findAll() ...



#### 带有参数列表的方法

```dart
void main() {
  var sum = plus(10, 5);
  print(sum);
}

/**
 * 返回a+b
 */
int plus(int a, int b) {
  return a + b;
}
```





#### 带有可选参数的方法

参数列表中可以使用`[]`定义可选参数，可选参数可以定义多个，且只能定义在其它参数后面。

```dart
void main() {
  var info = getInfo('张三', '男');
  print(info); // 姓名：张三，性别：男，年龄：保密
}

/**
 * 返回info
 */
String getInfo(String name, String gender, [int age]) {
  var age1 = age ?? '保密';
  return "姓名：$name，性别：$gender，年龄：$age1";
}
```



#### 带有默认参数的方法

可选参数可以设置默认值。

```dart
void main() {
  var info = getInfo('张三');
  print(info); // 姓名：张三，性别：男，年龄：保密
}

/**
 * 返回info
 */
String getInfo(String name, [String gender = '男', int age]) {
  var age1 = age ?? '保密';
  return "姓名：$name，性别：$gender，年龄：$age1";
}
```



#### 带有命名参数的方法

使用`{}`定义命名参数，命名参数与可选参数类似，都可以选择性的传参，但传参方式上有区别，需要按照`参数名:参数值`的形式传参。

```dart
void main() {
  var info = getInfo('小野', gender: '女', age: 23);
  print(info); // 姓名：小野，性别：女，年龄：23
}

/**
 * 返回info
 */
String getInfo(String name, {String gender = '男', int age}) {
  var age1 = age ?? '保密';
  return "姓名：$name，性别：$gender，年龄：$age1";
}
```



#### 把方法当做参数传给一个方法

```dart
void main() {
  func1() {
    print('我是func1');
  }

  func2(func) {
    // 调用传入的方法
    func();
  }

  func2(func1);
}
```



#### 匿名方法

```dart
void main() {
  printNum(123); // 通过变量名调用匿名方法
}

// 匿名方法 赋值给变量printNum
var printNum = (int n) {
  print(n);
};
```



#### 自执行方法

```dart
void main() {
  (() {
    print('自执行方法');
  })();
}
```

传参

```dart
void main() {
  ((int n) {
    print(n);
  })(123);
}
```



#### 方法递归

通过方法递归计算0-100的累加和

```dart
void main() {
  int sum = 0;

  plus(n) {
    sum += n;

    if (n == 100) {
      return;
    }
    plus(n + 1);
  }

  plus(1);

  print(sum); // 5050
}
```



#### 闭包

全局变量：全局变量常驻内存，全局变量污染全局；

去不变量：局部变量不会常驻内存，会被垃圾回收机制回收，并且不会污染全局。

如果我们既想让一个变量常驻内存，又不想让它污染全局，这时就产生了闭包。

闭包的写法：方法中嵌套方法，并return里面的方法。

```dart
void main() {
  func() {
    int a = 1;
    return () {
      a++;
      print(a);
    };
  }

  var f = func();
  f(); // 2
  f(); // 3
  f(); // 4
}
```



## 类 对象

面向对象的三大特性：封装、继承、多态。

>封装：将有共同状态和行为的事物封装成抽象的类；
>
>继承：Dart是单继承，可以继承父类的属性和方法；
>
>多态：

在Dart中，一切皆对象，即便是基本数据类型（int、double ...）都是类，所有的类最终都继承自`Object`类。

Dart是一门使用类和单继承的语言，这一点和Java等类似。所有的对象都是类的实例，并且所有的类都是Object类的子类。

一个类通常由属性和方法组成。



### 实例化

在学习面向对象中，有这么一句话，`对象是类的实例，类是对象的抽象`。因为类是抽象的，所以我们需要把它实例化成对象，再使用类中的属性和方法。

```dart
List list = new List(); // 通过new关键字实例化对象

list.length; // 通过List的对象调用其属性及方法
list.add('dart');
```

*在Dart语言中，实例化对象时，new关键字可以省略。*



### 定义类

使用`class`关键字定义类。类名的命名规范：大驼峰，所有单词的首字母均大写。

```dart
class 类名 {
  ...
}
```



::: details Demo

```dart
void main() {
  // 实例化Person
  var zs = new Person();
  zs.name = '张三';
  zs.age = 17;
  String info = zs.getInfo();
  print(info);
}

class Person {
  // 属性
  String name;
  int age;

  // 方法
  String getInfo() {
    return "姓名：$name，年龄：$age。";
  }
}
```

:::



### 默认构造函数

构造方法：方法名与类名相同。

构造方法在类实例化时被调用，即`new 类名()`时调用。

```dart {12,13,14,15}
void main() {
  // 实例化时会调用类中的构造函数
  Person p = new Person('张三', 17);
  p.getInfo();
}

class Person {
  String name;
  int age;

  // 默认构造函数
  Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    print("name: $name, age: $age.");
  }
}
```

构造函数简写：

```dart {12}
void main() {
  // 实例化时会调用类中的构造函数
  Person p = new Person('张三', 17);
  p.getInfo();
}

class Person {
  String name;
  int age;

  // 构造函数简写
  Person(this.name, this.age);

  getInfo() {
    print("name: $name, age: $age.");
  }
}
```



### 命名构造函数

```dart {14,15,16}
void main() {
  // 调用类中的命名构造函数
  Person p = new Person.now();
}

class Person {
  String name;
  int age;

  // 默认构造函数
  Person(this.name, this.age);

  // 命名构造函数
  Person.now() {
    print('我是命名构造函数');
  }

  getInfo() {
    print("name: $name, age: $age.");
  }
}
```



### 引入dart文件

使用`import`关键字引入外部dart文件。

```dart
import 'lib/Person.dart';

void main() {
  // 调用类中的命名构造函数
  Person p = new Person.now();
}
```



::: details /lib/Person.dart

```dart
class Person {
  String name;
  int age;

  // 默认构造函数
  Person(this.name, this.age);

  // 命名构造函数
  Person.now() {
    print('我是命名构造函数');
  }

  getInfo() {
    print("name: $name, age: $age.");
  }
}
```

:::



### 私有属性 私有方法

Dart语言中定义私有属性和私有方法，在属性名和方法名前加上`_`下划线，来定义私有。

如 _name 、_age ... 。

```dart
class Person {
  // _ 定义私有属性
  String _name;
  int _age;

  Person(this._name, this._age);
  
  // getter方法
  get name {
    return this._name;
  }

  get age {
    return this._age;
  }
  
  // setter方法
  set name(String name) {
    this._name = name;
  }

  set age(int age) {
    this._age = age;
  }
  	
  // 私有方法
  String _getInfoStr() {
    return "name: $_name, age: $_age.";
  }

  getInfo() {
    print(_getInfoStr());
  }
}
```

如上代码，在Dart语言中，getter方法和setter方法是通过`get`关键字和`set`关键字定义的。



### 类中的初始化列表

带有初始化列表的构造函数，会在实例化对象之前为属性赋值。

```dart
class Person {
  String _name;
  int _age;

  // 带有初始化列表的构造函数
  Person()
      : _name = '张三',
        _age = 18;

  getInfo() {
    print("name: $_name, age: $_age.");
  }
}
```



### static 关键字

使用`static`关键字修饰的属性成为“静态属性”，修饰的方法成为“静态方法”。

在静态方法中不能直接访问非静态的属性或方法，在非静态方法中，可以直接访问静态属性和静态方法。

静态属性或方法可以直接通过`类名.属性名`、`类名.方法名()`的形式调用。

静态属性也成为类属性，全局共享。

```dart {10,13,14,15}
void main() {
  // 通过类名直接调用
  Person.gender = '女';
  Person.printDemo();
}

class Person {
  String name;
  int age;
  static String gender; // 静态属性

  // 静态方法
  static printDemo() {
    print('I am static method. I am $gender');
  }

  printInfo() {
    print('name: $name, age: $age, gender: $gender.');
  }
}
```



### 对象操作符

| 操作符 | 说明             |
| ------ | ---------------- |
| ?      | 条件运算符       |
| as     | 类型装换         |
| is     | 类型判断         |
| ..     | 级联操作（连缀） |



条件运算符 `?`

```dart {5}
void main() {
  Person p; // 声明了一个Person类型的空引用，没有指向具体实例
  p = new Person('张三', 17);

  p?.printInfo(); // 如果p为null，不调用方法
}

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  printInfo() {
    print('name: $name, age: $age.');
  }
}
```



类型判断 `is`

```dart {4}
void main() {
  var p = new Person('张三', 17);

  bool res = p is Person; // 判断对象是否属于Person类型
  print(res);
}

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  printInfo() {
    print('name: $name, age: $age.');
  }
}
```



类型转换 `as`

```dart {6}
void main() {
  // 父类引用指向子类实例(向上转型)，父类引用o只能调用父类中的方法以及子类重写父类的方法
  Object o = new Person('张三', 17);

  // 如果想调用子类独有的方法，需要向下转型成Person类型，才能调用
  (o as Person).printInfo();
}

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  printInfo() {
    print('name: $name, age: $age.');
  }
}
```

面向对象的多态性：

- 父类引用(对象)指向子类实例，称为向上转型(自动转型、隐式转型)
- 子类引用指向父类实例，称为向下转型(强制转型、显示转型)

如果要将父类对象转为子类类型，用到`as`关键字。



连缀操作 `..`

```dart {5,6,7,8}
void main() {
  Person p = new Person('张三', 17);

  // 连缀操作
  p
    ..name = '李四'
    ..age = 19
    ..printInfo();
}

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  printInfo() {
    print('name: $name, age: $age.');
  }
}
```



### 继承

Dart语言中的继承：

- 子类使用`extends`关键字类继承父类；
- 子类可以继承父类可见的属性和方法，但不会继承构造函数；
- 子类能复写父类的方法 getter 和 setter

```dart
void main() {
  Person p = new GoodMan('张三', 17);
  p.printInfo();
}

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  printInfo() {
    print('name: $name, age: $age.');
  }
}

class GoodMan extends Person {
  String flag;

  // 在子类实例化时默认会调用父类的构造函数，父类中含有有参的构造函数，所以在子类的构造函数中要通过super关键字调用父类的构造器为属性赋值
  GoodMan(String name, int age) : super(name, age);
	
  // 重写父类的方法
  @override
  printInfo() {
    print('name: $name, age: $age, I am a goods man.');
  }
}
```



### 抽象类

Dart中的抽象类：Dart抽象类主要用于定义标准，子类可以继承抽象类，也可以实现抽象类接口。

- 抽象类通过`abstract`关键字类定义；
- Dart中的抽象方法不能使用`abstract`关键字声明，这一点和Java不同。在Dart中没有方法体的方法我们称为抽象方法，且只能在抽象类中定义抽象方法；
- 如果子类继承(`entends`)一个抽象类，则必须实现抽象类里面的全部抽象方法；
- 如果把抽象类当做接口实现(`implements`)的话，则必须要实现抽象类中定义的所有属性和方法。
- 抽象类不能被实例化。



`extends`和`implements`关键字的用法：

- 如果要复用抽象类里面的方法，并且要用抽象方法约束子类的话，一般使用`extends`继承抽象类；
- 如果把抽象类当做定义标准的话，一般使用`implements`实现抽象类。



```dart
void main() {
  Animal dog = new Dog();
  Animal cat = new Cat();
  dog.eat(); // 小狗喜欢啃骨头
  cat.eat(); // 小猫爱吸猫薄荷
  cat.printInfo(); // 我是抽象类中的普通方法
}

abstract class Animal {
  // 没有方法体的方法是抽象方法，且抽象方法只能在抽象类中定义
  eat();

  // 普通方法
  printInfo() {
    print('我是抽象类中的普通方法');
  }
}

class Dog extends Animal {
  // 子类必须重写父类（抽象类）中的抽象方法
  @override
  eat() {
    print('小狗喜欢啃骨头');
  }
}

class Cat extends Animal {
  @override
  eat() {
    print('小猫爱吸猫薄荷');
  }
}
```



### 多态

Dart中的多态：

- 允许将子类类型的指针赋值给父类类型的指针，同一个函数调用会有不同的执行结果；
- 也就是将子类实例指向（赋值给）父类引用（对象），父类对象调用同一个被不同子类重写的方法会有不同的执行结果；
- 多态就是父类定义一个方法，继承它的子类重写该方法，每个子类有不同的表写，即对象的多态性。



```dart
void main() {
  // 父类引用指向子类实例（向上转型），父类对象调用被子类重写的方法得到不同的执行结果，表现了对象的多态性
  Animal dog = new Dog();
  Animal cat = new Cat();
  dog.eat(); // 小狗喜欢啃骨头
  cat.eat(); // 小猫爱吸猫薄荷
}

abstract class Animal {
  // 抽象方法
  eat();
}

class Dog extends Animal {
  @override
  eat() {
    print('小狗喜欢啃骨头');
  }
}

class Cat extends Animal {
  @override
  eat() {
    print('小猫爱吸猫薄荷');
  }
}
```



>注意：
>
>父类引用（对象）指向子类实例，此时父类引用只能调用父类独有的方法以及子类重写父类的方法，**不能**调用子类独有的方法。
>
>如果要调用子类独有的方法，需要将父类引用强制转换（向下转型）成子类类型，才能调用子类中的方法。

```dart {7}
void main() {
  Animal dog = new Dog();
  // 父类对象只能调用父类独有或者子类重写父类的方法
  dog.eat(); // 小狗喜欢啃骨头

  // 需要将Animal类型转型Dog类型，才能调用Dog中的run()方法
  (dog as Dog).run(); // 小狗喜欢跑
}

abstract class Animal {
  // 抽象方法
  eat();
}

class Dog extends Animal {
  @override
  eat() {
    print('小狗喜欢啃骨头');
  }

  // 子类独有的方法
  run() {
    print('小狗喜欢跑');
  }
}
```



### 接口

Dart语言中有接口，但是没有定义接口的关键字，如`interface`。普通类和抽象类都可以作为接口被实现。实现接口的关键字是`implements`。

Dart中，如过要实现一个普通类或者抽象类，则需要重写其所有的属性和方法。

因为抽象类中可以定义抽象方法，所以一般使用抽象类来定义接口。

```dart
class Animal {
  String name;
  int age;

  eat() {
    print('动物会吃东西');
  }
}

// 实现Animal类，需要重写其所有的属性和方法
class Dog implements Animal {
  @override
  int age;

  @override
  String name;

  @override
  eat() {
    // TODO: implement eat
    throw UnimplementedError();
  }
}
```



### 实现多个接口

```dart
abstract class A {
  String name;
  printA();
}

abstract class B {
  printB();
}

// 可以实现多个接口，并需要重写实现接口的所有属性和方法
class C implements A, B {
  @override
  String name;

  @override
  printA() {
    // TODO: implement printA
    throw UnimplementedError();
  }

  @override
  printB() {
    // TODO: implement printB
    throw UnimplementedError();
  }
}
```



### mixins

`mixins`的中文意思是“混入”，就是在类中混入其他功能。

在Dart语言中，可以使用mixins实现类似多继承的功能。

因为mixins使用的条件随着Dart版本一直在变，这里讲的是Dart 2.x中使用mixins的条件：

- 作为mixins的类只能继承自Object，不能继承其他类；
- 作为mixins的类不能有构造函数；
- 一个类可以mixins多个类；
- mixins绝不是继承，也不是接口，而是一种全新的特性 ；
- 使用`with`关键字mixins其他类；
- 继承和mixins可以同时使用，即一个类可以`extends`一个类同时`with`多个类；
- mixins的多个类中有同名的方法，在调用时会执行`with`靠后类中的方法，后面会把前面同名的方法覆盖掉。



```dart {14}
class A {
  printA() {
    print('A');
  }
}

class B {
  printB() {
    print('B');
  }
}

// 使用 with 关键字 mixins其他类
class C with A, B {}

void main() {
  var c = new C();

  c.printA();
  c.printB();
}
```



## 泛型

泛型就是解决类、接口、方法的复用性以及对不特定数据类型的支持（数据校验）。



### 泛型方法

```dart
// 定义泛型方法 T表示泛型 可以用任意字母代替，一般用大写字母T
T getData<T>(T value) {
  return value;
}

void main() {
  // 在调用时可以指定T的具体类型
  var res1 = getData<int>(123);
  var res2 = getData<String>('dart');

  print(res1);
  print(res2);
}
```



### 泛型类

```dart
void main() {
  // 在实例化时指定泛型的具体类型
  var myList = new MyList<String>();

  myList.add('苹果');
  myList.add('西瓜');
  // myList.add(123); 无法存入int类型

  myList.printList(); // [苹果, 西瓜]
}

// 自定义一个泛型类，实现存入和打印的功能
class MyList<E> {
  List<E> _list = new List();

  add(E value) {
    this._list.add(value);
  }

  printList() {
    print(this._list.toString());
  }
}
```



### 泛型接口

示例需求：

>实现数据缓存功能：有文件缓存、内存缓存。内存缓存和文件缓存按照接口约束实现。
>
>1. 定义一个泛型接口，约束实现它的子类必须有getByKey(key)和setByKey(key,value)
>2. 要求setByKey的是偶value的类型和实例化子类的时候指定的类型一致

```dart
// 使用抽象类定义一个缓存接口，实现该接口的类必须实现setByKey()和getByKey()两个方法
abstract class Cache<T> {
  setByKey(String key, T value);
  T getByKey(String key);
}

// 定义一个内存缓存实现类，实现上面的缓存接口
class MemoryCache<T> implements Cache<T> {
  Map<String, T> _cache = new Map();

  @override
  T getByKey(String key) {
    return this._cache[key];
  }

  @override
  setByKey(String key, T value) {
    this._cache.addAll({key: value});
    print('add success');
  }
}

// 测试
void main() {
  var cache = new MemoryCache<String>();

  cache.setByKey('name', '张三'); // 打印 add success

  var name = cache.getByKey('name');
  print(name); // 张三
}
```

泛型的作用，当我们要定义一个只能存一种数据类型的容器，但不确定要存入的具体类型时，可以使用泛型。

使用泛型后，容器可以在具体实例化时指定容器的数据类型。

这解决了代码冗余，并对容器增加了数据校验（不确定数据的支持）。



## 库

在Dart中，每一个dart文件都是一个库。

Dart中主要有三种库：

1. 我们自定义库；
2. 系统内置库；
3. Pub包管理系统中的库。



在dart文件中，使用`import`关键字引入外部的库。



### 引入自定义库

```dart
import 'lib/Person.dart';
```



### 引入系统内置库

```dart
import 'dart:io';
import 'dart:math';
```

如发起网络请求：

```dart
import 'dart:convert';
import 'dart:io';

void main() async {
  var result = await _getDataFromZhihuAPI();
  print(result);
}

_getDataFromZhihuAPI() async {
  // 1. 创建HttpClient对象
  var httpClient = new HttpClient();
  // 2. 创建uri对象
  var uri = new Uri.http('www.shiguangping.com', '/');
  // 3. 发起请求，等待请求
  var request = await httpClient.getUrl(uri);
  // 4. 关闭请求，等待响应
  var response = await request.close();
  // 5. 解析响应的内容
  return await response.transform(utf8.decoder).join();
}
```



>`async`和`await`关键字：
>
>`async`是让方法变成异步，`await`是等待异步方法执行完成。
>
>只有`async`方法中才能使用`await`关键字，如果是调用其他的`async`方法必须使用`await`关键字。

```dart
// 异步方法
func() async {
  return '我是async方法';
}

void main() {
  // 调用异步方法需要获取返回值，需要使用await关键字 var res =  await func();
  var res = func();
  print('我是main方法');
  print(res); // Instance of 'Future<dynamic>'
}
```



### 引入第三方库

从下面的网址获取常用的第三方库：

[https://pub.dev/packages](https://pub.dev/packages)

[https://pub.flutter-io.cn/packages](https://pub.flutter-io.cn/packages)

[https://pub.dartlang.org/flutter](https://pub.dartlang.org/flutter)



项目中创建`pubspec.yaml`文件管理库依赖

```yaml
name: xxx
description: A new flutter module project.
dependencies:
  http: ^0.12.2
```

安装第三方库的三步：

第一步：在`pubspec.yaml`的`dependencies`属性下添加要安装的库：

```yaml
dependencies:
  http: ^0.12.2
```

第二步：执行命令：

```bash
pub get
```

第三步：引入

```dart
import 'package:http/http.dart';
```



### 库的别名

引入的两个库如果存在相同的类名会存在冲突，可以使用`as`关键字为库起别名，使用`别名.类名`的方式引用库中的类。

```dart
// 引入的两个库中都存在Person类，可以为库起别名，通过别名调用要使用的类
import 'lib/Person1.dart' as p1;
import 'lib/Person2.dart' as p2;

void main() {
  p1.Person person1 = new p1.Person();
  p2.Person person2 = new p2.Person();
}
```



### 部分导入

如果只需要引入库中的一部分功能，有两种方式：

- 只导入需要的部分，使用`show`关键字。引入多个使用`,`逗号分隔；

  ```dart
  // 使用 show 关键字 引入库中的部分功能
  import 'lib/MyMath.dart' show getInt, getDouble;
  
  void main() {
    getInt();
    getDouble();
    // getString();
  }
  ```

- 隐藏不需要的部分，使用`hide`关键字

  ```dart
  // 使用 hide 关键字 隐藏库中不需要的功能
  import 'lib/MyMath.dart' hide getInt, getDouble;
  
  void main() {
    // getInt();
    // getDouble();
    getString();
  }
  ```



### 延迟加载

也称为懒加载，可以在需要的时候再进行加载。懒加载最大的好处是可以减少APP的启动时间。

懒加载使用`deferred as`关键字来指定，如下例子所示：

```dart
import 'package:deferred/hello.dart deferred as hello';
```

当需要使用的时候，需要使用loadLibrary()方法来加载：

```dart
greet() async {
  await hello.loadLibrary();
  hello.printGreeting();
}
```



## 结尾

Dart语言部分至此告一段落，接下来开始进入Flutter阶段。

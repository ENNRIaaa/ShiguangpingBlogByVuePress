---
title: 初学算法
date: 2021-01-03
categories:
- 一周学一个技术
tags:
- Algorithm
---

## 前言

在计算机科学中，算法是让计算机程序完成一个任务的一系列步骤。算法使科学融入计算机科学（Computer Science）。

怎么才能算是一个好的算法？两个关键的标准：

- Correctness 正确
- Efficiency 有效



## 算法的意义

**算法让代码可行、高效，降低程序运行时所占用的资源。**

举个小栗子：

> 已知a+b+c=1000，且a^2+b^2=c^2，求a，b，c的所有自然数解

解决一：

```python
import time

start_time = time.time()

for a in range(1, 1001):  # 第一层
    for b in range(1, 1001):  # 第二层
        for c in range(1, 1001):  # 第三层
            if a ** 2 + b ** 2 == c ** 2 and a + b + c == 1000:
                print('a:%3d, b:%3d, c:%3d' % (a, b, c))
                
end_time = time.time()

print("程序已完成，总计用时：%f" % (end_time - start_time))
```

运行结果：(用时957秒)

```
a:200, b:375, c:425
a:375, b:200, c:425
程序已完成，总计用时：957.906259
```



解决二

```python
import time

start_time = time.time()

for a in range(1, 1001):  # 第一层
    for b in range(1, 1001):  # 第二层
        if a ** 2 + b ** 2 == (1000 - a - b) ** 2:
            print('a:%3d, b:%3d, c:%3d' % (a, b, 1000 - a - b))

end_time = time.time()

print("程序已完成，总计用时：%f" % (end_time - start_time))
```

运行结果：（用时约1秒）

```
a:200, b:375, c:425
a:375, b:200, c:425
程序已完成，总计用时：1.077217
```



::: details Java实现

```java
package net.zkyc.demo;

import cn.hutool.core.date.DateUtil;

/**
 * @author liyan
 */
public class Demo01 {

    public static void main(String[] args) {

        long startTime = DateUtil.currentSeconds();

        for (int a = 1; a < 1001; a++) {
            for (int b = 1; b < 1001; b++) {
                for (int c = 1; c < 1001; c++) {
                    if (a * a + b * b == c * c && a + b + c == 1000) {
                        System.out.println("a:" + a + ", b:" + b + ", c:" + c);
                    }
                }
            }
        }

        long endTime = DateUtil.currentSeconds();

        System.out.println("程序已完成，总计用时：" + (endTime - startTime));
    }
}
```

运行结果：

```
a:200, b:375, c:425
a:375, b:200, c:425
程序已完成，总计用时：1
```

:::



::: details Go实现

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	startTime := time.Now().Second()

	for a := 1; a < 1001; a++ {
		for b := 1; b < 1001; b++ {
			for c := 1; c < 1001; c++ {
				if a*a+b*b == c*c && a+b+c == 1000 {
					fmt.Printf("a:%3d, b:%3d, c:%3d\n", a, b, c)
				}
			}
		}
	}

	endTime := time.Now().Second()

	fmt.Printf("程序已完成，总耗时：%v\n", endTime-startTime)
}
```

运行结果：

```
a:200, b:375, c:425
a:375, b:200, c:425
程序已完成，总耗时：1
```

:::

**学会算法，可以明白代码底层逻辑，方便和阅读源代码。**



## 时间复杂度与大O表示法

- 算法的速度不能简单的以执行时间作为衡量标准。
- 随着输入数据的量级不断增大，操作数的增速是不同的。
- 这个才是衡量算法的更好方式。



时间复杂度：

我们将算法执行运算的操作数丢弃掉低阶项，再去掉所有的系数。

在它前面加上一个O，就是大O表示法



小栗子：

```python
n = 1000 # 执行1次
k = 0 # 执行1次

print(k) # 执行1次

# 算法总共执行了3次
```

去掉低阶项3，以上代码的时间复杂度是 **O(1)**



```python
n = 1000 # 执行1次
k = 0 # 执行1次
for a in range (n): # 执行n次
  k += 1 # 执行n次

print(k) # 执行1次

# 算法总共执行 2n+3 次
```

去掉低阶项3，去掉系数2，以上代码的时间复杂度是 **O(n)**



```python
a = 5
b = 6
c = 10
n = 1000
for i in range(n):
  for j in range(n):
    x = i * i
    y = j * j
    z = i * j
for k in range(n):
  w = a * k + 45
  v = b * b
d = 33

# 3n^2 + 2n + 5
```

去掉低阶项5，去掉系数3、2，以上代码的时间复杂度是: $O(2^n)$



## 常见的时间复杂度

| 操作数           | 时间复杂度 | 名称 |
| ---------------- | ---------- | ---- |
| 3                |            |      |
| 105long + 2      |            |      |
| 2n + 4           |            |      |
| 7n + 9nlogn + 39 |            |      |
|                  |            |      |
|                  |            |      |
|                  |            |      |


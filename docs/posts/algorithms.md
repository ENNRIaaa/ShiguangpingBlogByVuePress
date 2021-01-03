---
title: 初学算法
date: 2021-1-3
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


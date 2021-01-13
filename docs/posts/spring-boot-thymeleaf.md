---
title: SpringBoot-集成Thymeleaf构建Web应用
date: 2021-1-14
categories:
- 笔记
tags:
- Spring Boot
---

Thymeleaf是模板引擎，可以替代JSP构建Web页面。

官方地址：[https://www.thymeleaf.org/](https://www.thymeleaf.org/)



## 集成Thymeleaf

### 创建项目

使用`Spring Initializr`创建SpringBoot项目，添加Maven依赖。

::: details pom.xml

```xml
<dependencies>
  <!-- Thymeleaf -->
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
  </dependency>

  <!-- spring mvc、Tomcat相关依赖 -->
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>

  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
    <optional>true</optional>
  </dependency>
  <dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
  </dependency>
</dependencies>
```

:::



### 资源目录

SpringBoot默认的静态资源目录，SpringBoot默认的静态资源目录需置于classpath下

- /static
- /public
- /resources
- /META-INF/resources

以上四个目录下的静态资源都会被加载。例如，我们在`/src/main/resources`下新建`static`目录，并放入一张图片`pic.jpg`。启动SpringBoot，访问`localhost:8080/pic.jpg`，不出意外的话，可以正常访问`static`下的图片。

SpringBoot默认的模板路径为：`src/main/resources/templates`



[《Java阶段性笔记》记录](https://javabook.shiguangping.com/frame4/%E5%AF%BC%E5%85%A5%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90.html)



### 添加模板页面

`src/main/resources/templates`下新建`index.html`文件。

::: details index.html

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="renderer" content="webkit">
    <title>首页</title>
    <link rel="shortcut icon" th:href="@{/favicon.ico}"/>
    <link th:href="@{/static/css/bootstrap.min.css}" rel="stylesheet"/>
    <link th:href="@{/static/css/font-awesome.min.css}" rel="stylesheet"/>
</head>
<body class="fixed-sidebar full-height-layout gray-bg" style="overflow:hidden">
<div id="wrapper">
    <h1 th:text="${msg}"></h1>
</div>
<script th:src="@{/static/js/jquery.min.js}"></script>
<script th:src="@{/static/js/bootstrap.min.js}"></script>

</body>
</html>
```

:::

html标签添加命名空间，这样在页面内可以使用`th:`绑定标签内的属性。

```html
<!-- 添加Thymeleaf命名空间 -->
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:th="http://www.thymeleaf.org">
```

`@{}`用来引用本地静态资源

`${}`接收变量



[《Thymeleaf教程》](https://thymeleaf.shiguangping.com)



### 编写Controller

::: details IndexController.java

```java
package com.shiguangping.thymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 首页控制器
 *
 * @author liyan
 * @since 2021.1.14
 */
@Controller
public class IndexController {

    @RequestMapping({"/", "index"})
    public String index(Model model) {
        model.addAttribute("msg", "Hello Thymeleaf~");
        return "index";
    }
}
```

:::

Model对象中添加属性（键值对）`msg`，之后返回到`index`页面。



## 测试

启动SpringBoot，访问`localhost:8080/index`,页面显示"Hello Thymeleaf~"，访问成功。



## Github源码

[springboot-thymeleaf](https://github.com/ENNRIaaa/SpringBootShip/tree/main/springboot-thymeleaf)
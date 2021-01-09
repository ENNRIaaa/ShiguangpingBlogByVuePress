---
title: 回顾Spring Boot
date: 2021-1-9
categories:
- 笔记
tags:
- Spring Boot
---

2020年4月12日开始学习Java，8月17日进入公司工作，从此步入了程序员这一行，同时也做好了在这一行持续耕耘的准备。

学习Java Web开发，必然要学习Spring框架，这是Java Web开发的春天。现在有了分布式、微服务的概念，必然也要学习Spring Boot，Spring项目快速开发脚手架。Spring开发需要手动配置Bean，配置各种依赖，在Spring Boot中不需要，一切都由Spring Boot做好了。引入一个Starter，极少量的配置，就可以愉快滴使用容器中的Bean。

Spring Boot的概念一句话就能概括，**自动配置，开箱即用**，但是了解自动配置原理远比学习Spring的使用要复杂的多。



## Spring

Spring两个核心的概念：**IoC**控制反转（通过依赖注入实现），和**AOP**面向切面编程。Spring也被理解成是一个**IoC容器**，将一个个对象抽象成**Bean**存放到容器中，被Spring管理。



## Spring Boot特征

- 可以创建单体应用，也是开发微服务项目的基础；
- 内嵌 Tomcat, Jetty or Undertow容器，无需依赖 WAR 包，使得部署项目更便捷；
- 提供了独特的`starter`依赖，简化配置；
- 尽可能地自动配置Spring和第三方依赖；
- 提供指标、运行状况检查和外部化配置等生产就绪功能；
- 绝对不需要代码生成，也不需要配置XML。



以上是Spring Boot的特点，它还有一个特征，就是使用简单，但学习成本高。因为它实现了自动配置，屏蔽了大多数细节，想真正理解、精通自动配置需要花费精力去学习。



Spring官方地址：[https://spring.io/](https://spring.io/)



## 第一个Spring Boot应用

官方文档：[https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html#getting-started-first-application-pom](https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html#getting-started-first-application-pom)



### 创建项目

创建名为`tx_sboot`的Maven项目：

![image-20210109121227386](https://images.shiguangping.com/imgs/20210109121227.png)



### POM添加依赖

在POM文件中引入Spring Boot：

::: details POM

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>cn.tx.springboot</groupId>
    <artifactId>tx_sboot</artifactId>
    <version>1.0-SNAPSHOT</version>
  	<!-- 打包方式 -->
    <packaging>pom</packaging>
		
  	<!-- 引入Spring Boot -->
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.4.1</version>
    </parent>

    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
    </properties>

</project>
```

:::

添加`starter`依赖：

:::details POM

```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
</dependencies>
```

:::

`spring-boot-starter-web`依赖中包含了Spring MVC、Tomcat等一组依赖。

![image-20210109121854649](https://images.shiguangping.com/imgs/20210109121854.png)



### 写代码

创建Controller类：

::: details 测试类

```java
package cn.tx.sboot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author liyan
 */
@RestController
public class TestController {

    @RequestMapping("hello")
    public String hello(){
        return "Hello Spring Boot";
    }
}
```

:::

创建启动类，Main方法：

::: details 启动类 

```java
package cn.tx.sboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author liyan
 */
@SpringBootApplication
public class FirstSpringApplication {

    public static void main(String[] args) {
      	// 通过主方法引导启动Spring Boot应用
        SpringApplication.run(FirstSpringApplication.class, args);
    }
}
```

:::



### 创建可执行Jar包


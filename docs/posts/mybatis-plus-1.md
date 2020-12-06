---
title: Mybatis-Plus入门
date: 2020-12-06
categories:
- 一周学一个技术
tags:
- mybatis-plus
---

## 快速入门小栗子

新建一个Maven项目，我取名`mybatis-plus-demo`，创建好后编辑`pom.xml`添加依赖：

::: details pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example</groupId>
    <artifactId>mybatis-plus-demo</artifactId>
    <version>1.0-SNAPSHOT</version>
		
  	<!-- 引入Spring Boot父工程 -->
    <parent>
        <artifactId>spring-boot-dependencies</artifactId>
        <groupId>org.springframework.boot</groupId>
        <version>2.3.4.RELEASE</version>
    </parent>

    <dependencies>
      	<!-- Spring Boot启动器 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>
      
				<!-- Spring Boot测试启动器 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>

      	<!-- lombok -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
				
      	<!-- mybatis-plus启动器 -->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.4.0</version>
        </dependency>
      
				<!-- mysql驱动 -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <source>8</source>
                    <target>8</target>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>
```

:::

`resources`下新建`application.yml`配置文件，配置数据源：

::: details application.yml

```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://192.168.3.6:3306/mybatis_plus_demo?useSSL=false&serverTimezone=GMT%2B8
    username: root
    password: Liyan1234@
    type: com.zaxxer.hikari.HikariDataSource

logging:
  level:
    root: warn
    com.mp.mapper: trace
  pattern:
    console: '%p%m%n'
```

:::

创建SpringBoot项目启动类：

:::details application.java

```java
package com.mp;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author liyan
 */
@MapperScan("com.mp.mapper")
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

`@MapperScan`注解，用于扫描Mapper接口

:::

创建数据库`mybatis-plus-demo`，新建数据表`user`：

::: details user.sql

```sql
-- auto-generated definition
create table user
(
    id          bigint auto_increment comment '主键'
        primary key,
    name        varchar(20) null comment '姓名',
    age         int         null comment '年龄',
    email       varchar(50) null comment '邮箱',
    manager_id  bigint      null comment '直属上级id',
    create_time datetime    null comment '创建时间'
)
    comment '用户表';
    
INSERT INTO mybatis_plus_demo.user (id, name, age, email, manager_id, create_time) VALUES (1, '李达康', 45, 'lidakang@qq.com', null, '2020-12-03 21:48:53');
INSERT INTO mybatis_plus_demo.user (id, name, age, email, manager_id, create_time) VALUES (2, '赵东来', 57, 'zhaodonglai@qq.com', 1, '2020-12-03 21:49:28');
INSERT INTO mybatis_plus_demo.user (id, name, age, email, manager_id, create_time) VALUES (3, '祁同伟', 44, 'qitongwei@qq.com', null, '2020-12-03 21:49:45');
INSERT INTO mybatis_plus_demo.user (id, name, age, email, manager_id, create_time) VALUES (4, '程度', 38, 'chengdu.qq.com', 3, '2020-12-03 21:50:09');

```

:::

创建User实体类：

:::details User.java

```java
package com.mp.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * @author liyan
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {

    /**
     * 主键
     */
    private Long id;

    /**
     * 姓名
     */
    private String name;
    
    /**
     * 年龄
     */
    private Integer age;

    /**
     * 邮箱
     */
    private String email;

    /**
     * 直属上级id
     */
    private Long managerId;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;
}
```

:::

创建Mapper接口，并集成Mybatis-plus的`BaseMapper<T>`接口：

:::details UserMapper.java

```java
package com.mp.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.mp.entity.User;

/**
 * @author liyan
 */
public interface UserMapper extends BaseMapper<User> {

}
```

:::

编写测试方法：

::: details SimpleTest.java

```java
package com.mp;

import com.mp.entity.User;
import com.mp.mapper.UserMapper;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SimpleTest {

    @Autowired
    private UserMapper userMapper;

    @Test
    public void test() {
      	// BaseMapper接口提供了基础的增删改查方法
        List<User> users = userMapper.selectList(null);
        Assert.assertEquals(4, users.size());
        users.forEach(System.out::println);
    }

}
```

:::

运行测试方法，控制台打印日志：

![image-20201206175650102](https://images.shiguangping.com/imgs/20201206175650.png)



## 传统SSM传统编程模式

1. 接口中编写抽象方法
2. XML或注解写SQL
3. Service中调用接口
4. Controller中调用Service方法



## 通用Mapper

### 新增(Create)

`insert()`方法：

```java
@Test
public void insert(){
  User user = User.builder()
    .name("陈清泉")
    .age(45)
    .email("chenqingquan.qq.com")
    .managerId(1L)
    .createTime(LocalDateTime.now())
    .build();
  userMapper.insert(user);
}
```

执行插入方法：

![image-20201206180634475](https://images.shiguangping.com/imgs/20201206180634.png)

**如果实体中的属性为null，则该属性不会参与到插入或更新操作中。**



### 常用注解

Mybatis-Plus默认开启驼峰命名，数据库表中下划线格式的字段名会自动映射成实体类的驼峰命名。

实体中`id`字段为null，Mybatis-Plus会自动填充基于雪花算法的自增ID。

`@TableName`注解，作用在实体类上，用于映射实体类与数据库表。如：`@TableName("user")`

`@TableId()`注解，作用在实体类主键属性上，用于标注该属性对应数据库表的主键。假设当主键字段不为`id`时，Mybatis-Plus找不到实体中对应的主键属性，所以在执行插入操作时会报主键id没有默认值的错误。因为MP只会默认去找名叫`id`的属性并自动填充。

`@TableField("name")`，作用在实体属性上，用于映射实体属性与数据库表字段。



### 排除非表字段的三种方式

实体中的属性不对应数据表中的任何字段，MP提供了三种排除非表字段的方法：

1. 属性添加`transient`关键字修饰，使该属性不参与序列化，如：

   ```java
   private transient String remark;
   ```

2. 使用`static`关键字修饰：

   ```java
   private static String remark;
   ```

3. `@TableField(exist = false)`注解：

   ```java
   @TableField(exist = false)
   private String remark;
   ```



### 查询(Retrieve)

`T selectById(Serializable id);`，通过id查询






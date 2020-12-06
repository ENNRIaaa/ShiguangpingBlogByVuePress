---
title: Mybatis-Plus入门
date: 2020-12-06
categories:
- 一周学一个技术
tags:
- mybatis-plus
---

*一周学一个技术---第一周。*

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

`List<T> selectBatchIds(@Param(Constants.COLLECTION) Collection<? extends Serializable> idList)`，通过id列表批量查询

`List<T> selectByMap(@Param(Constants.COLUMN_MAP) Map<String, Object> columnMap);`，通过键值对查询：

::: details 例如

```java
@Test
public void selectByMap(){
  Map<String,Object> map = new HashMap<>();
  // 相当于 SELECT id,name,age,email,manager_id,create_time FROM user WHERE name = "李达康";
  // Map中的key是数据库表的字段名，不是实体中的属性名
  map.put("name","李达康");
  List<User> users = userMapper.selectByMap(map);
  users.forEach(System.out::println);
}
```

:::



### 条件构造器

基本使用：

1. 名字中包含“李”，且年龄小于等于45岁：

   ```java
   @Test
   public void selectByWrapper(){
     // 实例化条件构造器，方式一
     QueryWrapper<User> queryWrapper = new QueryWrapper<>();
     // 实例化条件构造器，方式二
     QueryWrapper<User> queryWrapper1 = Wrappers.<User>query();
   
     queryWrapper1.like("name","李").le("age",45);
     List<User> users = userMapper.selectList(queryWrapper1);
     users.forEach(System.out::println);
   }
   ```

   执行结果：

   ![image-20201206235215060](https://images.shiguangping.com/imgs/20201206235215.png)

2. 名字中包含“同伟”，且年龄大于40，并且managerId为空：

   ```java
   @Test
   public void selectByWrapper2(){
     QueryWrapper<User> queryWrapper = Wrappers.<User>query();
   
     queryWrapper.like("name","同伟")
       .gt("age",40)
       .isNull("manager_id");
   
     List<User> users = userMapper.selectList(queryWrapper);
     users.forEach(System.out::println);
   }
   ```

   执行结果：

   ![image-20201207000017619](https://images.shiguangping.com/imgs/20201207000017.png)

---

::: tip

说明:

- 以下出现的第一个入参`boolean condition`表示该条件**是否**加入最后生成的sql中
- 以下代码块内的多个方法均为从上往下补全个别`boolean`类型的入参,默认为`true`
- 以下出现的泛型`Param`均为`Wrapper`的子类实例(均具有`AbstractWrapper`的所有方法)
- 以下方法在入参中出现的`R`为泛型,在普通wrapper中是`String`,在LambdaWrapper中是**函数**(例:`Entity::getId`,`Entity`为实体类,`getId`为字段`id`的**getMethod**)
- 以下方法入参中的`R column`均表示数据库字段,当`R`具体类型为`String`时则为数据库字段名(**字段名是数据库关键字的自己用转义符包裹!**)!而不是实体类数据字段名!!!,另当`R`具体类型为`SFunction`时项目runtime不支持eclipse自家的编译器!!!
- 以下举例均为使用普通wrapper,入参为`Map`和`List`的均以`json`形式表现!
- 使用中如果入参的`Map`或者`List`为**空**,则不会加入最后生成的sql中!!!
- 有任何疑问就点开源码看,看不懂**函数**的[点击我学习新知识](https://www.jianshu.com/p/613a6118e2e0)

:::



:::danger

警告:

不支持以及不赞成在 RPC 调用中把 Wrapper 进行传输

1. wrapper 很重
2. 传输 wrapper 可以类比为你的 controller 用 map 接收值(开发一时爽,维护火葬场)
3. 正确的 RPC 调用姿势是写一个 DTO 进行传输,被调用方再根据 DTO 执行相应的操作

:::

#### AbstractWrapper

::: tip

说明:

QueryWrapper(LambdaQueryWrapper) 和 UpdateWrapper(LambdaUpdateWrapper) 的父类
用于生成 sql 的 where 条件, entity 属性也用于生成 sql 的 where 条件
注意: entity 生成的 where 条件与 使用各个 api 生成的 where 条件**没有任何关联行为**

:::



#### allEq

```java
allEq(Map<R, V> params)
allEq(Map<R, V> params, boolean null2IsNull)
allEq(boolean condition, Map<R, V> params, boolean null2IsNull)
```

- 全部[eq](https://baomidou.com/guide/wrapper.html#eq)(或个别[isNull](https://baomidou.com/guide/wrapper.html#isnull))

::: tip

个别参数说明:

`params` : `key`为数据库字段名,`value`为字段值
`null2IsNull` : 为`true`则在`map`的`value`为`null`时调用 [isNull](https://baomidou.com/guide/wrapper.html#isnull) 方法,为`false`时则忽略`value`为`null`的

:::

- 例1: `allEq({id:1,name:"老王",age:null})`--->`id = 1 and name = '老王' and age is null`
- 例2: `allEq({id:1,name:"老王",age:null}, false)`--->`id = 1 and name = '老王'`



```java
allEq(BiPredicate<R, V> filter, Map<R, V> params)
allEq(BiPredicate<R, V> filter, Map<R, V> params, boolean null2IsNull)
allEq(boolean condition, BiPredicate<R, V> filter, Map<R, V> params, boolean null2IsNull) 
```

::: tip

个别参数说明:

`filter` : 过滤函数,是否允许字段传入比对条件中
`params` 与 `null2IsNull` : 同上

:::

- 例1: `allEq((k,v) -> k.indexOf("a") >= 0, {id:1,name:"老王",age:null})`--->`name = '老王' and age is null`
- 例2: `allEq((k,v) -> k.indexOf("a") >= 0, {id:1,name:"老王",age:null}, false)`--->`name = '老王'`



#### eq 等于

```java
eq(R column, Object val)
eq(boolean condition, R column, Object val)
```

- 等于 =
- 例: `eq("name", "老王")`--->`name = '老王'`



#### ne 不等于

```java
ne(R column, Object val)
ne(boolean condition, R column, Object val)
```

- 不等于 <>
- 例: `ne("name", "老王")`--->`name <> '老王'`



#### gt 大于

```java
gt(R column, Object val)
gt(boolean condition, R column, Object val)
```

- 大于 >
- 例: `gt("age", 18)`--->`age > 18`



#### ge 大于等于

```java
ge(R column, Object val)
ge(boolean condition, R column, Object val)
```

- 大于等于 >=
- 例: `ge("age", 18)`--->`age >= 18`

### [#](https://baomidou.com/guide/wrapper.html#lt)lt



 



```java
lt(R column, Object val)
lt(boolean condition, R column, Object val)
```

- 小于 <
- 例: `lt("age", 18)`--->`age < 18`

### [#](https://baomidou.com/guide/wrapper.html#le)le



 



```java
le(R column, Object val)
le(boolean condition, R column, Object val)
```

- 小于等于 <=
- 例: `le("age", 18)`--->`age <= 18`

### [#](https://baomidou.com/guide/wrapper.html#between)between



 



```java
between(R column, Object val1, Object val2)
between(boolean condition, R column, Object val1, Object val2)
```

- BETWEEN 值1 AND 值2
- 例: `between("age", 18, 30)`--->`age between 18 and 30`

### [#](https://baomidou.com/guide/wrapper.html#notbetween)notBetween



 



```java
notBetween(R column, Object val1, Object val2)
notBetween(boolean condition, R column, Object val1, Object val2)
```

- NOT BETWEEN 值1 AND 值2
- 例: `notBetween("age", 18, 30)`--->`age not between 18 and 30`

### [#](https://baomidou.com/guide/wrapper.html#like)like



 



```java
like(R column, Object val)
like(boolean condition, R column, Object val)
```

- LIKE '%值%'
- 例: `like("name", "王")`--->`name like '%王%'`

### [#](https://baomidou.com/guide/wrapper.html#notlike)notLike



 



```java
notLike(R column, Object val)
notLike(boolean condition, R column, Object val)
```

- NOT LIKE '%值%'
- 例: `notLike("name", "王")`--->`name not like '%王%'`

### [#](https://baomidou.com/guide/wrapper.html#likeleft)likeLeft



 



```java
likeLeft(R column, Object val)
likeLeft(boolean condition, R column, Object val)
```

- LIKE '%值'
- 例: `likeLeft("name", "王")`--->`name like '%王'`

### [#](https://baomidou.com/guide/wrapper.html#likeright)likeRight



 



```java
likeRight(R column, Object val)
likeRight(boolean condition, R column, Object val)
```

- LIKE '值%'
- 例: `likeRight("name", "王")`--->`name like '王%'`

### [#](https://baomidou.com/guide/wrapper.html#isnull)isNull



 



```java
isNull(R column)
isNull(boolean condition, R column)
```

- 字段 IS NULL
- 例: `isNull("name")`--->`name is null`

### [#](https://baomidou.com/guide/wrapper.html#isnotnull)isNotNull



 



```java
isNotNull(R column)
isNotNull(boolean condition, R column)
```

- 字段 IS NOT NULL
- 例: `isNotNull("name")`--->`name is not null`

### [#](https://baomidou.com/guide/wrapper.html#in)in



 



```java
in(R column, Collection<?> value)
in(boolean condition, R column, Collection<?> value)
```

- 字段 IN (value.get(0), value.get(1), ...)
- 例: `in("age",{1,2,3})`--->`age in (1,2,3)`



 



```java
in(R column, Object... values)
in(boolean condition, R column, Object... values)
```

- 字段 IN (v0, v1, ...)
- 例: `in("age", 1, 2, 3)`--->`age in (1,2,3)`

### [#](https://baomidou.com/guide/wrapper.html#notin)notIn



 



```java
notIn(R column, Collection<?> value)
notIn(boolean condition, R column, Collection<?> value)
```

- 字段 NOT IN (value.get(0), value.get(1), ...)
- 例: `notIn("age",{1,2,3})`--->`age not in (1,2,3)`



 



```java
notIn(R column, Object... values)
notIn(boolean condition, R column, Object... values)
```

- 字段 NOT IN (v0, v1, ...)
- 例: `notIn("age", 1, 2, 3)`--->`age not in (1,2,3)`

### [#](https://baomidou.com/guide/wrapper.html#insql)inSql



 



```java
inSql(R column, String inValue)
inSql(boolean condition, R column, String inValue)
```

- 字段 IN ( sql语句 )
- 例: `inSql("age", "1,2,3,4,5,6")`--->`age in (1,2,3,4,5,6)`
- 例: `inSql("id", "select id from table where id < 3")`--->`id in (select id from table where id < 3)`

### [#](https://baomidou.com/guide/wrapper.html#notinsql)notInSql



 



```java
notInSql(R column, String inValue)
notInSql(boolean condition, R column, String inValue)
```

- 字段 NOT IN ( sql语句 )
- 例: `notInSql("age", "1,2,3,4,5,6")`--->`age not in (1,2,3,4,5,6)`
- 例: `notInSql("id", "select id from table where id < 3")`--->`id not in (select id from table where id < 3)`

### [#](https://baomidou.com/guide/wrapper.html#groupby)groupBy



 



```java
groupBy(R... columns)
groupBy(boolean condition, R... columns)
```

- 分组：GROUP BY 字段, ...
- 例: `groupBy("id", "name")`--->`group by id,name`

### [#](https://baomidou.com/guide/wrapper.html#orderbyasc)orderByAsc



 



```java
orderByAsc(R... columns)
orderByAsc(boolean condition, R... columns)
```

- 排序：ORDER BY 字段, ... ASC
- 例: `orderByAsc("id", "name")`--->`order by id ASC,name ASC`

### [#](https://baomidou.com/guide/wrapper.html#orderbydesc)orderByDesc



 



```java
orderByDesc(R... columns)
orderByDesc(boolean condition, R... columns)
```

- 排序：ORDER BY 字段, ... DESC
- 例: `orderByDesc("id", "name")`--->`order by id DESC,name DESC`

### [#](https://baomidou.com/guide/wrapper.html#orderby)orderBy

 



```java
orderBy(boolean condition, boolean isAsc, R... columns)
```

- 排序：ORDER BY 字段, ...
- 例: `orderBy(true, true, "id", "name")`--->`order by id ASC,name ASC`

### [#](https://baomidou.com/guide/wrapper.html#having)having



 



```java
having(String sqlHaving, Object... params)
having(boolean condition, String sqlHaving, Object... params)
```

- HAVING ( sql语句 )
- 例: `having("sum(age) > 10")`--->`having sum(age) > 10`
- 例: `having("sum(age) > {0}", 11)`--->`having sum(age) > 11`

### [#](https://baomidou.com/guide/wrapper.html#func)func



 



```java
func(Consumer<Children> consumer)
func(boolean condition, Consumer<Children> consumer)
```

- func 方法(主要方便在出现if...else下调用不同方法能不断链)
- 例: `func(i -> if(true) {i.eq("id", 1)} else {i.ne("id", 1)})`

### [#](https://baomidou.com/guide/wrapper.html#or)or



 



```java
or()
or(boolean condition)
```

- 拼接 OR

注意事项:

主动调用`or`表示紧接着下一个**方法**不是用`and`连接!(不调用`or`则默认为使用`and`连接)

- 例: `eq("id",1).or().eq("name","老王")`--->`id = 1 or name = '老王'`



 



```java
or(Consumer<Param> consumer)
or(boolean condition, Consumer<Param> consumer)
```

- OR 嵌套
- 例: `or(i -> i.eq("name", "李白").ne("status", "活着"))`--->`or (name = '李白' and status <> '活着')`

### [#](https://baomidou.com/guide/wrapper.html#and)and



 



```java
and(Consumer<Param> consumer)
and(boolean condition, Consumer<Param> consumer)
```

- AND 嵌套
- 例: `and(i -> i.eq("name", "李白").ne("status", "活着"))`--->`and (name = '李白' and status <> '活着')`

### [#](https://baomidou.com/guide/wrapper.html#nested)nested



 



```java
nested(Consumer<Param> consumer)
nested(boolean condition, Consumer<Param> consumer)
```

- 正常嵌套 不带 AND 或者 OR
- 例: `nested(i -> i.eq("name", "李白").ne("status", "活着"))`--->`(name = '李白' and status <> '活着')`

### [#](https://baomidou.com/guide/wrapper.html#apply)apply



 



```java
apply(String applySql, Object... params)
apply(boolean condition, String applySql, Object... params)
```

- 拼接 sql

注意事项:

该方法可用于数据库**函数** 动态入参的`params`对应前面`applySql`内部的`{index}`部分.这样是不会有sql注入风险的,反之会有!

- 例: `apply("id = 1")`--->`id = 1`
- 例: `apply("date_format(dateColumn,'%Y-%m-%d') = '2008-08-08'")`--->`date_format(dateColumn,'%Y-%m-%d') = '2008-08-08'")`
- 例: `apply("date_format(dateColumn,'%Y-%m-%d') = {0}", "2008-08-08")`--->`date_format(dateColumn,'%Y-%m-%d') = '2008-08-08'")`

### [#](https://baomidou.com/guide/wrapper.html#last)last



 



```java
last(String lastSql)
last(boolean condition, String lastSql)
```

- 无视优化规则直接拼接到 sql 的最后

注意事项:

只能调用一次,多次调用以最后一次为准 有sql注入的风险,请谨慎使用

- 例: `last("limit 1")`

### [#](https://baomidou.com/guide/wrapper.html#exists)exists



 



```java
exists(String existsSql)
exists(boolean condition, String existsSql)
```

- 拼接 EXISTS ( sql语句 )
- 例: `exists("select id from table where age = 1")`--->`exists (select id from table where age = 1)`

### [#](https://baomidou.com/guide/wrapper.html#notexists)notExists



 



```java
notExists(String notExistsSql)
notExists(boolean condition, String notExistsSql)
```

- 拼接 NOT EXISTS ( sql语句 )
- 例: `notExists("select id from table where age = 1")`--->`not exists (select id from table where age = 1)`


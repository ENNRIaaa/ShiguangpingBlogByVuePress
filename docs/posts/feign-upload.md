---
title: 使用Spring Cloud Feign上传文件
date: 2020-09-06 23:00:00
categories:
- Study
tags: 
- Java
- Spring-Cloud
- Spring-Cloud-Alibaba
---

使用Spring Cloud Feign上传文件，早期的Spring Cloud中，Feign本身是没有上传文件的能力的，要想实现这一点，需要自己编写`Encoder`去实现上传。现在，Feign官方提供了子项目[feign-form](https://github.com/OpenFeign/feign-form)，其中实现了上传所需的`Encoder`。

<!--more-->

> 注：笔者测试的版本是Edgware.RELEASE。Camden、Dalston同样适应本文所述。

## 加依赖

```xml
<dependency>
  <groupId>io.github.openfeign.form</groupId>
  <artifactId>feign-form</artifactId>
  <version>3.0.3</version>
</dependency>
<dependency>
  <groupId>io.github.openfeign.form</groupId>
  <artifactId>feign-form-spring</artifactId>
  <version>3.0.3</version>
</dependency>
```

## 编写Feign Client

```java
@FeignClient(name = "ms-content-sample", configuration = UploadFeignClient.MultipartSupportConfig.class)
public interface UploadFeignClient {
    @RequestMapping(value = "/upload", method = RequestMethod.POST,
            produces = {MediaType.APPLICATION_JSON_UTF8_VALUE},
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseBody
    String handleFileUpload(@RequestPart(value = "file") MultipartFile file);

    class MultipartSupportConfig {
        @Bean
        public Encoder feignFormEncoder() {
            return new SpringFormEncoder();
        }
    }
}
```

如代码所示，在这个Feign Client中，我们引用了配置类`MultipartSupportConfig`，在`MultipartSupportConfig`中，我们实例化了`SpringFormEncoder`。这样这个Feign Client就能够上传了。

**注意点：**

- ```java
  @RequestMapping(value = "/upload", method = RequestMethod.POST,
              produces = {MediaType.APPLICATION_JSON_UTF8_VALUE},
              consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  ```

  这里的`produces`、`consumes`不能少；

- 方法参数列表中的注解`@RequestPart(value = "file")`不能写成`@RequestParam(value = "file")`；

- 最好将Hystrix的超时时间设长一点，例如5秒，否则可能文件还没上传完，Hystrix就超时了，从而导致客户端侧的报错。


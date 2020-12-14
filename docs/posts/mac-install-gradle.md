



## 下载Gradle

先检查Java环境，是否安装了jdk：

```bash
java -version
```



官网下载：[https://gradle.org/releases](https://gradle.org/releases)

![image-20201201093609189](https://images.shiguangping.com//imgs/20201201093609.png)

将下载的压缩文件解压到某一目录下。



## 配置环境变量

```bash
vim ~/bash_profile
```

在底部添加Gradle环境变量：

![image-20201201094108796](https://images.shiguangping.com//imgs/20201201094108.png)

使环境变量生效：

```bash
source ~/.bash_profile
```

查看Gradle版本，测试是否安装成功：

```
gradle -v
```

出现以下内容说明安装成功：

<img src="https://images.shiguangping.com//imgs/20201201094341.png" alt="image-20201201094341648" style="zoom:50%;" />

## 配置Gradle

### 本地仓库目录

在Gradle根目录下新建`repo`目录，用于作为本地仓库目录。

编辑环境变量：

```bash
vim ~/bash_profile
```

添加路径：

```
export GRADLE_USER_HOME=/Users/liyan/gradle-5.6.4/repo
```

![image-20201201094655404](https://images.shiguangping.com//imgs/20201201094655.png)

使环境变量生效：

```bash
source ~/bash_profile
```


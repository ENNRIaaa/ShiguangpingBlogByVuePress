---
title: Vue中el-select只显示value，不显示对应label的问题
date: 2020-11-17
categories:
- 小问题笔记
tags:
- Vue
- Element-UI
---

遇到的情况：

![image-20201117093846553](https://images.shiguangping.com//imgs/20201117093853.png)

el-select中显示了v-model的值，却没有选择对应的下拉选项。

```html
<el-form-item label="学校名称" prop="schoolId">
  <el-select v-model="classInfo.schoolId">
    <el-option v-for="(val,key) in schools" :key="key" :label="val" :value="key" />
  </el-select>
</el-form-item>
```
---

这种情况，可能是下拉框v-model的值和下拉选项的value值数据类型不匹配导致的。

先将v-model绑定的值转换成String，后问题得到解决：

```javascript
data.schoolId = String(data.schoolId)
```

![image-20201117094340042](https://images.shiguangping.com//imgs/20201117094340.png)

---
title: Vue添加全局过滤器
date: 2020-10-09 15:26
categories:
- Study
tags:
- Vue
---

在`src`目录下新建`filters`目录，目录下新建`index.js`:

```javascript
// 身份证号脱敏
const idCardHide = num => {
  if (num) {
    const data = num.replace(/^(.{6})(?:\w+)(.{4})$/, '\$1********\$2')
    return data
  }
  return ''
}

// 手机号脱敏
const telHide = num => {
  if (num) {
    const data = num.replace(/(\d{3})\d{4}(\d*)/, '$1****$2')
    return data
  }
  return ''
}

// 姓名脱敏
const nameHide = name => {
  if (name && name.length <= 2) {
    return name.substr(0, 1) + new Array(name.length).join('*')
  } else if (name && name.length > 2) {
    return name.substr(0, 1) + new Array(name.length - 1).join('*') + name.substr(-1)
  }
  return ''
}

export default {
  idCardHide,
  telHide,
  nameHide
}

// 首字母大写
export function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
```



在`mian.js`下注册全局过滤器：

```javascript
import filters from './filters' // global filters

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
```



### 使用：

```vue
<el-table-column label="联系电话" prop="mobile">
  <template slot-scope="{row}">
		<span>{{ row.mobile | telHide }}</span>
  </template>
</el-table-column>
```




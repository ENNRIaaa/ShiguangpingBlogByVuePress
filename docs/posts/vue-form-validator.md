---
title: Vue验证表单字段常用规则
date: 2020-09-21 11:18
categories:
- Study
tags:
- Vue
---

项目代码使用的element-ui

**1. 页面表单添加验证属性**

```html
<!--el-form中要绑定model;el-form-item绑定prop属性-->
<el-form :model=org :rules="rules">
  <el-form-item label="xxx" prop="name"></el-form-item>
</el-form>
```

- el-form中`rules`属性对应data()中的rules校验对象

- el-form-item中`prop`属性对应的rules对象中的属性



**2. rules是一个验证规则对象,因此需要在data()页面数据里添加rules对象**

```javascript
rules: {
        name: [{ required: true, message: this.$t('rules.require'), trigger: 'blur' }],
        password: [{ required: true, message: this.$t('rules.require'), trigger: 'blur' }]
}
```



**3. 创建全局验证规则my-validate.js，供页面灵活引入**

```javascript

/* 验证账号 */
export function validateUsername(rule, value, callback) {
  if (value.length < 6 || value.length > 20) {
    return callback(new Error('用户名不得小于6个或大于20个字符!'))
  } else {
    callback()
  }
}
 
/* 验证密码 */
export function validatePassword(rule, value, callback) {
  if (value.length < 6) {
    return callback(new Error('密码不能小于6位'))
  } else {
    callback()
  }
}
 
/* 合法邮箱 */
export function validateEmail(rule, value, callback) {
  const emailReg = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})$/
  if (!value) {
    return callback(new Error('邮箱不能为空!!'))
  }
  setTimeout(() => {
    if (!emailReg.test(value)) {
      return callback(new Error('邮箱格式错误'))
    } else {
      callback()
    }
  }, 100)
}
 
/* 合法手机号 */
export function validatePhone(rule, value, callback) {
  const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
  if (!value) {
    return callback(new Error('手机号码不能为空!!'))
  }
  setTimeout(() => {
    if (!phoneReg.test(value)) {
      return callback(new Error('手机号码格式错误'))
    } else {
      callback()
    }
  }, 100)
}
 
/* 合法真实姓名 */
export function validateRealName(rule, value, callback) {
  const realnameReg = /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/
  if (!value) {
    return callback(new Error('真实姓名不能为空!!'))
  }
  setTimeout(() => {
    if (!realnameReg.test(value)) {
      return callback(new Error('您的真实姓名格式错误,请输入英文或汉字!'))
    } else {
      callback()
    }
  }, 100)
}
 
/* 合法身份证 */
export function validateIdNumber(rule, value, callback) {
  const idNumberReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
  if (!value) {
    return callback(new Error('身份证号码不能为空!!'))
  }
  setTimeout(() => {
    if (!idNumberReg.test(value)) {
      return callback(new Error('您的身份证号码格式错误!'))
    } else {
      callback()
    }
  }, 100)
  
  /**
 * 校验营业执照注册号/统一社会信用代码
 * @param rule
 * @param value
 * @param callback
 */
export function validateBusinessLicense(rule, value, callback) {
  if (value.length === 15 || value.length === 18) {
    if (value.length === 15) {
      let ti = 0
      let si = 0// pi|11+ti
      let cj = 0// （si||10==0？10：si||10）*2
      let pj = 10// pj=cj|11==0?10:cj|11
      let lastNum = ''
      for (let i = 0; i < value.length; i++) {
        ti = parseInt(value[i])
        si = pj + ti
        cj = (si % 10 === 0 ? 10 : si % 10) * 2
        pj = cj % 11
        if (i === value.length - 1) {
          // lastNum =(1 - pj < 0 ? 11 - pj : 1 - pj) % 10;
          lastNum = si % 10
        }
      }
      if (lastNum === 1) {
        callback()
      } else {
        callback('营业执照注册号不正确')
      }
    }
    if (value.length === 18) {
      var str = '0123456789ABCDEFGHJKLMNPQRTUWXY'
      var ws = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28]
      // eslint-disable-next-line no-array-constructor
      var codes = new Array()
      codes[0] = value.substr(0, value.length - 1)
      codes[1] = value.substr(value.length - 1, value.length)
      var sum = 0
      for (var i = 0; i < 17; i++) {
        sum += str.indexOf(codes[0].charAt(i)) * ws[i]
      }
      var c18 = 31 - (sum % 31)
      if (c18 === 31) {
        c18 = 'Y'
      } else if (c18 === 30) {
        c18 = '0'
      }
      if (str.charAt(c18) !== codes[1].charAt(0)) {
        callback('统一社会信用代码不正确')
      }
      callback()
    }
  } else {
    callback('号码位数不正确')
  }
}
```



**4. 引入全局验证脚本**

```javascript
import { validateBusinessLicense } from '@/utils/my-validate'
```



**5. 在rules对象中使用引入的校验规则**

```javascript
unifyCode: [{ required: true, validator: validateBusinessLicense, trigger: 'blur' }]
```


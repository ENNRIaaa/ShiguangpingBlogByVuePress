---
title: Vue在渲染前获取数据
date: 2020-10-12 22:25
categories:
- Study
tags:
- Vue
---

写Vue时总会碰到这种情况，希望先从后端获取到数据之后再渲染页面上的某个组件。

由于ajax(axios)是异步请求，我们没有办法控制页面上组件的渲染时机是在异步请求之后，所以这时可以通过`v-if`来控制渲染，当异步请求到数据之后，再显示组件。

---

*这种问题其实算不上什么问题，但是对于刚接触Vue的我来说，这种小坑一踩就得踩半天😭*

*随手记个笔记*


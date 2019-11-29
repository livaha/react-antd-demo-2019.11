# react16.11+antd按需引入

-- 我是谁 我在哪 我要干嘛 --

## 前言
每次建立react项目的时候，还需要配置antd使其按需加入，还得事先暴露出webpack，对其进行配置less和主题等。

本项目通过已经配置好的webpack按需加载antd，并在打包环境中压缩了代码，去除了不必要的.map文件，不喜欢搭框架的同学可以下载下来直接写业务代码哦！

本文章不介绍webpack配置过程，只是简单说明使用流程。如果想知道如何配置的，可以留言哦！


## 项目版本

> react16.11+antd3.24+webpack4.41


## 使用方法
```
git clone https://github.com/livaha/react-antd-demo-2019.11.git
cd react-antd-demo-2019.11
yarn
yarn start(启动服务)
yarn build(打包)
```

## 简单项目演示

![](https://user-gold-cdn.xitu.io/2019/11/29/16eb663003714a75?w=1114&h=856&f=gif&s=307007)
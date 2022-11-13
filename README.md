# login-register-vue-node

## 实现功能

实现登录和注册两个功能，实现全栈，数据记录在数据库，前后端分离

------

## 项目部署

### 数据库

#### 建表语句
```
CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `email` varchar(255) NOT NULL COMMENT '邮箱',
  `rankLevel` varchar(255) NOT NULL COMMENT '段位',
  `occupation` varchar(255) NOT NULL COMMENT '擅长位置',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```


### 项目初始化
```
npm install
```

### 后端部署和运行
```
cd service
npm install
node app.js
```

### 运行前端项目
```
npm run serve
```
-------

## 使用到的技术

### 前端：

- html
- css
- vue.js
- vue-cli
- vue-router
#### ui框架：
- elment ui

### 后端：

- node.js
- express
- mysql
--------

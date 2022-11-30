# login-register-vue-node

## 实现功能

实现登录和注册两个功能，实现全栈，数据记录在数据库，前后端分离

---

## 推荐 IDE

vscode

### 插件

Vue Language Features (Volar)

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

```
CREATE TABLE
    userKDAInfo
    (
        userGameId INT NOT NULL AUTO_INCREMENT,
        userId INT NOT NULL,
        username VARCHAR(40) NOT NULL,
        game_Create_Date DATETIME,
        currentGameKill INT,
        currentGameAssist INT,
        currentGameDead INT,
        currentGameKda decimal(20,1) GENERATED ALWAYS AS ((currentGameKill + currentGameAssist)/(if(currentGameDead > 0 ,currentGameDead,1))),
        PRIMARY KEY (userGameId,userId)
    )
    ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

```
CREATE TABLE
    userGameInfo
    (
        userId INT NOT NULL,
        username VARCHAR(40) NOT NULL,
        currentRankLevel VARCHAR(2) NOT NULL,
        bestRankLevel VARCHAR(2) NOT NULL,
        priorityPosition VARCHAR(3) NOT NULL,
        secondaryPosition VARCHAR(3) NOT NULL,
        PRIMARY KEY (userId)
    )
    ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

### 项目初始化

```
npm install
```

### 后端部署和运行

```
cd service
npm install
npm install @multiavatar/multiavatar
node app.js
```

### 运行前端项目

```
npm run serve
```

---

## 使用到的技术

### 前端：

- html
- css
- vue.js
- vue-cli
- vue-router

#### ui 框架：

- elment ui

### 后端：

- node.js
- express
- mysql

---

# 计划功能实现

1.  - [ ] 解决登录画面刷新闪烁问题
2.  - [ ] 表单验证发送请求后的 error 错误信息二次校验问题
3.  - [ ] LOL 官方 api 接口实现
4.  - ...

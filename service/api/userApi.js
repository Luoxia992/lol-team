const models = require('../db/db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('../db/sqlMap');

const conn = mysql.createConnection(models.mysql);
conn.connect();

// 登录接口
router.post('/login', (req, res) => {
  const user = req.body;
  const sel_email = $sql.user.select + " where email = '" + user.email + "'";
  console.log(sel_email);
  conn.query(sel_email, user.email, (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);
    if (results[0] === undefined) {
      res.send('-1'); // -1 表示查询不到，用户不存在，即邮箱填写错误
    } else {
      if (results[0].email == user.email && results[0].password == user.password) {
        res.send('0'); // 0 表示用户存在并且邮箱密码正确
      } else {
        res.send('1'); // 1 表示用户存在，但密码不正确
      }
    }
  });
});

// 注册接口
router.post('/add', (req, res) => {
  const params = req.body;
  const sel_sql = $sql.user.select + " where email = '" + params.email + "'";
  const add_sql = $sql.user.add;
  console.log(sel_sql);
  conn.query(sel_sql, params.email, (error, results) => {
    if (error) {
      console.log(err);
    }
    if (results.length != 0 && params.email == results[0].email) {
      res.send('-1'); // -1 表示用户邮箱已被注册
    } else {
      conn.query(add_sql, [params.username, params.password, params.email], (err, rst) => {
        if (err) {
          console.log(err);
        } else {
          console.log(rst);
          const sql = $sql.user.select + " where email = '" + params.email + "'";
          conn.query(sql, params.username, (error, results) => {
            const userId = results[0].userId;
            const userInfoInsertSql = $sql.userGameInfo.insert;
            conn.query(
              userInfoInsertSql,
              [userId, params.username, params.currentRankLevel, params.bestRankLevel, params.priorityPosition, params.secondaryPosition],
              (err, rst) => {
                if (err) {
                  console.log(err);
                } else {
                  res.send('0'); // 0 表示用户创建成功
                }
              },
            );
          });
        }
      });
    }
  });
});

// 查询所有用户
router.get('/selectAllUser', (req, res) => {
  const sel_sql = $sql.user.select;

  conn.query(sel_sql, (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
});

// 个人中心查询用户名
router.post('/selectUserName', (req, res) => {
  const params = req.body;
  const sel_sql = $sql.user.select + " where email = '" + params.email + "'";
  console.log(sel_sql);

  conn.query(sel_sql, params.email, (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);
    if (results[0] === undefined) {
      res.send('-1'); // -1 表示查询不到，用户不存在，即邮箱填写错误
    } else {
      if (results[0].email == params.email) {
        res.send(results[0].username);
      }
    }
  });
});

// 个人中心用户名修改 TODO
router.post('/changeName', (req, res) => {
  const params = req.body;
  const sel_sql = $sql.user.select + " where email = '" + params.email + "'";
  const upd_sql = $sql.user.update;
  console.log(sel_sql);

  conn.query(sel_sql, params.email, (error, results) => {
    conn.query(upd_sql, [params.userName, results[0].userId], (err, rst) => {
      console.log(upd_sql);
      if (err) {
        console.log(err);
        res.send('-1');
      } else {
        console.log(rst);
        res.send('0'); // 0 表示用户创建成功
      }
    });
  });
});

module.exports = router;

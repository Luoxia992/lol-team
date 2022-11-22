var sqlMap = {
    // TODO user表密码加密
    user: {
        add: 'insert into user (username,password,email) values (?,?,?)',
        select: 'select * from user',
        update: 'update user set username = (?) where userId = (?)'
    }
}

module.exports = sqlMap;
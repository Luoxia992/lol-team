var sqlMap = {
    user: {
        add: 'insert into user (username,password,email,rankLevel,occupation) values (?,?,?,?,?)',
        select: 'select * from user',
        update: 'update user set username = (?) where userId = (?)'
    }
}

module.exports = sqlMap;
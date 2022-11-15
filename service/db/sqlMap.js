var sqlMap = {
    user: {
        add: 'insert into user (username,password,email,rankLevel,occupation) values (?,?,?,?,?)',
        select: 'select * from user'
    }
}

module.exports = sqlMap;
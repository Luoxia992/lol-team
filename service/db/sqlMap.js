var sqlMap = {
    user: {
        add: 'insert into user (username, email, password, rankLevel, occupation) values (?,?,?,?,?)',
        select: 'select * from user'
    }
}

module.exports = sqlMap;
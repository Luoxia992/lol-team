var sqlMap = {
  // TODO user表密码加密
  user: {
    add: 'insert into user (username,password,email) values (?,?,?)',
    select: 'select * from user',
    update: 'update user set username = (?) where userId = (?)',
  },

  //userGameInfo 表
  userGameInfo: {
    insert:
      'insert into userGameInfo (userId,username,currentRankLevel,bestRankLevel,priorityPosition,secondaryPosition) values (?,?,?,?,?,?)',
  },
};

module.exports = sqlMap;

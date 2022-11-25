/*验证内容是否英文数字以及下划线*/

export function isPassword(rule, value, callback) {
  const reg = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,12}/;
  if (value == '' || value == undefined || value == null) {
    callback();
  } else {
    if (!reg.test(value)) {
      callback(new Error('密码必须是大写字母+小写字母+数字+特殊字符组成，且长度为8到12位！'));
    } else {
      callback();
    }
  }
}

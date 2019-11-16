const assert = require('assert');
const { mysql } = require('../qcloud.js');
const userTableName = "User";


async function get(ctx) {
  var today = new Date();
  var dd = parseInt(String(today.getDate()).padStart(2, '0'));
  var mm = parseInt(String(today.getMonth() + 1).padStart(2, '0'));
  var birthday_guys = await mysql(userTableName).where({ BirthdayMonth: mm, BirthdayDate: dd });
  ctx.body = birthday_guys;
}

module.exports = {
  get
};
const assert = require('assert');
const { mysql } = require('../qcloud.js');
const userTableName = "User";

// Get user by Id
async function get(ctx) {
  var openId = ctx.query.OpenId;
  var user = await findUser(openId);
  if (!user) {
    ctx.response.status = 404;
  } else {
    ctx.body = user;
  }
}

// Update user
async function put(ctx) {
  var user = ctx.request.body;

  // Make sure the user is updating its own information
  assert(ctx.state.$wxInfo.userinfo.openId === user.OpenId);

  // Check if the user exists in the database
  var existingUser = await findUser(user.OpenId);
  if (existingUser) {
    user.IsAdmin = existingUser.IsAdmin;
    await mysql(userTableName).where({ OpenId: user.OpenId}).update(user);
  } else {
    user.IsAdmin = false;
    await mysql(userTableName).insert(user);
  }
}

// Find user by open ID
async function findUser(openId) {
  var user = await mysql(userTableName).where({ OpenId: openId }).first();
  return user;
}

module.exports = {
  get,
  put
};

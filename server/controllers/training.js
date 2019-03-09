const assert = require('assert');
const { mysql } = require('../qcloud.js');
const trainingTableName = "Training";

async function get(ctx) {
  console.log(mysql(trainingTableName).max('UpdatedTime'));
  ctx.body = mysql(trainingTableName).max('UpdatedTime');
}


// Add new training info
async function put(ctx) {
  var training = ctx.request.body;
  // should have a machanism to remove previous incorrect training info
  await mysql(trainingTableName).insert(training);
}

module.exports = {
  get,
  put
};
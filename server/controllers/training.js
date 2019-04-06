const assert = require('assert');
const { mysql } = require('../qcloud.js');
const trainingTableName = "Training";

async function get(ctx) {
  var training_time = await mysql(trainingTableName).max("UpdatedTime").first();
  training_time = Object.values(training_time)[0];
  var mydate = new Date(training_time);
  var result = mydate.toString('dddd MMM yyyy hh:mm:ss');
  var training = await mysql(trainingTableName).where({ UpdatedTime: training_time });
  ctx.body = training;
}

async function post(ctx) {
  var training = ctx.request.body;
  await mysql(trainingTableName).insert(training);
}

async function put(ctx) {
  var training = ctx.request.body;
  var training_time = await mysql(trainingTableName).max("UpdatedTime").first();
  training_time = Object.values(training_time)[0];
  await mysql(trainingTableName).where({ UpdatedTime: training_time }).update(training);
}

module.exports = {
  get,
  post,
  put
};
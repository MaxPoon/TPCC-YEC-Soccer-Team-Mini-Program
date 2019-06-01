const assert = require('assert');
const { mysql } = require('../qcloud.js');
const trainingTableName = "Training";

async function get(ctx) {
  var memory = await mysql(trainingTableName).orderBy('UpdatedTime', 'desc').select('*').limit(10);
  ctx.body = memory;
}

module.exports = {
  get
};
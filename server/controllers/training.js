const assert = require('assert');
const { mysql } = require('../qcloud.js');
const trainingTableName = "Training";

async function get(ctx) {
  
  // var training = await mysql(trainingTableName).where({ UpdatedTime: "2019-01-01 00:00:00"});

  var training_time = await mysql(trainingTableName).max("UpdatedTime").first();
  // console.log("*************************** RESPONSE *********************************")
  // console.log(training_time);
  training_time = Object.values(training_time)[0];
  // console.log(training_time);
  var mydate = new Date(training_time);
  // console.log(mydate);
  var result = mydate.toString('dddd MMM yyyy hh:mm:ss');
  // console.log("*************************** RESPONSE *********************************")
  // console.log(result);
  var training = await mysql(trainingTableName).where({ UpdatedTime: training_time });
  ctx.body = training;
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
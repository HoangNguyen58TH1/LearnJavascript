const moment = require('moment')

// var time = new Date();
// console.log(time.getTime());
// console.log(typeof time);
// var timezone = Date();
// console.log(timezone);
// console.log(typeof timezone);

var time = moment('2020-09-10 18:00');
console.log(time);
console.log(time.fromNow());
console.log(time.format('YYYY/DD/MM'));
// console.log(typeof time);
const moment = require('moment');

var date = moment(1234000000000);
var someTimesstamp = moment().valueOf();
console.log(someTimesstamp);
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));
// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

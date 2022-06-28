
// console.log(); //global

// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// var message = '';
// console.log(global.message);

// var sayHello = function(){
     
// }

// window.sayHello();

// var logger = require('./logger');

// logger.log('ruchith');


const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
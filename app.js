var counter = require('./count');
console.log("hello world");

//global object methods

setTimeout(()=>{
console.log('settimeout');
},1000);

// setInterval(()=>{
// console.log('setinterval');
// },2000);

console.log(counter(['nam','abi']));
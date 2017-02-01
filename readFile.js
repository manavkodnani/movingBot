var fs = require('fs');
var a = [];
var array = fs.readFileSync('inputFile.txt').toString().split("\n");
for (i in array) {
  arr = array[i].match(/[^\s]+/g);
  a.push(arr);
}
console.log(a);
var x = parseInt(a[0][0]);
console.log(x);
var y = parseInt(a[0][1]);
console.log(y);
var initialX = parseInt(a[1][0]);
var initialY = parseInt(a[1][1]);
var initialDirection = (a[1][2]);
var path = a[2];
console.log(initialX);
console.log(initialY);
console.log(initialDirection);
console.log(path);

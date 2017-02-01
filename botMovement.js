var fs = require('fs');
var a = [];
var array = fs.readFileSync('inputFile.txt').toString().split("\n");
for (i in array) {
  arr = array[i].match(/[^\s]+/g);
  a.push(arr);
}
var xGrids = parseInt(a[0][0]);
var yGrids = parseInt(a[0][1]);
var initialX = parseInt(a[1][0]);
var initialY = parseInt(a[1][1]);
var initialDirection = (a[1][2]);
var path = a[2];
var pathLength = (a[2][0].length);
var flag = 0;

function checkBoundary(x, y) {
  if (x < 0 || x >= xGrids || y < 0 || y >= yGrids) {
    return 0;
  }
  else {
    return 1;
  }
}

for (var i = 0; i < pathLength; i++) {
  if (a[2][0][i] !== 'M' && a[2][0][i] !== 'L' && a[2][0][i] !== 'R') {
    flag = 1;
    break;
  }
}
if (flag === 1) {
  console.log('In input file, there is a direction that is not according to input conditions');
}
else {
  botMovement();
}

function botMovement() {
  for (var i = 0; i < pathLength; i++) {
    if (a[2][0][i] === 'M') {
      if (initialDirection === 'N' && checkBoundary(initialX, initialY - 1)) {
        initialY--;
      }
      else if (initialDirection === 'S' && checkBoundary(initialX, initialY + 1)) {
        initialY++;
      }
      else if (initialDirection === 'E' && checkBoundary(initialX + 1, initialY)) {
        initialX++;
      }
      else if (initialDirection === 'W' && checkBoundary(initialX - 1, initialY)) {
        initialX--;
      }
      else {
        console.log('Bot cannot cross the boundary. Revert in some other position. Cannot move in further', initialDirection, 'direction');
        continue;
      }
    }

    else if (a[2][0][i] === 'L') {
      if (initialDirection === 'N') {
        initialDirection = 'E';
      }
      else if (initialDirection === 'S') {
        initialDirection = 'W';
      }
      else if (initialDirection === 'E') {
        initialDirection = 'S';
      }
      else {
        initialDirection = 'N';
      }
    }

    else if (a[2][0][i] === 'R') {
      if (initialDirection === 'N') {
        initialDirection = 'W';
      }
      else if (initialDirection === 'S') {
        initialDirection = 'E';
      }
      else if (initialDirection === 'E') {
        initialDirection = 'N';
      }
      else {
        initialDirection = 'S';
      }
    }

    console.log('Bot is now in', initialX, initialY, 'facing', initialDirection, 'direction');
  }
  console.log('Final position of bot is:', initialX, initialY, initialDirection);
}


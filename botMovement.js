var fs = require('fs');
var a = [];
var newLineArray = fs.readFileSync('inputFile.txt').toString().split("\n");
for (i in newLineArray) {
  eachLineInputsArray = newLineArray[i].match(/[^\s]+/g);
  a.push(eachLineInputsArray);
}
var xGrids = Number(a[0][0]);
var yGrids = Number(a[0][1]);
var initialX = Number(a[1][0]);
var initialY = Number(a[1][1]);
var initialDirection = (a[1][2]);
var pathOfBot = a[2];

botMovement(xGrids, yGrids, initialX, initialY, initialDirection, pathOfBot);

function botMovement(xGrids, yGrids, initialX, initialY, initialDirection, pathOfBot) {

  if (checkInvalid(xGrids, yGrids, initialX, initialY, initialDirection, pathOfBot)) {
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
      console.log('Error: In input file, there is a direction that is not according to input conditions');
    }
    else {
      botMovementOperations();
    }

    function botMovementOperations() {
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
            console.log('Error: Bot cannot cross the boundary. Revert in some other position. Cannot move in further', initialDirection, 'direction');
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

        //console.log('Bot is now in', initialX, initialY, 'facing', initialDirection, 'direction');
      }
      console.log('Final position of bot is:', initialX, initialY, initialDirection);
    }
  }
}
function checkInvalid(xGrids, yGrids, initialX, initialY, initialDirection, pathOfBot) {
  function isInt(n) { return parseInt(n) === n }
  if (xGrids === undefined) {
    return console.log('Error: xGrids is not defined');
  }
  if (!isInt(xGrids)) {
    return console.log('Error: xGrids is not integer value');
  }
  if (xGrids <= 0) {
    return console.log('Error: xGrids is not positive integer value');
  }
  if (yGrids === undefined) {
    return console.log('Error: yGrids is not defined');
  }
  if (!isInt(yGrids)) {
    return console.log('Error: yGrids is not integer value');
  }
  if (yGrids <= 0) {
    return console.log('Error: yGrids is not positive integer value');
  }
  if (initialX === undefined) {
    return console.log('Error: postion of X is not defined');
  }
  if (!isInt(initialX)) {
    return console.log('Error: postion of X given is not integer value');
  }
  if (initialX <= 0) {
    return console.log('Error: postion of X is not positive integer value');
  }
  if (initialY === undefined) {
    return console.log('Error: postion of Y is not defined');
  }
  if (!isInt(initialY)) {
    return console.log('Error: postion of Y given is not integer value');
  }
  if (initialY <= 0) {
    return console.log('Error: postion of Y is not positive integer value');
  }
  if (initialDirection != 'N' && initialDirection != 'S' && initialDirection != 'E' && initialDirection != 'W') {
    return console.log('Not a valid direction');
  }
  return 1;
}


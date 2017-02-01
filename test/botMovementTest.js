chai = require('chai');
assert = chai.assert;

var botMovement = require('../botMovement.js');

var gridX;
var gridY;
var xposition;
var yposition;
var direction;
var pathOfBot;
describe('When given valid input from inputFile.txt', function () {
  it('should return postion of x and y on the grid and the direction bot is facing', function () {
    gridX = 10;
    gridY = 20;
    xposition = 3;
    yposition = 3;
    direction = 'N';
    pathOfBot = ['MMLMLMLML'];
    assert.equal(botMovement(gridX, gridY, xposition, yposition, direction, pathOfBot), 'Final position of bot is: 3 2 N');
  });

  describe('When given invalid input from inputFile.txt', function () {
    it('should return error when inputs are given in floating point', function () {
      gridX = 10.5;
      gridY = 20;
      xposition = 3;
      yposition = 3;
      direction = 'N';
      pathOfBot = ['MMLMLMLML'];
      assert.equal(botMovement(gridX, gridY, xposition, yposition, direction, pathOfBot), 'Error: xGrids is not integer value');
    })
  })
});
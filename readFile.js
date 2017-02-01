var fs = require('fs');
fs.readFile('./inputFile.txt', (err, data) => {
  if (err) throw err;
  var botData = data.toString();
  console.log(botData);
});
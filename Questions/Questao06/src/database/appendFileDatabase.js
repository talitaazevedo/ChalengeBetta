const { promisify } = require('util');
const fs = require('fs');

module.exports = function appendFile(l1,l2,b1,b2,distanceBetweenTwoPoints){
  const appendFilePromisified = promisify(fs.appendFile)
  return appendFilePromisified(
    "database.txt",
    `p1(${l1}, ${b1}) p2(${l2}, ${b2}) d= ${distanceBetweenTwoPoints}KM\n`
  ).then(() => {
    return distanceBetweenTwoPoints;
  });

}

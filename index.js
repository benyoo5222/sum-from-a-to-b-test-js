
function sum(fromN, toN) {
  var total = 0;
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return fromN;
  }
  // total += toN;
  total += toN + sum(fromN, toN-1);
  return total;

}


module.exports = sum;

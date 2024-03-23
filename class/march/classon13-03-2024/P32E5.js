console.log("=================================P32Q5(2)");

var TheCounter = 0;
var TheCursor = 1;

while (TheCursor == 1) {
  var TheCursor = 0;
  var DivingNumber = 2;
  var Num = +prompt("Please input a number");

  while (DivingNumber <= parseInt(Num ** 0.5) && TheCursor == 0) {
    if (Num % DivingNumber == 0) {
      var TheCursor = 1;
    } else {
      DivingNumber = DivingNumber + 1;
    }
  }

  if (TheCursor == 1) {
    TheCounter = TheCounter + 1;
  } else {
  }
}
console.log("The number of non-prime numbers entered is " + TheCounter);

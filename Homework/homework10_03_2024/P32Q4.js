console.log("Page 32 exercise 4");

var Num = +prompt("Please input a number");
var DecomposedNumber = Num;
var DigitToCheck = 0;
// var Digit = 9;
var Digit = 0;
var SortedNumber = 0;

// while (Digit >= 0 && Num > 9) {
while (Digit <= 9 && Num > 9) {
  // console.log(Digit + " הספרה הנבדקת היא");
  while (DecomposedNumber > 0) {
    // console.log(DecomposedNumber + " המספר הנבדק הוא");
    DigitToCheck = DecomposedNumber % 10;
    // console.log(DigitToCheck + " ספרת המספר הנבדקת היא");
    if (DigitToCheck == Digit) {
      SortedNumber = SortedNumber * 10 + Digit;
      // console.log(SortedNumber + " המספר הממוין החלקי הוא");
    }
    DecomposedNumber = parseInt(DecomposedNumber / 10);
    // console.log(DecomposedNumber + "  יתרת המספר הנבדק היא");
  }
  // var Digit = Digit - 1;
  var Digit = Digit + 1;
  var DecomposedNumber = Num;
}
console.log(
  "The input number was " + Num + " The sorted number is " + SortedNumber
);

console.log("Page 28 exercise 17");

var Num1 = +prompt("Please input the first number");
var Num2 = +prompt("Please input the secound number");
var MultiplicationOfNumbers = Num1;
var Counter = 1;

while (Counter < Num2) {
  MultiplicationOfNumbers = MultiplicationOfNumbers * Num1;
  Counter++;
}
console.log(
  "The result of rasing the number " +
    Num1 +
    " to the power of " +
    Num2 +
    " is " +
    MultiplicationOfNumbers
);

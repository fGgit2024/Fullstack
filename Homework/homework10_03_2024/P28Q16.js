console.log("Page 28 exercise 16");

var Num1 = +prompt("Please input the first number");
var Num2 = +prompt("Please input the secound number");
var MultiplicationOfNumbers = 0;
var Counter = 0;

while (Counter < Num2) {
  MultiplicationOfNumbers = MultiplicationOfNumbers + Num1;
  Counter++;
}
console.log(
  "The result of multiplying the number " +
    Num1 +
    " by the number " +
    Num2 +
    " is " +
    MultiplicationOfNumbers
);

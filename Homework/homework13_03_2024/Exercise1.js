console.log(
  "==================================Homework 13/03/2024 Exercise no'1"
);

let Num1 = +prompt("Please input the first number");
let Num2 = +prompt("Please input the secound number");

SumNumbers(Num1, Num2);

function SumNumbers(Num1, Num2) {
  var sum = Num1 + Num2;
  return console.log("The sum of num1 + num2 is: " + sum);
}

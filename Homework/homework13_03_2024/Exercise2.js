console.log(
  "==================================Homework 13/03/2024 Exercise no'2"
);

let Num1 = +prompt("Please input the first number");
let Num2 = +prompt("Please input the secound number");

MaxNumber(Num1, Num2);

function MaxNumber(Num1, Num2) {
  if (Num1 >= Num2) {
    var HighestNumber = Num1;
  } else {
    var HighestNumber = Num2;
  }
  return console.log(
    "The highest number among the numbers " +
      Num1 +
      " and " +
      Num2 +
      " is: " +
      HighestNumber
  );
}

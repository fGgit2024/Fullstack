console.log(
  "==================================Homework 13/03/2024 Exercise no'3"
);

let Num1 = +prompt("Please input the first number");
let Num2 = +prompt("Please input the secound number");
let _Num3 = +prompt("Please input the third number");
let SmallestNumber = 0;

MinNumber(Num1, Num2, _Num3);

function MinNumber(Num1, Num2, _Num3) {
  if (Num1 >= Num2) {
    SmallestNumber = Num2;
    if (SmallestNumber >= _Num3) {
      SmallestNumber = _Num3;
    } else {
    }
  } else {
    SmallestNumber = Num1;
    if (SmallestNumber >= _Num3) {
      SmallestNumber = _Num3;
    } else {
    }
  }

  return console.log(
    "The smallest number among the numbers " +
      Num1 +
      " and " +
      Num2 +
      " and " +
      _Num3 +
      " is: " +
      SmallestNumber
  );
}
